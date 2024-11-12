import { FaCircleInfo, FaDev } from "react-icons/fa6";
import Link from "next/link";

const InfoPage = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold mt-16 flex gap-1 items-center"><FaCircleInfo/> Info</h3>
            <div className="w-[75%] max-w-[600px] mt-4 flex flex-col items-start justify-center gap-2">
                <p className="">Sentinel is a user-friendly platform designed to streampne operations and improve communication. Built with React, Next.js, and Tailwind CSS, it offers:
                </p>
                <p className="">Customizable dashboards for various roles</p>
                <p className="">Real-time notifications and messaging</p>
                <p className="">Advanced data visuapzation with Recharts</p>
                <p className="">Intuitive schedupng with React-Calendar</p>
                <p className="">Secure authentication with NextAuth</p>
            </div>
            
            <h3 className="text-2xl font-bold mt-16 flex gap-1 items-center justify-center"><FaDev/> Technologies</h3>
            <div className="w-[75%] max-w-[600px]  mt-4 flex flex-col items-start justify-center gap-2">
                <p className="">React with Next.js: React and Next.js are popular JavaScript libraries used for building user interfaces and server-rendered applications.</p>
                <p className="">NextAuth: A library for adding authentication to Next.js applications.</p>
                <p className="">Recharts: A reusable charting library built with React and D3.</p>
                <p className="">React-Calendar: A flexible and customizable calendar component for React.</p>
                <p className="">Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.</p>
                <p className="w-[75%] mt-4"></p>
            </div>
            <p className="w-[75%] mt-14 text-sm font-semibold text-right">Version beta 0.1.1</p>
            <Link className="w-[75%] mt-2 text-sm font-semibold text-right" href='mailto:coder@luzyla.dev'>Report an issue</Link>
        </div>
    )
}

export default InfoPage