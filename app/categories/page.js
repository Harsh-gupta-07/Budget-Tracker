"use client";
import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import CategoriesWiseExpenseCards from "../../Components/CategoriesWiseExpenseCards";
import AddCategoryModal from "../../Components/modals/AddCategory";
import Dock from "@/Components/Dock";


const page = () => {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  return (
    <div className="h-screen flex flex-col ">
      <div className="block lg:hidden">
        <Navbar />
      </div>

      <div className="flex flex-1 ">
        <div className="hidden lg:block fixed top-0 left-0 h-screen w-64 bg-base-200 z-10">
          <Sidebar page="categories" />
        </div>

        <div className="mb-[56px] flex-1 lg:ml-64 h-[calc(100vh)] overflow-y-auto bg-base-100">
          <div className="flex flex-row bg-base-100 py-8 pb-0 justify-between align-middle px-18 w-full">
            <div>
              <h1 className="text-2xl font-semibold inline align-middle mt-[5px]">
                Budget Categories
              </h1>
            </div>
            <button
              className="bg-[#0845a6] cursor-pointer hover:opacity-80 justify-center gap-2 rounded-md text-sm font-medium h-10 px-4 py-2 flex items-center"
              onClick={() => setShowCategoryModal(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=" cursor-pointer mr-2 h-4 w-4"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              Add Category
            </button>
          </div>
          <div className="flex flex-row bg-base-100 p-6  justify-between align-middle">
            <CategoriesWiseExpenseCards />
          </div>
          {showCategoryModal && (
            <AddCategoryModal
              visible={() => setShowCategoryModal(!showCategoryModal)}
            />
          )}
        </div>
        <div className="block lg:hidden">
          <Dock />
        </div>
      </div>
    </div>
  );
};

export default page;
