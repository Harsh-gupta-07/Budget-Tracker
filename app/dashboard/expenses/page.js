"use client";
import React, { useContext, useState } from "react";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import ExpenseList from "@/Components/ExpenseList";
import AddExpenseModal from "@/Components/modals/AddExpense";
import Dock from "@/Components/Dock";
import { AnimatePresence, motion } from "framer-motion";
import { useBudget } from "@/app/context/BudgetContext";

const page = () => {
  const [addExpense, setExpense] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const { categories } = useBudget();
  
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex flex-row bg-[#1b1d1e] py-5 justify-between align-middle w-full px-8">
            <div>
              <h1 className="text-2xl font-semibold inline align-middle mt-[5px]">
                Expenses
              </h1>
            </div>
            <button
              onClick={() => {
                setExpense(!addExpense);
              }}
              className="bg-[#0845a6] cursor-pointer hover:opacity-80 justify-center gap-2 rounded-md text-sm font-medium h-10 px-4 py-2 flex items-center"
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
              Add Expense
            </button>
          </div>

          <div className="bg-[#080808] rounded-md p-5 mx-8 mb-3 border border-solid border-gray-500">
            <h2 className="text-xl font-semibold mb-4">Filter Expenses</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Search by description"
                className="input input-bordered w-full focus:outline-none bg-[#080808]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="dropdown dropdown-end w-full bg-[#080808] sm:w-64 border rounded border-solid border-gray-500">
                <label
                  tabIndex={0}
                  className="btn w-full justify-between bg-[#080808]"
                >
                  {selectedCategory === -1 ? "All Categories" : categories[parseInt(selectedCategory)]?.category || "All Categories"}
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
                  className="dropdown-content z-[1] menu p-2 shadow bg-[#080808] rounded-box w-full border rounded border-solid border-gray-500"
                >
                  <li>
                    <a onClick={() => setSelectedCategory(-1)}>All Categories</a>
                  </li>
                  {categories.map((cat, index) => (
                    <li key={cat.id}>
                      <a onClick={() => setSelectedCategory(index)}>{cat.category}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <ExpenseList searchQuery={searchQuery} selectedCategory={selectedCategory} />

          {addExpense && (
            <AddExpenseModal
              visible={() => {
                setExpense(!addExpense);
              }}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default page;
