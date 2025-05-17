"use client";
import React, { useContext, useState } from "react";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Reminders from "../../Components/Reminders";
import AddReminderModal from "../../Components/modals/AddReminder";
import Dock from "@/Components/Dock";
import { AllContext } from "@/context/AllContext";
import { AnimatePresence, motion } from "framer-motion";

const page = () => {
  console.log(useContext(AllContext));

  const [showReminderModal, setShowReminderModal] = useState(false);
  return (
    <div className="h-screen flex flex-col">
      <div className="block lg:hidden">
        <Navbar />
      </div>

      <div className="flex flex-1">
        <div className="hidden lg:block fixed top-0 left-0 h-screen w-64 bg-base-200 z-10">
          <Sidebar page="categories" />
        </div>
        <div className="lg:ml-64 w-full h-full py-5 bg-[#1b1d1e] mb-[56px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={0}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex flex-row bg-[#1b1d1e] justify-between align-middle w-full px-8">
                <div>
                  <h1 className="text-2xl font-semibold inline align-middle mt-[5px]">
                    Reminders
                  </h1>
                </div>
                <button
                  onClick={() => setShowReminderModal(!showReminderModal)}
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
                  Add Reminder
                </button>
              </div>
              <div className="h-full flex flex-row bg-[#1b1d1e] py-6  justify-between align-middle">
                <Reminders />
                {showReminderModal && (
                  <AddReminderModal
                    visible={() => setShowReminderModal(!showReminderModal)}
                  />
                )}
              </div>
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
