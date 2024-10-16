'use client'
import React from "react"
import { signIn, signOut, useSession } from "next-auth/react";

const Dashboard = () => {
    const {data: session} = useSession();

    return (
        <>
      {session ? (
        <>
          <h1>Welcome back {session?.user?.name}</h1>
          <button onClick={() => signOut()}>Sign Out</button>
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