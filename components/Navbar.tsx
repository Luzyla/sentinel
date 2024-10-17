'use client'
import React from "react"
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import logoImg from "../public/images/sentinel-yellow-logo.png"

const Navbar = () => {
    const {data: session} = useSession();

    return (
        <nav className="flex justify-between items-center mt-2 p-2">
            <div className="flex justify-between items-center flex-col w-1/3">
                <Link href='/'>
                    <Image src={logoImg} alt="Sentinel logo" width={80} height={80} priority={false} unoptimized={true}></Image>
                </Link>
                <h1 className="text-xl font-bold">Sentinel</h1>
            </div>

            {session ? (
                <>
                    <div className="flex items-center w-1/3">
                        <h3 className="text-xl ">Welcome back {session?.user?.name}</h3>
                    </div>
                    <div className="flex flex-col items-center justify-center w-1/3">
                        <Image src={session?.user?.image as string} alt="User image profile" width={50} height={50} priority={false} className="rounded-full"></Image>
                        <p>{session?.user?.email}</p>
                        <Button
                            
                            onClick={ async () => {
                            await signOut({
                                callbackUrl: "/",
                            })
                            }}>Sign Out
                        </Button>
                    </div>
                </>
            ) : (
                <>
                <div className="flex items-center w-1/3">
                    <h3>You`re not logged in</h3>
                </div>
                <div className="flex flex-col items-center justify-center w-1/3">
                    <Button 
                    
                    onClick={() => signIn("google")}>Sign in with google</Button>
                    <Button 
                    
                    onClick={() => signIn("github")}>Sign in with github</Button>
                </div>
                </>
            )}
    </nav>
    )
}

export default Navbar;