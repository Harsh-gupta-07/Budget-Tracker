import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Image from "next/image";
import TotalBudgetCard from "./Components/TotalBudgetCard";
import TotalExpensesCard from "./Components/TotalExpensesCard";
import RemainingBudgetCard from "./Components/RemainingBudgetCard";
import NumberOfCategories from "./Components/NumberOfCategories";
import DashboardHeader from "./Components/DashboardHeader";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar: Only visible on small/medium screens */}
      <div className="block lg:hidden">
        <Navbar />
      </div>

      <div className="flex flex-1">
        {/* Sidebar: Only visible on large screens and up */}
        <div className="hidden lg:block w-65 bg-base-200">
          <Sidebar page="dashboard"/>
        </div>

        {/* Main content */}
        <div className="w-full h-full">
          <DashboardHeader/>
          <div className="bg-base-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-12 pt-0">
            <TotalBudgetCard/>
            <TotalExpensesCard/>
            <RemainingBudgetCard/>
            <NumberOfCategories/>
          </div>
        </div>
      </div>
    </div>
  );
}
