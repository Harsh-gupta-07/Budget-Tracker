"use client";
import Squares from "@/utils/Squares";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const page = () => {
  const [emailError, setEmailError] = useState(false);
  const [email, setEmail] = useState("");
  const { sendResetEmail, error } = useAuth();

  const handleSubmit = async () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError(true);
      return;
    }
    try {
      await sendResetEmail(email);
    } catch (err) {
      
    }
  };
  return (
    <div className="w-full min-h-screen bg-black text-white font-sans flex items-center justify-center p-4 relative">
      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-900 rounded-2xl shadow-xl max-w-md w-full p-6 space-y-6 border border-zinc-800">
        <h2 className="text-xl font-semibold text-center">
          Reset Your Password
        </h2>
        <div>
          <label
            htmlFor="new-password"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Enter Your Email
          </label>
          <input
            type="email"
            id="new-password"
            className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder=""
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {emailError ? (
            <p className="text-red-500 text-sm">Invalid Email address</p>
          ) : (
            ""
          )}
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full cursor-pointer bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition"
        >
          Send Reset Email
        </button>
        {error && (
          <p className={`text-sm ${
            error.includes('sent') || error.includes('Check your inbox') 
              ? 'text-green-500' 
              : 'text-red-500'
          }`}>
            {error}
          </p>
        )}
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

export default page;
