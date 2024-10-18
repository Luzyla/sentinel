'use client'
import React from "react"
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import logoImg from "../public/images/sentinel-yellow-logo.png"
import { FaGoogle, FaGithub } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";


const Navbar = () => {
    const {data: session} = useSession();

    return (
        <nav className="flex justify-between items-center mt-2 p-2">
            <div className="flex justify-between items-center flex-col">
                <Link href='/'>
                    <Image src={logoImg} alt="Sentinel logo" width={100} height={100} priority={false}></Image>
                </Link>
                <h1 className="text-2xl font-bold">Sentinel</h1>
            </div>

            {session ? (
                <>
                    <div className="flex items-center">
                        <p className="text-xl font-bold">Welcome back, {session?.user?.name}!</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <picture className="rounded-full overflow-hidden border-solid border-4 border-accent-color">
                            <Image src={session?.user?.image as string} alt="User image profile" width={50} height={50} priority={false} className="rounded-full"></Image>
                        </picture>
                        <p>{session?.user?.email}</p>
                        <Button
                            onClick={ async () => {
                            await signOut({
                                callbackUrl: "/",
                            })
                            }}>Sign Out <FaSignOutAlt />
                        </Button>
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