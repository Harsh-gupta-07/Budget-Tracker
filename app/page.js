"use client";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Image from "next/image";
import DashboardCards from "./Components/DashboardCards";
import CategoriesWiseExpenseCards from "./Components/CategoriesWiseExpenseCards";
import { useEffect, useState } from "react";
import ExpenseList from "./Components/ExpenseList";
import Reminders from "./Components/Reminders";
import Link from "next/link";
import AddCategoryModal from "./Components/AddCategoryModal";

export default function Home() {
  const [category, setCategories] = useState({
    Personal: { budget: 400, spent: 400, icon: "basket" },
    Utilities: { budget: 600, spent: 500, icon: "bulb" },
    Transportation: { budget: 700, spent: 50, icon: "car" },
    DiningOut: { budget: 100, spent: 0, icon: "fork-knife" },
    Entertainment: { budget: 1000, spent: 143, icon: "play" },
    Shopping: { budget: 200, spent: 99, icon: "bag" },
  });
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showReminderModal, setShowReminderModal] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <div className="block lg:hidden">
        <Navbar />
      </div>

      <div className="flex flex-1">
        <div className="hidden lg:block fixed top-0 left-0 h-screen w-64 bg-base-200 z-10">
          <Sidebar page="dashboard" />
        </div>

        <div className="lg:ml-64 w-full h-full">
          <DashboardCards />

          <div className="flex flex-row bg-base-100 py-5 justify-between align-middle px-12 w-full">
            <div>
              <h1 className="text-lg font-semibold inline align-middle mt-[5px]">
                Budget Categories
              </h1>
            </div>
            <button
              className="flex flex-row items-center"
              onClick={() => setShowCategoryModal(true)}
            >
              <div className="w-6 h-6 bg-[#459df5] rounded-full flex justify-center items-center mr-2">
                <Image
                  src="/plus-black.svg"
                  alt="plus icon"
                  width={12}
                  height={12}
                />
              </div>
              <p className="text-[#459df5] text-sm">Add Category</p>
            </button>
          </div>
          <CategoriesWiseExpenseCards />
          {showCategoryModal && (
            <AddCategoryModal visible={()=>setShowCategoryModal(!showCategoryModal)}/>
          )}

          <div className="flex flex-row justify-between align-middle bg-base-100 py-3 px-12">
            <div>
              <h1 className="text-lg font-semibold inline align-middle mt-[5px]">
                Recent Expenses
              </h1>
            </div>
            <Link
              href="/expenses"
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
          <ExpenseList />

          <div className="flex flex-row bg-base-100 py-5  justify-between align-middle px-12">
            <div>
              <h1 className="text-lg font-semibold inline align-middle mt-[5px]">
                Upcoming Reminders
              </h1>
            </div>
            <button
              className="flex flex-row items-center"
              onClick={() => setShowReminderModal(true)}
            >
              <div className="w-6 h-6 bg-[#459df5] rounded-full flex justify-center items-center mr-2">
                <Image
                  src="/plus-black.svg"
                  alt="plus icon"
                  width={12}
                  height={12}
                />
              </div>
              <p className="text-[#459df5] text-sm">Add Reminders</p>
            </button>
          </div>
          <Reminders />
          {showReminderModal && (
            <dialog
              id="add_reminder_modal"
              className="modal modal-open"
              onClick={() => setShowReminderModal(false)}
            >
              <div className="modal-box max-w-md w-full sm:w-11/12" onClick={(e) => e.stopPropagation()}>
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={() => setShowReminderModal(false)}
                >
                  ✕
                </button>
                <h3 className="font-bold text-lg">Add New Reminder</h3>
                {/* Add your form inputs here */}
                <div className="modal-action">
                  <button
                    className="btn"
                    onClick={() => setShowReminderModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => setShowReminderModal(false)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </dialog>
          )}
        </div>
      </div>
    </div>
  );
}
