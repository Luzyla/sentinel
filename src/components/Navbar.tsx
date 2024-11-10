'use client'
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import LogInButtons from "./LogInButtons";
import LogOutButton from "./LogOutButton";


const Navbar = () => {
    const {data: session} = useSession();

    return (
        <nav className="flex justify-between items-center p-2 bg-first-color shadow-lg min-w-fit">

            {session ? (
                <>
                    {/* <div className="flex items-center w-1/5"> */}
                        {/* SEARCH */}
                        <div className="flex items-center p-2 border-2 rounded-full mx-4 text-accent-color">
                            <FaSearch />
                            <input type="text" name="search" id="search" className="sm:hidden placeholder:text-accent-color bg-first-color px-2 " placeholder="Search..." />
                        </div>
                    {/* </div> */}

                    <div className="flex gap-2 items-start">
                        <div className="flex flex-col items-end justify-center mt-1">
                            <p className="text-xl font-bold">{session?.user?.name}</p>
                            <p>{session?.user?.email}</p>
                        </div>
                        <div className="flex items-center justify-center">
                            <picture className="rounded-full overflow-hidden border-solid border-4 border-accent-color m-2 w-[50px] h-[50px]">
                                <Image src={session?.user?.image as string} alt="User image profile" width={45} height={45} priority={false} className="rounded-full"></Image>
                            </picture>
                            <LogOutButton/>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex items-center">
                        <h3>You`re not logged in</h3>
                    </div>
                    <LogInButtons/>
                </>
            )}
    </nav>
    )
}

export default Navbar;