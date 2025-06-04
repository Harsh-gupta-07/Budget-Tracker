'use client';

import React, { memo } from "react";
import TotalBudgetCard from "./TotalBudgetCard";
import RemainingBudgetCard from "./RemainingBudgetCard";
import NumberOfCategories from "./NumberOfCategories";
import DashboardHeader from "./DashboardHeader";
import BudgetHeaderDashboard from "./BudgetHeaderDashboard";
import { useBudget } from "@/app/context/BudgetContext";

const DashboardCards = () => {
  const {categories} = useBudget();
  
  
  const calculateTotal = (key) => {
    console.log(categories,"total");
    
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
          title="Total Budget"
          head={totalBudget}
          primary="Let's get Saving!"
          secondary=""
          pic="bank"
        />
        <TotalBudgetCard
          title="Total Expenses"
          head={totalExpenses}
          primary={calculatePercentage(totalExpenses, totalBudget)}
          secondary="of Total budget"
          pic="cart"
        />
        <TotalBudgetCard
          title="Remaining Budget"
          head={remainingBudget}
          primary={calculatePercentage(remainingBudget, totalBudget)}
          secondary="of budget remaining"
          pic="piggy-bank"
        />
        <NumberOfCategories numberOfCategories={categories.length}/>
      </div>
    </>
  );
};

export default memo(DashboardCards);
