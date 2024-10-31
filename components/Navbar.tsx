'use client'
import React from "react"
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import logoImg from "../public/images/sentinel-yellow-logo.png"
import { FaGoogle, FaGithub } from "react-icons/fa6";
import { FaSignOutAlt, FaSearch } from "react-icons/fa";


const Navbar = () => {
    const {data: session} = useSession();

    return (
        <nav className="flex justify-between items-center p-2 bg-first-color shadow-lg">
            {/* {session ? (<div className="flex justify-between items-center flex-col">
                <Link href='/'>
                    <Image src={logoImg} alt="Sentinel logo" width={100} height={100} priority={false}></Image>
                </Link>
                <h1 className="text-2xl font-bold">Sentinel</h1>
            </div>) : ''} */}
            

            {session ? (
                <>
                    <div className="flex items-center w-2/4">
                        <div className="flex items-center p-2 border-2 rounded-full mx-4 text-accent-color">
                            <FaSearch />
                            <input type="text" name="search" id="search" className="bg-first-color px-2 placeholder:text-accent-color" placeholder="Search..." />
                        </div>
                        
                        
                    </div>
                    <div className="flex gap-2 items-start">
                        <div className="flex flex-col items-end justify-center mt-1">
                            <p className="text-xl font-bold">{session?.user?.name}</p>
                            <p>{session?.user?.email}</p>
                        </div>
                        <div className="flex items-center justify-center">
                            <picture className="rounded-full overflow-hidden border-solid border-4 border-accent-color m-2">
                                <Image src={session?.user?.image as string} alt="User image profile" width={45} height={45} priority={false} className="rounded-full"></Image>
                            </picture>
                            
                            <Button
                                onClick={ async () => {
                                await signOut({
                                    callbackUrl: "/",
                                })
                                }}>
                                    <FaSignOutAlt />
                            </Button>
                        </div>
                    </div>
                </>
            ) : (
                <>
                <div className="flex items-center">
                    <h3>You`re not logged in</h3>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Button 
                    onClick={() => { 
                        signIn("google", { callbackUrl: "/dashboard" })
                    }}
                    >
                        <FaGoogle /> Sign in with Google
                    </Button>
                    <Button 
                    onClick={() => {
                        signIn("github", { callbackUrl: "/dashboard" })}}>
                        <FaGithub /> Sign in with GitHub
                    </Button>
                </div>
                </>
            )}
    </nav>
    )
}

export default Navbar;