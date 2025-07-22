"use client";
import React, {useState, useEffect } from "react";
import CategoriesWiseExpenseCards from "@/Components/CategoriesWiseExpenseCards";
import AddCategoryModal from "@/Components/modals/AddCategory";
import { AnimatePresence, motion } from "framer-motion";
import { useBudget } from "@/app/context/BudgetContext";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

const page = () => {
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
    }
  }, []);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const {category} = useBudget()
  console.log(category);
  
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mt-[64px] lg:mt-0"
        >
          <div className="flex flex-row bg-[#1b1d1e] px-8 pt-5  justify-between align-middle  w-full">
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
          <div className="flex flex-row bg-[#1b1d1e] py-6  justify-between align-middle">
            <CategoriesWiseExpenseCards />
            {showCategoryModal && (
              <AddCategoryModal
                visible={() => setShowCategoryModal(!showCategoryModal)}
              />
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default page;
