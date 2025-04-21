import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar: Only visible on small/medium screens */}
      <div className="block lg:hidden">
        <Navbar />
      </div>

      <div className="flex flex-1">
        {/* Sidebar: Only visible on large screens and up */}
        <div className="hidden lg:block w-65 bg-base-200">
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="w-full h-full">
          <div className="flex flex-row bg-base-100 p-6  justify-between align-middle">
            <h1 className="text-2xl font-bold inline align-middle mt-[5px]">Dashboard</h1>
            <button className="bg-base-200 hover:bg-base-300 rounded-full btn w-10 h-10 p-3 border-none"><Image src="/plus-svgrepo-com.svg" alt="plus img" width={20} height={20} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
