import React from "react";

const Login = () => {
  return (
    <div className=" bg-black text-white font-sans flex items-center justify-center p-4">
      <div className="bg-zinc-900 rounded-2xl shadow-xl max-w-md w-full p-6 space-y-6 border border-zinc-800">
        <h1 className="text-3xl font-bold text-center text-white">
          Login to Expense Tracker
        </h1>

        <p className="text-zinc-400 text-center text-sm">Login to your account</p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-zinc-300 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              placeholder="you@example.com"
            
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-1" htmlFor="password">
              Password
            </label>
            <input
              type=""
              id="password"
              className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              placeholder="••••••••"
   
            />

          </div>

          <button
            className="w-full cursor-pointer  bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition duration-200"
          >
            Login
          </button>
        </div>

        <p className="text-center text-sm text-zinc-500">
          Don't have an account?
          <a href="#" className="text-purple-400 hover:underline">
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
