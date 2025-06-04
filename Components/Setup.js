"use client";
import Image from "next/image";
import React, { useEffect, useState, useMemo, useCallback } from "react";

const INITIAL_CATEGORIES = [
  { category: "Personal", icon: "basket", budget: 0, spent: 0,id:0 },
  { category: "Utilities", icon: "bulb", budget: 0, spent: 0,id:1 },
  { category: "Transportation", icon: "car", budget: 0, spent: 0,id:2 },
  { category: "DiningOut", icon: "fork-knife", budget: 0, spent: 0,id:3 },
  { category: "Entertainment", icon: "play", budget: 0, spent: 0,id:4 },
  { category: "Shopping", icon: "bag", budget: 0, spent: 0,id:5 },
];

const MIN_CATEGORIES = 2;

const Setup = ({ setDone, category, setCategory }) => {
  const [categories, setCategories] = useState(INITIAL_CATEGORIES);
  const [budgets, setBudgets] = useState(
    new Array(INITIAL_CATEGORIES.length).fill(0)
  );
  const [error, setError] = useState("");

  const totalBudget = useMemo(
    () => budgets.reduce((sum, budget) => sum + (parseInt(budget) || 0), 0),
    [budgets]
  );

  useEffect(() => {
    const hasInvalidBudget = budgets.some(
      (budget) => !budget || isNaN(parseInt(budget))
    );

    if (hasInvalidBudget && category.length !== 0) {
      setError(
        "One or more Categories have a budget of Zero or an Invalid Number."
      );
      setDone(false);
      return;
    }

    const updatedCategories = categories.map((cat, index) => ({
      ...cat,
      budget: parseInt(budgets[index]) || 0,
    }));

    setCategory(updatedCategories);
    setError(null);
    setDone(true);
  }, [budgets, categories, setCategory, setDone, category.length]);

  const handleDelete = useCallback(
    (index) => {
      if (categories.length <= MIN_CATEGORIES) {
        setError("You need at least two Categories.");
        return;
      }

      setCategories((prev) => prev.filter((_, i) => i !== index));
      setBudgets((prev) => prev.filter((_, i) => i !== index));
      setError(null);
    },
    [categories.length]
  );

  const handleBudgetUpdate = useCallback((index, value) => {
    setBudgets((prev) =>
      prev.map((budget, i) => (i === index ? parseInt(value) || 0 : budget))
    );
  }, []);

  return (
    <>
      <div className="flex flex-col space-y-1.5 p-6 text-center">
        <h1 className="font-semibold tracking-tight text-2xl text-white">
          Set Your Budget
        </h1>
        <p className="text-sm text-gray-400">Configure your monthly budget</p>
      </div>

      <div className="w-full flex justify-center mb-6">
        <div className="w-full max-w-sm space-y-3">
          <div className="space-y-1 text-left">
            <label className="text-sm font-medium text-gray-300">
              Total Monthly Budget ($)
            </label>
            <input
              type="number"
              min="0"
              step="10"
              disabled
              value={totalBudget}
              className="disabled:opacity-35 disabled:cursor-not-allowed w-full h-10 rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <p className="text-xs text-gray-500">
              Your Total budget is sum of all your Category Budget.
            </p>
          </div>
        </div>
      </div>

      {error && (
        <p className="text-sm px-8 text-red-600 py-1">{error}</p>
      )}

      <div className="w-full px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 pb-12">
        {categories.map((cat, index) => (
          <div
            key={cat.category}
            className="p-5 rounded-xl border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex gap-2">
                  <Image
                    src={`/${cat.icon}.svg`}
                    alt={`${cat.category} icon`}
                    width={28}
                    height={28}
                  />
                  <h4 className="text-lg font-regular text-gray-200">
                    {cat.category}
                  </h4>
                </div>
                <button
                  onClick={() => handleDelete(index)}
                  disabled={categories.length <= MIN_CATEGORIES}
                  className="disabled:opacity-35 disabled:cursor-not-allowed w-8 h-8 text-gray-400 hover:bg-black cursor-pointer flex justify-around items-center rounded-lg"
                >
                  <Image
                    src="/delete.svg"
                    alt="delete"
                    width={20}
                    height={20}
                  />
                </button>
              </div>

              <input
                type="number"
                min="0"
                value={budgets[index] || ""}
                placeholder={`Enter ${cat.category} Budget`}
                className="w-full rounded-md bg-gray-700 text-white px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={(e) => handleBudgetUpdate(index, e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default React.memo(Setup);
