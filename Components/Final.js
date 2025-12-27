import React from "react";

const Final = () => {
  return (
    <>
      <div className="flex flex-col space-y-1.5 p-6 text-center">
        <div className="font-semibold text-2xl">You're All Set!</div>
        <div className="text-sm text-gray-400">
          Start your journey to better financial management
        </div>
      </div>
      <div className="flex justify-center mb-8">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-10 w-10 text-primary"
          >
            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
            <path d="m9 11 3 3L22 4"></path>
          </svg>
        </div>
      </div>
      <p className="text-gray-400 mb-5 text-center max-w-md mx-auto">
        You're ready to take control of your finances with BudgetTracker. Start
        by creating your first budget category and adding your expenses.
      </p>
    </>
  );
};

export default Final;
