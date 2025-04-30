import Image from "next/image";
import React from "react";

const CategoriesWiseExpenseCards = ({ category, icon, spent, budget }) => {
  const percentage = Number(budget) > 0 ? (Number(spent) / Number(budget)) * 100 : 0;
  const remaining = Number(budget) - Number(spent);
  return (
    <div className="bg-base-100 p-5 rounded-lg shadow-sm border border-gray-600">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <span><Image src={`./${icon}.svg`} alt="cat-logo" width={24} height={24}/></span>
          <h4 className="font-medium text-gray-300">{category}</h4>
        </div>
        <button className="rounded-md h-8 w-8 flex items-center justify-center cursor-pointer hover:bg-base-300">
          <Image src="./edit.svg" alt="edit" width={22} height={22} />
        </button>
      </div>
      <div className="mb-2">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-400">
            ${Number(spent).toFixed(2)} of ${Number(budget).toFixed(2)}
          </span>
          <span className="text-secondary font-medium">
            {percentage.toFixed(0)}%
          </span>
        </div>
        <div className="relative w-full overflow-hidden rounded-full bg-gray-700 h-2">
          <div
            className="h-full bg-primary rounded-full transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
      <div className="text-xs text-gray-500 flex justify-between">
        <span>${remaining.toFixed(2)} remaining</span>
        <button className="text-primary">+ Add expense</button>
      </div>
    </div>
  );
};

export default CategoriesWiseExpenseCards;
