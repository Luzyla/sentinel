import Image from "next/image";
import Dashboard from "../../components/Dashboard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>Home Page</h1>
     <Dashboard />
    </main>
  );
}