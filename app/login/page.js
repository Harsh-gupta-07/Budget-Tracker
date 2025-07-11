"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useBudget } from "../context/BudgetContext";
import Link from "next/link";
import Squares from "@/utils/Squares";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const { login, isLoggedIn, error, loading } = useAuth();
  const { setAllDetails } = useBudget();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  useEffect(() => {
    if (!loading && isLoggedIn()) {
      router.push("/dashboard");
    }
  }, [loading, isLoggedIn, router]);
  const handleLogin = async () => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email)) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }
    setFormLoading(true);
    try {
      await login(email, password);
      // After login, get user data from localStorage and set in context
      const userData = JSON.parse(localStorage.getItem("currUser"));
      if (userData && userData.details) {
        setAllDetails(userData.details);
      }
      setInvalid(false);
    } catch (err) {
      setInvalid(true);
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-black text-white font-sans flex items-center justify-center p-4 relative">
      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-900 rounded-2xl shadow-xl max-w-md w-full p-6 space-y-6 border border-zinc-800">
        <h1 className="text-3xl font-bold text-center text-white">
          Welcome back!
        </h1>

        <p className="text-zinc-400 text-center text-sm">
          Login to your account
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-zinc-300 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`w-full bg-zinc-800 text-white border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition ${
                invalid === true ? "border-red-600 border-2" : "border-zinc-700"
              }`}
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <p className="text-red-500 text-sm">Invalid Email address</p>
            )}
          </div>

          <div>
            <label
              className="block text-sm text-zinc-300 mb-1"
              htmlFor="password"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              className={`border ${
                invalid === true ? "border-red-600 border-2" : "border-zinc-700"
              } w-full bg-zinc-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition`}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {invalid && (
              <p className="text-red-500 text-sm ml-2 mt-0.5">
                Invalid Credentials
              </p>
            )}
            {error && (
              <p className="text-red-500 text-sm ml-2 mt-0.5">{error}</p>
            )}
          </div>

          <button
            className="w-full disabled:opacity-25 disabled:cursor-not-allowed cursor-pointer  bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition duration-200"
            onClick={handleLogin}
            disabled={email === "" || password === "" || formLoading}
          >
            {formLoading ? "Logging in..." : "Login"}
          </button>
        </div>

        <p className="text-center text-sm text-zinc-500">
          Don't have an account?
          <Link href="/welcome" className="text-purple-400 hover:underline">
            Create Account
          </Link>
        </p>
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
