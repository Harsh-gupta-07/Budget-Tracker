"use client"
import CategoriesWiseExpenseCards from "@/Components/CategoriesWiseExpenseCards";
import DashboardCards from "@/Components/DashboardCards";
import ExpenseList from "@/Components/ExpenseList";
import Reminders from "@/Components/Reminders";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useCallback, memo } from "react";
import AddCategoryModal from "@/Components/modals/AddCategory";
import AddReminderModal from "@/Components/modals/AddReminder";

const AddButton = (({ text, onClick }) => (
  <button
    className="flex flex-row items-center cursor-pointer"
    onClick={onClick}
  >
    <div className="w-6 h-6 bg-[#459df5] rounded-full flex justify-center items-center mr-2">
      <Image
        src="/plus-black.svg"
        alt="plus icon"
        width={12}
        height={12}
      />
    </div>
    <p className="text-[#459df5] text-sm">{text}</p>
  </button>
));


const DashboardPage = () => {

  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showReminderModal, setShowReminderModal] = useState(false);

  const handleCategoryModal = useCallback(() => {
    setShowCategoryModal(prev => !prev);
  }, []);

  const handleReminderModal = useCallback(() => {
    setShowReminderModal(prev => !prev);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={0}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <DashboardCards />

          <div className="flex flex-row bg-[#1c1e1f] py-2 pb-4 lg:py-5 justify-between align-middle px-8 lg:px-12 w-full">
            <div>
              <h1 className="text-lg font-semibold inline align-middle mt-[5px]">
                Budget Categories
              </h1>
            </div>
            <AddButton
              icon="/plus-black.svg"
              text="Add Category"
              onClick={handleCategoryModal}
            />
          </div>
          <div className="w-full"></div>
          <CategoriesWiseExpenseCards />
          {showCategoryModal && (
            <AddCategoryModal
              visible={handleCategoryModal}
            />
          )}

          <div className="flex flex-row justify-between align-middle bg-[#1c1e1f] py-1.5 lg:py-3 px-8 lg:px-12">
            <div>
              <h1 className="text-lg font-semibold inline align-middle mt-[5px]">
                Recent Expenses
              </h1>
            </div>
            <Link
              href="/dashboard/expenses"
              className="flex flex-row items-center cursor-pointer"
            >
              <p className="text-[#459df5] text-sm ">View all</p>
              <div className="w-6 h-6 rounded-full flex justify-center items-center mr-2">
                <Image
                  src="./arrow.svg"
                  alt="plus icon"
                  width={24}
                  height={24}
                />
              </div>
            </Link>
          </div>
          <ExpenseList searchQuery={""} selectedCategory={-1} />

          <div className="flex flex-row bg-[#1c1e1f] py-3 px-8 lg:py-5 justify-between align-middle lg:px-12">
            <div>
              <h1 className="text-lg font-semibold inline align-middle mt-[5px]">
                Upcoming Reminders
              </h1>
            </div>
            <AddButton
              icon="/plus-black.svg"
              text="Add Reminders"
              onClick={handleReminderModal}
            />
          </div>
          <Reminders />
          {showReminderModal && (
            <AddReminderModal
              visible={handleReminderModal}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default memo(DashboardPage);
