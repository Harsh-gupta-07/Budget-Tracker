import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";
import React, { useState } from "react";

const CreateAccount = ({createAccountSuccess,setDetails}) => {
  const {createUser,checkPrevUsers} = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState('');
  const [usedEmailError, setUsedEmailError] = useState(false)

  const getPasswordStrength = (pwd) => {
    let score = 0;
    if (pwd.length >= 5) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) score++;
    if (score <= 1) return { label: 'Weak', color: '#ef4444', score: 1 };
    if (score === 2 ) return { label: 'Medium', color: '#f59e42', score: 2 };
    if (score === 3) return { label: 'Strong', color: '#FFFF00', score: 3 };
    if (score === 4) return { label: 'Very Strong', color: '#22c55e', score: 4 };
    return { label: '', color: '', score: 0 };
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError("");
    setPasswordStrength(getPasswordStrength(value));
  };

  const handleSubmit = () => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email)) {
      setEmailError("Invalid email address");
      return;
    }else{
        setEmailError("");
    }
    if (password.length < 5 || password.length > 15) {
      setPasswordError("Password must be between 5 and 15 characters long");
      return;
    }

    const uppercasePattern = /[A-Z]/;
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    const numberPattern = /[0-9]/;
    if (!uppercasePattern.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter");
      return;
    }

    if (!specialCharPattern.test(password)) {
      setPasswordError("Password must contain at least one special character");
      return;
    }

    if (!numberPattern.test(password)) {
      setPasswordError("Password must contain at least one number");
      return;
    }

    if(passwordStrength.score < 3){
        setPasswordError("Password must be at least strong");
        return;
    }
    if(password !== confirmPassword){
      return
    }   

    if (checkPrevUsers(email)){
      setUsedEmailError(true)
      return 
    }else{
      setUsedEmailError(false)
    }
    setDetails({email:email.toLowerCase(), password:password})
    createAccountSuccess()
  };

  return (
    <div className=" bg-black text-white font-sans flex items-center justify-center p-4">
      <div className="bg-zinc-900 rounded-2xl shadow-xl max-w-md w-full p-6 space-y-6 border border-zinc-800">
        <h1 className="text-3xl font-bold text-center text-white">Welcome to Budget Tracker</h1>

        <p className="text-zinc-400 text-center text-sm">Create your account</p>

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            {usedEmailError && <p className="text-red-500 text-sm">A user with this email already exists.</p>}
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
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
            {password && (
              <div className="mt-2">
                <div style={{ height: 6, borderRadius: 4, background: '#27272a' }}>
                  <div style={{ width: `${(passwordStrength.score === 1 ? 25 : passwordStrength.score === 2 ? 50 : passwordStrength.score === 3 ? 75 : passwordStrength.score === 4 ? 100 : 0)}%`, height: 6, borderRadius: 4, background: passwordStrength.color, transition: 'width 0.3s' }}></div>
                </div>
                <span className="text-xs mt-1 block" style={{ color: passwordStrength.color }}>{passwordStrength.label} password</span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-1" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {confirmPassword && password!==confirmPassword && <p className="text-red-500 text-sm">Passwords do not match</p>}
          </div>
          <button
            className="w-full cursor-pointer  bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition duration-200"
            onClick={handleSubmit}
          >
            Create Account
          </button>
        </div>

        <p className="text-center text-sm text-zinc-500">
          Already have an account? 
          <Link href="/login" className="text-purple-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;
