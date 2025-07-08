'use client';

import React, { memo, useEffect } from "react";
import DashboardHeader from "./DashboardHeader";
import BudgetHeaderDashboard from "./BudgetHeaderDashboard";
import { useBudget } from "@/app/context/BudgetContext";
import Image from "next/image";
import Link from "next/link";

const TotalBudgetCard = ({Budget }) => {
  
  return (
    <div className="bg-[#181a1b] p-5 rounded-lg shadow-sm border border-gray-700">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-gray-300 text-sm mb-2">Total Budget</p>
          <p className="text-2xl font-semibold font-mono">₹ {Budget}</p>
        </div>
        <div className="w-10 h-10 p-2 flex justify-center align-middle bg-[#1e2021] rounded-full">
          <Image src="/bank.svg" alt="bank-logo" width={24} height={24} />
        </div>
      </div>
      <div className="text-xs text-gray-500">
        <span className="text-gray-300 font-medium">Let's get Saving!</span>
      </div>
    </div>
  );
};


const TotalExpenseCard = ({Remaining ,Percentage}) => {
  
  return (
    <div className="bg-[#181a1b] p-5 rounded-lg shadow-sm border border-gray-700">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-gray-300 text-sm mb-2">Total Expense</p>
          <p className="text-2xl font-semibold font-mono">₹ {Remaining}</p>
        </div>
        <div className="w-10 h-10 p-2 flex justify-center align-middle bg-[#1e2021] rounded-full">
          <Image src="/basket.svg" alt="bank-logo" width={24} height={24} />
        </div>
      </div>
      <div className="text-xs text-gray-500">
        <span className="text-gray-300 font-medium">{Number(Percentage).toFixed(2)}%</span> Of Total Budget
      </div>
    </div>
  );
};

const RemainingBudgetCard = ({Remaining ,Percentage}) => {
  
  return (
    <div className="bg-[#181a1b] p-5 rounded-lg shadow-sm border border-gray-700">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-gray-300 text-sm mb-2">Remaining Budget</p>
          <p className="text-2xl font-semibold font-mono">₹ {Remaining}</p>
        </div>
        <div className="w-10 h-10 p-2 flex justify-center align-middle bg-[#1e2021] rounded-full">
          <Image src="/basket.svg" alt="bank-logo" width={24} height={24} />
        </div>
      </div>
      <div className="text-xs text-gray-500">
        <span className="text-gray-300 font-medium">{Number(Percentage).toFixed(2)}%</span> Of Total Budget
      </div>
    </div>
  );
};

const NumberOfCategories = ({numberOfCategories}) => {
  
  return (
    <div className="bg-[#181a1b] p-5 rounded-lg shadow-sm border border-gray-700">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-gray-300 text-sm mb-2">Categories</p>
          <p className="text-2xl font-semibold font-mono">{numberOfCategories}</p>
        </div>
        <div className=" p-2 flex justify-center align-middle bg-[#1e2021] rounded-full">
          <Image src="/shapes.svg" alt="bank-logo" width={23} height={23} />
        </div>
      </div>
      <Link href="/categories">
        <div className="text-xs text-[#469ff6]">Manage Categories</div>
      </Link>
    </div>
  );
};


const DashboardCards = () => {
  const {categories} = useBudget();  
  
  const calculateTotal = (key) => {
    return categories.reduce((sum, category) => {
      const value = Number(category[key]) || 0;
      return sum + value;
    }, 0);
  };

  const totalBudget = Math.floor(calculateTotal('budget'));
  const totalExpenses = Math.floor(calculateTotal('spent'));
  const remainingBudget = Math.max(0, totalBudget - totalExpenses);
  
  const calculatePercentage = (value, total) => {
    if (!total) return 0;
    return Number(((value / total) * 100).toFixed(2));
  };

  return (
    <>
      <DashboardHeader />
      <div className="px-8 bg-[#1b1d1e] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:px-12 pb-4">
        <TotalBudgetCard
          Budget={totalBudget}
        />
        <TotalExpenseCard
          Remaining={totalExpenses}
          Percentage={calculatePercentage(totalExpenses, totalBudget)}
        />
        <RemainingBudgetCard
          Remaining={remainingBudget}
          Percentage={calculatePercentage(remainingBudget, totalBudget)}
        />
        <NumberOfCategories numberOfCategories={categories.length}/>
      </div>
    </>
  );
};

export default memo(DashboardCards);
