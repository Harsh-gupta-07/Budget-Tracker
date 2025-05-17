"use client";
import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import CategoriesWiseExpenseCards from "../../Components/CategoriesWiseExpenseCards";
import AddCategoryModal from "../../Components/modals/AddCategory";
import Dock from "@/Components/Dock";
import { AnimatePresence, motion } from "framer-motion";

const page = () => {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  return (
    <div className="h-screen flex flex-col">
      <div className="block lg:hidden">
        <Navbar />
      </div>

      <div className="flex flex-1">
        <div className="hidden lg:block fixed top-0 left-0 h-screen w-64 bg-base-200 z-10">
          <Sidebar page="categories" />
        </div>

        <div className="lg:ml-64 w-full h-full py-5 bg-base-100 mb-[56px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={0}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex flex-row bg-base-100 px-8 py-8 pt-0 pb-0 justify-between align-middle  w-full">
                <div>
                  <h1 className="text-2xl font-semibold inline align-middle mt-[5px]">
                    Budget Categories
                  </h1>
                </div>
                <button
                  onClick={() => setShowCategoryModal(true)}
                  className="bg-[#0845a6] cursor-pointer hover:opacity-80 justify-center sm:justify-center gap-2 rounded-md text-sm font-medium h-10 w-10 p-2 sm:h-10 sm:w-auto sm:px-4 sm:py-2 flex items-center"
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
                    className="h-4 w-4 sm:mr-2"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  <span className="hidden sm:inline">Add Category</span>
                </button>
              </div>
              <div className="flex flex-row bg-base-100 py-6  justify-between align-middle">
                <CategoriesWiseExpenseCards />
              </div>
              {showCategoryModal && (
                <AddCategoryModal
                  visible={() => setShowCategoryModal(!showCategoryModal)}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="block lg:hidden">
          <Dock />
        </div>
      </div>
    </div>
  );
};

export default page;
