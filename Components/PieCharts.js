import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useBudget } from "@/app/context/BudgetContext";

const COLORS = ["#0088FE", "#FF8042", "#00C49F", "#FFBB28", "#A83279", "#D38312", "#8884d8", "#82ca9d", "#ffc658", "#ff7300"];

const PieCharts = () => {
  const { categories } = useBudget();

  const totalBudget = categories.reduce((sum, cat) => sum + (Number(cat.budget) || 0), 0);
  const totalSpent = categories.reduce((sum, cat) => sum + (Number(cat.spent) || 0), 0);

  const budgetVsExpenseData = [
    { name: "Spent", value: totalSpent },
    { name: "Remaining", value: Math.max(totalBudget - totalSpent, 0) },
  ];

  const categoryExpenseData = categories.map((cat) => ({
    name: cat.category,
    value: Number(cat.spent) || 0,
  })).filter((cat) => cat.value > 0);

  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full py-6">
      <div className="bg-[#1c1e1f] w-full max-w-md md:max-w-lg mx-0 md:mr-0 rounded-lg p-6 flex flex-col items-center shadow-md border border-gray-700">
        <h2 className="text-md font-semibold mb-2 text-gray-200">Total Budget vs Expense</h2>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ top: 20, right: 50, bottom: 20, left: 50 }}>
              <Pie
                data={budgetVsExpenseData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label={({ name, value }) => `₹${value}`}
              >
                {budgetVsExpenseData.map((entry, index) => (
                  <Cell key={`cell-budget-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `₹${value}`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-[#1c1e1f] w-full max-w-md md:max-w-lg mx-0 md:ml-6 rounded-lg p-6 flex flex-col items-center shadow-md border border-gray-700">
        <h2 className="text-md font-semibold mb-2 text-gray-200">Category-wise Expenses</h2>
        <div className="w-full h-80 flex items-center justify-center">
          {categoryExpenseData.length === 0 ? (
            <p className="text-gray-400 text-sm">No expense data to display</p>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryExpenseData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={110}
                  label={({ value }) => `₹${value}`}
                >
                  {categoryExpenseData.map((entry, index) => (
                    <Cell key={`cell-cat-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default PieCharts;