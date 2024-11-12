'use client'
import { useSession } from "next-auth/react";
import Image from "next/image";

const ProfilePage = () => {
    const {data: session} = useSession();

    return (
        <section className="flex justify-center items-center mt-16">
            {/* CARD */}
            <div className="w-[70vw] max-w-[600px] rounded-lg overflow-hidden flex">
                {/* BANNER PICTURE */}
                <div className="bg-[#fafafa15] w-[180px] h-[300px] flex justify-center items-start">
                    <picture className="rounded-full mt-4 shadow-md shadow-light-color">
                        <Image src={session?.user?.image as string} alt="User image profile" width={100} height={100} priority={false} className="rounded-full"></Image>
                    </picture>
                </div>

                <div className="bg-[#fafafa25] h-[100%] w-[2px]"></div>
               {/* USER INFO */}
                <div className="bg-[#fafafa45] w-[100%] h-[300px] flex flex-col justify-start items-start pl-8">
                    <p className="text-xl font-bold mt-4">{session?.user?.name}</p>
                    <p>{session?.user?.email}</p>
                    <div>
                        <p></p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default ProfilePage