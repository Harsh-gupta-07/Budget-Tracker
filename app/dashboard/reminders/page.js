"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import Reminders from "@/Components/Reminders";
import AddReminderModal from "@/Components/modals/AddReminder";
import Dock from "@/Components/Dock";
import { AnimatePresence, motion } from "framer-motion";
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

  const [showReminderModal, setShowReminderModal] = useState(false);
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
          <div className="flex flex-row pt-5 bg-[#1b1d1e] justify-between align-middle w-full px-8">
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
    </>
  );
};

export default page;
