import Image from "next/image";
import React from "react";

const BudgetHeaderDashboard = () => {
  return (
    <div className="flex flex-row bg-base-100 py-3   justify-between align-middle px-12">
      <div>
        <h1 className="text-lg font-semibold inline align-middle mt-[5px]">
          Budget Categories
        </h1>
      </div>
      <button
        className="flex flex-row items-center"
      >
        <div className="w-6 h-6 bg-[#459df5] rounded-full flex justify-center items-center mr-2">
          <Image src="/plus-black.svg" alt="plus icon" width={12} height={12} />
        </div>
        <p className="text-[#459df5] text-sm">Add Category</p>
      </button>
    </div>
  );
};

export default BudgetHeaderDashboard;
