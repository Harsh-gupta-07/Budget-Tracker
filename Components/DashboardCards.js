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
      <div className="px-8 bg-base-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:px-12 pb-4">
        <TotalBudgetCard title="Total Budget" head="₹ 2,500.00" primary="Let's get Saving!" secondary="" pic="bank"/>
        <TotalBudgetCard title="Total Expenses" head="₹ 1,670.00" primary="68%" secondary="of Total budget" pic="cart"/>
        <TotalBudgetCard title="Remaining Budget" head="₹ 830.00" primary="32.0%" secondary="of budget remaining" pic="piggy-bank"/>
        <NumberOfCategories />
      </div>
    </>
  );
};

export default DashboardCards;
