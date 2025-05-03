"use client";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Image from "next/image";
import DashboardCards from "./Components/DashboardCards";
import CategoriesWiseExpenseCards from "./Components/CategoriesWiseExpenseCards";
import { useEffect, useState } from "react";
import ExpenseList from "./Components/ExpenseList";
import Reminders from "./Components/Reminders";

export default function Home() {
  const [category, setCategories] = useState({
    Personal: { budget: 400, spent: 400, icon: "basket" },
    Utilities: { budget: 600, spent: 500, icon: "bulb" },
    Transportation: { budget: 700, spent: 50, icon: "car" },
    DiningOut: { budget: 100, spent: 0, icon: "fork-knife" },
    Entertainment: { budget: 1000, spent: 143, icon: "play" },
    Shopping: { budget: 200, spent: 99, icon: "bag" },
  });

  return (
    <div className="h-screen flex flex-col">
      <div className="block lg:hidden">
        <Navbar />
      </div>

      <div className="flex flex-1">
        <div className="hidden lg:block w-65 bg-base-200">
          <Sidebar page="dashboard" />
        </div>

        <div className="w-full h-full">
          <DashboardCards />
          <CategoriesWiseExpenseCards />
          <ExpenseList />
          <Reminders/>
        </div>
      </div>
    </div>
  );
}
