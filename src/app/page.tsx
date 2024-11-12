/* eslint-disable prettier/prettier */
"use client";
import React, { useContext } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";
import LogInButtons from "@/components/LogInButtons";
import LogOutButton from "@/components/LogOutButton";
import SelectUser from "@/components/SelectUser";
import UserContext from "@/hooks/UserContext";

export default function Home() {
  const { data: session } = useSession();
  const { userRole } = useContext(UserContext);

  return (
    <>
      <header className="p-6 text-3xl bg-first-color w-screen">
        <Logo />
      </header>

      <main className="flex flex-col items-center justify-between p-24 w-full">
        {session ? (
          <>
            <div className="flex flex-col items-center justify-start">
              <picture className="rounded-full overflow-hidden border-solid border-4 border-accent-color m-2">
                <Image
                  src={session?.user?.image as string}
                  alt="User image profile"
                  width={80}
                  height={80}
                  priority={false}
                  className="rounded-full"
                ></Image>
              </picture>
              <h2 className="text-xl">Welcome, {session?.user?.name}!</h2>
              <Link href={`/dashboard/${userRole}`}>
                <p className="font-bold text-xl m-2">Open your Dashboard</p>
              </Link>
            </div>
            <LogOutButton />
          </>
        ) : (
          <>
            <section className="flex flex-col h-auto">
              <div className="flex flex-col items-center mb-4">
                <h2>Welcome to Sentinel</h2>
                <p>Please, log in:</p>
              </div>
              <LogInButtons />
              <SelectUser />
            </section>
          </>
        )}
      </main>
    </>
  );
}
