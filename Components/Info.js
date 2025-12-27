"use client"
import React,{useState} from "react";
import { AnimatePresence, motion } from "framer-motion";

const tips = [
  [
    {
      head: "Create budget categories",
      p: "Start by setting up categories like Groceries, Rent, Entertainment, etc. Assign a monthly budget amount to each category.",
    },
    {
      head: "Customize your categories",
      p: "Choose icons and colors for each category to make them visually distinct. This helps you quickly identify categories on your dashboard.",
    },
    {
      head: "Monitor budget usage",
      p: "The dashboard will show your progress bars for each category, letting you know how much of your budget you've used.",
    },
  ],
  [
    {
      head: "Record your expenses",
      p: "Add expenses as you make purchases. Enter the amount, date, description, and assign it to a category.",
    },
    {
      head: "Track recurring expenses",
      p: "Mark expenses as recurring for regular payments like subscriptions. Set the frequency to weekly, monthly, or annually.",
    },
    {
      head: "View spending insights",
      p: "See your spending patterns with charts and graphs on the dashboard. Identify areas where you might be overspending.",
    },
  ],
  [
    {
      head: "Set up payment reminders",
      p: "Create reminders for important bills and payments. Add the name, amount, due date, and how often it repeats.",
    },
    {
      head: "Link reminders to categories",
      p: "Optionally connect your reminders to budget categories to keep track of recurring expenses within your budget.",
    },
    {
      head: "Stay on top of due dates",
      p: "Your dashboard will show upcoming reminders, so you'll always know what bills are due soon.",
    },
  ],
];

const Info = () => {
  const [tipNum, setTipNum] = useState(0);
  return (
    <>
      <div className="flex flex-col space-y-1.5 p-6 text-center">
        <div className="font-semibold tracking-tight text-2xl">
          How It Works
        </div>
        <div className="text-sm text-gray-500">
          Learn how to use BudgetTracker
        </div>
      </div>
      <div className="w-full">
        <div className="h-10 items-center justify-center bg-muted p-1 text-muted-foreground grid grid-cols-3 mb-4  bg-[#1e2021] rounded-lg">
          {["Categories", "Expenses", "Reminders"].map((val, ind) => {
            return (
              <button
                key={ind}
                onClick={() => setTipNum(ind)}
                className={`${
                  tipNum === ind ? "bg-black" : ""
                } inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-sm font-medium `}
              >
                {val}
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tipNum}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
          className="mb-5 mt-2 space-y-4"
        >
          {tips[tipNum].map((val, ind) => (
            <div key={ind} className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-medium text-primary">{ind + 1}</span>
              </div>
              <div>
                <h3 className="font-medium">{val.head}</h3>
                <p className="text-sm text-muted-foreground mt-1">{val.p}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Info;
