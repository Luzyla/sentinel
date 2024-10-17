'use client'
import React from "react"
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Dashboard = () => {
    const {data: session} = useSession();

    return (
        <>
      {session ? (
        <>
        <figure className="rounded-full bg-second-color w-50 h-50">
          <Image src={session?.user?.image as string} alt="User image profile" width={65} height={65} priority={false} className="rounded-full"></Image>
        </figure>
          <h1>Welcome back {session?.user?.name}</h1>
          <p>{session?.user?.email}</p>
          {/* <button onClick={() => signOut()}>Sign Out</button> */}
          <button
            onClick={ async () => {
              await signOut({
                callbackUrl: "/",
              })
            }}>Sign Out</button>
        </>
      ) : (
        <>
          <h3>You`re not logged in</h3>
          <button onClick={() => signIn("google")}>Sign in with google</button>
          <button onClick={() => signIn("github")}>Sign in with github</button>
        </>
      )}
    </>
    )
}

export default Dashboard;