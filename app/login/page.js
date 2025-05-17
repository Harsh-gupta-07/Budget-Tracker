"use client";
import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Intro from "@/Components/Intro";
import Info from "@/Components/Info";
import Setup from "@/Components/Setup";
import Final from "@/Components/Final";
import { redirect } from "next/navigation";

const page = () => {
  const setupRef = useRef(null);
  const pages = [<Intro />, <Info />, <Setup ref={setupRef} />, <Final />];
  const [num, setNum] = useState(0);

  return (
    <div className="w-full min-h-screen bg-base-100 flex justify-center items-center px-4 py-8">
      <div className="w-full max-w-4xl bg-black rounded-xl border border-gray-500 px-6 md:px-8 py-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={num}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.2 }}
          >
            {pages[num]}
          </motion.div>
        </AnimatePresence>

        <div className="items-center p-6 flex justify-between border-t pt-6">
          <button
            className="cursor-pointer  inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-4 py-2 border-1 border-gray-500 disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={num === 0}
            onClick={() => setNum(num - 1)}
          >
            Back
          </button>
          <div className="flex space-x-1">
            {pages.map((_, ind) => {
              return (
                <div
                  key={ind}
                  className={`w-2 h-2 rounded-full ${
                    num === ind ? "bg-primary" : "bg-gray-700"
                  }`}
                ></div>
              );
            })}
          </div>
          <button
            onClick={() => {
              const proceed = num === 2
                ? setupRef.current && typeof setupRef.current.handleNext === "function"
                  ? setupRef.current.handleNext()
                  : true
                : true;

              if (proceed) {
                setNum(num + 1);
              }
            }}
            className={`${
              num === 3 ? "hidden" : ""
            } flex cursor-pointer items-center justify-center gap-2 bg-[#0845a6] rounded-md text-sm font-medium text-white h-10 px-4 py-2 transition duration-150 hover:bg-[#06398a]`}
          >
            Next
          </button>
          <button
            className={`${
              num < 3 ? "hidden" : ""
            } flex cursor-pointer items-center justify-center gap-2 bg-[#0845a6] rounded-md text-sm font-medium  h-10 px-4 py-2`}
            onClick={() => {
              redirect("/");
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
