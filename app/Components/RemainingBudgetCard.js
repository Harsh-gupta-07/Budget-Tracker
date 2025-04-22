import Image from "next/image";
import React from "react";

const RemainingBudgetCard = () => {
  return (
    <div className="bg-base-200 p-5 rounded-lg shadow-sm border border-gray-700">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-gray-300 text-sm mb-2">Remaining Budget</p>
          <p className="text-2xl font-semibold font-mono">₹ 830.00</p>
        </div>
        <div className="w-10 h-10 p-2 flex justify-center align-middle bg-[#08361e] rounded-full">
          <Image src="/piggy-bank.svg" alt="bank-logo" width={23} height={23} />
        </div>
      </div>
      <div className="text-xs text-gray-500">
        <span className="text-gray-300 font-medium">32.0%</span> of budget
        remaining
      </div>
    </div>
  );
};

export default RemainingBudgetCard;
