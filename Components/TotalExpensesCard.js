import React from "react";
import Image from "next/image";

const TotalExpensesCard = () => {
  return (
    <div className="bg-base-200 p-5 rounded-lg shadow-sm border border-gray-700">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-gray-300 text-sm mb-2">Total Expenses</p>
          <p className="text-2xl font-semibold font-mono">₹ 1,670.00</p>
        </div>
        <div className="w-10 h-10 p-2 flex justify-center align-middle bg-[#302700] rounded-full">
          <Image src="/cart.svg" alt="bank-logo" width={24} height={24} />
        </div>
      </div>
      <div className="text-xs text-gray-500">
        <span className="text-gray-300 font-medium">68.0%</span> of Total Budget
      </div>
    </div>
  );
};

export default TotalExpensesCard;
