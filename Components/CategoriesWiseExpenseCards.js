"use client";
import Image from "next/image";
import React, { use, useState } from "react";
import EditCategory from "./modals/EditCategory";

const CategoriesWiseExpenseCards = ({ visible }) => {
  const [category, setCategories] = useState([
    { category: "Personal", budget: 400, spent: 400, icon: "basket" },
    { category: "Utilities", budget: 600, spent: 500, icon: "bulb" },
    { category: "Transportation", budget: 700, spent: 50, icon: "car" },
    { category: "DiningOut", budget: 100, spent: 0, icon: "fork-knife" },
    { category: "Entertainment", budget: 1000, spent: 143, icon: "play" },
    { category: "Shopping", budget: 200, spent: 99, icon: "bag" },
  ]);

  const [editCategory, setEditCategory] = useState(false);
  let [cat,setCat] = useState("");
  let [bud,setBud] = useState(0);

  return (
    <div className="w-full">
      <div className="px-8  bg-base-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-5">
        {category.map((val) => {
          const percentage =
            val.budget > 0 ? (val.spent / val.budget) * 100 : 0;
          const remaining = val.budget - val.spent;
          return (
            <div
              key={val.category}
              className="bg-base-100 p-5 rounded-lg shadow-sm border border-gray-600"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <span>
                    <Image
                      src={`./${val.icon}.svg`}
                      alt="cat-logo"
                      width={24}
                      height={24}
                    />
                  </span>
                  <h4 className="font-medium text-gray-300">{val.category}</h4>
                </div>
                <button
                  onClick={()=>{
                    setCat(val.category)
                    setBud(Number(val.budget))
                    setEditCategory(!editCategory)
                  }}
                  className="rounded-md h-8 w-8 flex items-center justify-center cursor-pointer hover:bg-base-300"
                >
                  <Image src="./edit.svg" alt="edit" width={22} height={22} />
                </button>
              </div>
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">
                    ${val.spent.toFixed(2)} of ${val.budget.toFixed(2)}
                  </span>
                  <span className="text-primary font-medium">
                    {percentage.toFixed(0)}%
                  </span>
                </div>
                <div className="relative w-full overflow-hidden rounded-full bg-gray-700 h-2">
                  <div
                    className={`h-full rounded-full transition-all bg-gradient-to-r from-[#D38312] to-[#A83279]`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  />
                </div>
              </div>
              <div className="text-xs text-gray-500 flex justify-between">
                <span>${remaining.toFixed(2)} remaining</span>
                <button className="text-primary">+ Add expense</button>
              </div>
            </div>
          );
        })}
      </div>
      {editCategory && (
        <EditCategory visible={() => setEditCategory(!editCategory)} category={cat} budget={bud}/>
      )}
    </div>
  );
};

export default CategoriesWiseExpenseCards;
