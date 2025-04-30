import Image from "next/image";
import React from "react";
Image;

const TotalBudgetCard = () => {
  return (
    <div className="bg-base-200 p-5 rounded-lg shadow-sm border border-gray-700">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-gray-300 text-sm mb-2">Total Budget</p>
          <p className="text-2xl font-semibold font-mono">₹ 2,500.00</p>
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

export default TotalBudgetCard;

// 1e2021
