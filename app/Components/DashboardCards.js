import React from "react";
import TotalBudgetCard from "./TotalBudgetCard";
import TotalExpensesCard from "./TotalExpensesCard";
import RemainingBudgetCard from "./RemainingBudgetCard";
import NumberOfCategories from "./NumberOfCategories";
import DashboardHeader from "./DashboardHeader";
import BudgetHeaderDashboard from "./BudgetHeaderDashboard";

const DashboardCards = () => {
  return (
    <>
      <DashboardHeader />
      <div className="bg-base-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-12 pb-4">
        <TotalBudgetCard />
        <TotalExpensesCard />
        <RemainingBudgetCard />
        <NumberOfCategories />
      </div>
      <BudgetHeaderDashboard />
    </>
  );
};

export default DashboardCards;
