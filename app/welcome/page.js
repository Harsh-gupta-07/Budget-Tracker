"use client";
import React, { useState, useMemo, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Intro from "@/Components/Intro";
import Info from "@/Components/Info";
import Setup from "@/Components/Setup";
import Final from "@/Components/Final";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import CreateAccount from "@/Components/CreateAccount";
import Squares from "@/utils/Squares";

const LoginPage = () => {
  const router = useRouter();
  const { createUser, isLoggedIn } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [done, setDone] = useState(false);
  const [category, setCategory] = useState([]);
  const [user, setUser] = useState([]);

  // useEffect(() => {
  //   {
  //     isLoggedIn() && router.push("/dashboard");
  //   }
  // }, [isLoggedIn]);

  const proceed = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const pages = useMemo(
    () => [
      <Intro key="intro" />,
      <Info key="info" />,
      <CreateAccount
        key="createAccount"
        createAccountSuccess={proceed}
        setDetails={setUser}
      />,
      <Setup
        key="setup"
        setDone={setDone}
        category={category}
        setCategory={setCategory}
      />,
      <Final key="final" />,
    ],
    [category]
  );

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleLogin = () => {
    createUser({
      ...user,
      details: { categories: category, transactions: [], reminders: [] },
      prev: []
    });
  };

  const isNextDisabled = currentStep === 3 && !done;

  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center relative">
      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl bg-black rounded-xl border border-gray-500 px-6 md:px-8 py-5 max-h-screen overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.2 }}
          >
            {pages[currentStep]}
          </motion.div>
        </AnimatePresence>

        <div
          className={`items-center p-6 flex justify-between border-t pt-6 ${
            currentStep === 2 ? "hidden" : ""
          }`}
        >
          <button
            className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-4 py-2 border-1 border-gray-500 disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={currentStep === 0}
            onClick={handleBack}
          >
            Back
          </button>

          <div className="flex space-x-1">
            {pages.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentStep === index ? "bg-primary" : "bg-gray-700"
                }`}
              />
            ))}
          </div>

          {currentStep < 4 ? (
            <button
              onClick={handleNext}
              disabled={isNextDisabled}
              className="disabled:opacity-30 disabled:cursor-not-allowed flex cursor-pointer items-center justify-center gap-2 bg-[#0845a6] rounded-md text-sm font-medium text-white h-10 px-4 py-2 transition duration-150 hover:bg-[#06398a]"
            >
              Next
            </button>
          ) : (
            <button
              className="flex cursor-pointer items-center justify-center gap-2 bg-[#0845a6] rounded-md text-sm font-medium h-10 px-4 py-2"
              onClick={handleLogin}
            >
              Get Started
            </button>
          )}
        </div>
      </div>
      <Squares
          speed={0.2}
          squareSize={40}
          direction="diagonal"
          borderColor="#fff"
          hoverFillColor="#222"
        />
    </div>
  );
};

export default LoginPage;
