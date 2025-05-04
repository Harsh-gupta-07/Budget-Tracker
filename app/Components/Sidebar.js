import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = ({ page }) => {
  return (
    <ul className="bg-base-200 h-screen w-65 py-4 px-0 text-gray-300">
      <li className="pointer-events-none border-b  border-gray-400 p-[16px] pt-0 w">
        <h1 className="text-xl m-auto text-center font-bold">Budget Tracker</h1>
      </li>
      <li className={`mt-5 ${page === "dashboard" ? "bg-gray-800" : "hover:bg-gray-700"} `}>
        <Link href="/">
          <div className="flex items-center justify-start py-3.5 rounded-none pl-6">
            <Image
              src={page==="dashboard"?"/dashboard-active.svg":"/dashboard-inactive.svg"}
              width={25}
              height={25}
              alt="dashboard-logo"
            />
            <p className="text-base font-medium ml-3">Dashboard</p>
          </div>
        </Link>
      </li>
      <li className={page === "categories" ? "bg-gray-800" : "hover:bg-gray-700"}>
        <Link href="/categories">
          <div className="flex items-center justify-start py-3.5 rounded-none pl-6">
            <Image
              src={page==="categories"?"/wallet-active.svg":"/wallet-inactive.svg"}
              width={25}
              height={25}
              alt="dashboard-logo"
            />
            <p className="text-base font-medium ml-3">Budget Categories</p>
          </div>
        </Link>
      </li>
      <li className={page === "expenses" ? "bg-gray-800" : "hover:bg-gray-700"}>
        <Link href="/expenses">
          <div className="flex  items-center justify-start py-3.5 rounded-none pl-6">
            <Image
              src={page==="expenses"?"/bill-active.svg":"/bill-inactive.svg"}
              width={25}
              height={25}
              alt="dashboard-logo"
            />
            <p className="text-base font-medium ml-3">Expenses</p>
          </div>
        </Link>
      </li>
      <li className={page === "reminders" ? "bg-gray-800" : "hover:bg-gray-700"}>
        <Link href="/reminders">
          <div className="flex items-center justify-start py-3.5 rounded-none pl-6">
            <Image
              src={page==="reminders"?"/bell-active.svg":"/bell-inactive.svg"}
              width={25}
              height={25}
              alt="dashboard-logo"
            />
            <p className="text-base font-medium ml-3">Reminders</p>
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;

