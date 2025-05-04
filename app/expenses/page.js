"use client";
import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import ExpenseList from "../Components/ExpenseList";

const page = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="block lg:hidden">
        <Navbar />
      </div>

      <div className="flex flex-1">
        <div className="hidden lg:block fixed top-0 left-0 h-screen w-64 bg-base-200 z-10">
          <Sidebar page="expenses" />
        </div>
        {/* Main content */}
        <div className="lg:ml-64 w-full h-full py-5 bg-base-100 px-6">
          <div className="flex flex-row bg-base-100 py-5 justify-between align-middle w-full px-12">
            <div>
              <h1 className="text-2xl font-semibold inline align-middle mt-[5px]">
                Expenses
              </h1>
            </div>
            <button className="bg-[#0845a6] cursor-pointer hover:opacity-80 justify-center gap-2 rounded-md text-sm font-medium h-10 px-4 py-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className=" cursor-pointer mr-2 h-4 w-4"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              Add Expense
            </button>
          </div>

          <ExpenseList />
        </div>
      </div>
    </div>
  );
};

export default page;
