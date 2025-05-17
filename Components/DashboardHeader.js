import Image from "next/image";
import React, { useState } from "react";
import AddExpenseModal from "./modals/AddExpense";

const DashboardHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-row bg-[#1c1e1f] p-5 px-8  justify-between align-middle lg:px-12">
      <h1 className="text-2xl font-bold inline align-middle mt-[5px]">
        Dashboard
      </h1>
      <div className="gap-3 flex">
        <div className="max-w-35 dropdown dropdown-end border rounded border-solid border-gray-500 bg-[#080808]">
          <label
            tabIndex={0}
            className="cursor-pointer justify-center gap-2 rounded-md text-sm font-medium  h-10 px-4 py-2 flex items-center"
          >
            May 2025
            <svg
              className="ml-2 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow w-full border rounded-md border-solid border-gray-500 bg-[#080808]"
          >
            <li>
              <a>Dec 2025</a>
            </li>
            <li>
              <a>Aug 2025</a>
            </li>
            <li>
              <a>Sept 2025</a>
            </li>
          </ul>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-base-300 cursor-pointer hover:bg-[#080808] rounded-full w-10 h-10 p-3 border-none"
        >
          <Image
            src="/plus-svgrepo-com.svg"
            alt="plus img"
            width={20}
            height={20}
          />
        </button>
        
      </div>

      {isModalOpen && <AddExpenseModal visible={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default DashboardHeader;
