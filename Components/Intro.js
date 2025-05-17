import React from "react";
import SpotlightCard from "@/utils/SpotlightCard";
const Intro = () => {
  const card = [
    {
      head: "Track Expenses",
      p: "Log and categorize your expenses to understand your spending habits.",
    },
    {
      head: "Set Budgets",
      p: "Create custom budget categories with spending limits.",
    },
    {
      head: "Get Reminders",
      p: "Never miss a payment with scheduled bill reminders.",
    },
  ];

  const svg = [
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chart-column h-5 w-5 text-primary"
    >
      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
      <path d="M18 17V9"></path>
      <path d="M13 17V5"></path>
      <path d="M8 17v-3"></path>
    </svg>,
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-primary"
    >
      <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"></path>
      <path d="M2 9v1c0 1.1.9 2 2 2h1"></path>
      <path d="M16 11h.01"></path>
    </svg>,
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-primary"
    >
      <path d="M8 2v4"></path>
      <path d="M16 2v4"></path>
      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
      <path d="M3 10h18"></path>
    </svg>,
  ];
  return (
    <>
      <div className="flex flex-col space-y-1.5 p-6 text-center">
        <div className="font-semibold tracking-tight text-2xl">
          Welcome to BudgetTracker
        </div>
        <div className="text-sm text-muted-foreground">
          Your personal finance management solution
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#449ff6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-12 w-12 text-primary"
            >
              <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"></path>
              <path d="M2 9v1c0 1.1.9 2 2 2h1"></path>
              <path d="M16 11h.01"></path>
            </svg>
          </div>
        </div>
        <p className="text-center text-md text-gray-400">
          BudgetTracker helps you manage your finances by tracking expenses,
          setting budgets, and sending timely reminders for upcoming payments.
        </p>
      </div>
      <div className="mb-3 grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {card.map((val, ind) => {
          return (
            <SpotlightCard spotlightColor="rgba(225,225,255,0.3)" key={ind}>
              <div className="w-full h-full flex flex-col justify-start rounded-lg border text-card-foreground shadow-sm ">
                <div className="flex flex-col space-y-1.5 p-6 pb-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    {svg[ind]}
                  </div>
                  <div className="font-semibold tracking-tight text-base">
                    {val.head}
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-sm text-muted-foreground">{val.p}</p>
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </>
  );
};

export default Intro;
