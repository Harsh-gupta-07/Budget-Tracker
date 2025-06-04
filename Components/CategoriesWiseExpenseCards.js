"use client";
import Image from "next/image";
import React, { useState } from "react";
import EditCategory from "./modals/EditCategory";
import { useBudget } from "@/app/context/BudgetContext";
import ConfirmDeleteCategory from "./modals/ConfirmDeleteCategory";

const CategoryCard = ({ category, onEdit , onDelete}) => {
  const percentage =
    category.budget > 0 ? (category.spent / category.budget) * 100 : 0;
  const remaining = category.budget - category.spent;

  return (
    <div className="bg-[#181a1b] p-5 rounded-lg shadow-sm border border-gray-600">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <span>
            <Image
              src={`/${category.icon}.svg`}
              alt="cat-logo"
              width={24}
              height={24}
            />
          </span>
          <h4 className="font-medium text-gray-300">{category.category}</h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onEdit(category)}
            className="rounded-md h-8 w-8 flex items-center justify-center cursor-pointer hover:bg-black"
          >
            <Image src="/edit.svg" alt="edit" width={22} height={22} />
          </button>
          <button onClick={() => onDelete(category)} className="w-8 h-8 text-gray-400 hover:bg-black cursor-pointer flex justify-around items-center rounded-lg">
            <Image src="/delete.svg" alt="edit" width={20} height={20} />
          </button>
        </div>
      </div>
      <div className="mb-2">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-400">
            ₹ {category.spent.toFixed(2)} of ₹ {category.budget.toFixed(2)}
          </span>
          <span className="text-primary font-medium">
            {percentage.toFixed(0)}%
          </span>
        </div>
        <div className="relative w-full overflow-hidden rounded-full bg-gray-700 h-2">
          <div
            className="h-full rounded-full transition-all bg-gradient-to-r from-[#D38312] to-[#A83279]"
            style={{ width: `${Math.min(percentage, 100)}%` }}
          />
        </div>
      </div>
      <div className="text-xs text-gray-500 flex justify-between">
        <span>₹ {remaining.toFixed(2)} remaining</span>
        <button className="text-primary">+ Add expense</button>
      </div>
    </div>
  );
};

const CategoriesWiseExpenseCards = () => {
  const { categories } = useBudget();
  // console.log(categories);

  const [editCategory, setEditCategory] = useState(false);
  const [details, setDetails] = useState(null);
  const [deleteCategory, setDeleteCategory] = useState(false);

  const handleEdit = (categoryDetails) => {
    setDetails({
      category: categoryDetails.category,
      budget: categoryDetails.budget,
      icon: categoryDetails.icon,
      spent: categoryDetails.spent,
      id: categoryDetails.id,
    });
    setEditCategory(true);
  };

  const handleDelete = (categoryDetails) => {
    setDetails({
      name: categoryDetails.category,
      id: categoryDetails.id,
    });
    setDeleteCategory(true);
  };

  return (
    <div className="w-full">
      <div className="px-8 bg-[#1c1e1f] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-5 lg:px-12">
        {categories.length > 0 &&
          categories.map((cat) => (
            <CategoryCard
              key={cat.category}
              category={cat}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
      </div>
      {editCategory && (
        <EditCategory
          visible={() => setEditCategory(false)}
          details={details}
        />
      )}
      {deleteCategory && (
        <ConfirmDeleteCategory
          visible={() => setDeleteCategory(false)}
          details={details}
        />
      )}
    </div>
  );
};

export default CategoriesWiseExpenseCards;
