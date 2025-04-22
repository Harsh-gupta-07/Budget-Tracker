import Image from "next/image";
import React from "react";


const Sidebar = () => {
  return (
    <ul className="bg-base-200 h-screen w-65 py-4 px-0 text-gray-300">
          <li className="pointer-events-none border-b  border-gray-400 p-[16px] pt-0 w">
            <h1 className="text-xl m-auto text-center font-bold">
              Budget Tracker
            </h1>
          </li>
          <li className="mt-5">
            <div className="flex items-center justify-start py-3 rounded-none pl-6">
              <Image
                src="/block_15713564.png"
                width={25}
                height={25}
                alt="dashboard-logo"
              />
              <p className="text-base font-medium ml-1">Dashboard</p>
            </div>
          </li>
          <li>
            <div className="flex items-center justify-start py-3 rounded-none pl-6">
              <Image
                src="/wallet-4-svgrepo-com (2).svg"
                width={25}
                height={25}
                alt="dashboard-logo"
              />
              <p className="text-base font-medium ml-1">Budget Categories</p>
            </div>
          </li>
          <li>
            <div className="flex  items-center justify-start py-3 rounded-none pl-6">
              <Image
                src="/bill-svgrepo-com (1).svg"
                width={25}
                height={25}
                alt="dashboard-logo"
              />
              <p className="text-base font-medium ml-1">Expenses</p>
            </div>
          </li>
          <li>
            <div className="flex items-center justify-start py-3 rounded-none pl-6">
              <Image
                src="/bell-svgrepo-com.svg"
                width={25}
                height={25}
                alt="dashboard-logo"
              />
              <p className="text-base font-medium ml-1">Reminders</p>
            </div>
          </li>
        </ul>
  );
};

export default Sidebar;


{/* <ul className="menu bg-base-200 min-h-full w-65 py-4 px-0 text-gray-300">
          <li className="pointer-events-none border-b  border-gray-400 p-[16px] pt-0 w">
            <h1 className="text-xl m-auto text-center font-bold">
              Budget Tracker
            </h1>
          </li>
          <li className="mt-5">
            <div className="flex items-center justify-start py-3 rounded-none pl-6">
              <Image
                src="/block_15713564.png"
                width={25}
                height={25}
                alt="dashboard-logo"
              />
              <p className="text-base font-medium ml-1`````````">Dashboard</p>
            </div>
          </li>
          <li>
            <div className="flex items-center justify-start py-3 rounded-none pl-6">
              <Image
                src="/wallet-4-svgrepo-com (2).svg"
                width={25}
                height={25}
                alt="dashboard-logo"
              />
              <p className="text-base font-medium ml-1">Budget Categories</p>
            </div>
          </li>
          <li>
            <div className="flex  items-center justify-start py-3 rounded-none pl-6">
              <Image
                src="/bill-svgrepo-com (1).svg"
                width={25}
                height={25}
                alt="dashboard-logo"
              />
              <p className="text-base font-medium ml-1">Expenses</p>
            </div>
          </li>
          <li>
            <div className="flex items-center justify-start py-3 rounded-none pl-6">
              <Image
                src="/bell-svgrepo-com.svg"
                width={25}
                height={25}
                alt="dashboard-logo"
              />
              <p className="text-base font-medium ml-1">Reminders</p>
            </div>
          </li>
        </ul> */}