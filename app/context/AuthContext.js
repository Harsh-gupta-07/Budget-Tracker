"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter,redirect } from "next/navigation";

const AuthContext = createContext({});

export function useAuth() {

  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const router = useRouter();

  const [users, setUsers] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("users");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const login = ( email) => {
    const userData = users.find((val) => val.email === email.toLowerCase());
    // console.log(userData, email);
    
    localStorage.setItem("currUser", JSON.stringify(userData));

    router.push("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("currUser");
    router.push("/login");
  };

  const checkCredentials = (email, password) => {
    // console.log(email,password);
    
    for (let val of users) {
      if (val.email === email && val.password === password) {
        return true;
      }
    }
    return false;
  };

  const checkPrevUsers = (email) => {
    for (let i of users) {
      if (i.email.toLowerCase() === email.toLowerCase()) {
        return true;
      }
    }
    return false;
  };

  const createUser = (user) => {
    console.log(user);
    // console.log(users);
    

    setUsers([...users, user]);
    localStorage.setItem("currUser", JSON.stringify(user));
    localStorage.setItem("users", JSON.stringify(users));
    redirect("/dashboard")
  };

  const isLoggedIn = () => {
    const userData = localStorage.getItem("currUser");
    return userData !== null;
  };


  const updateUsers = () => {
    const user = JSON.parse(localStorage.getItem("currUser"))
    const updatedUsers = users.map((val) => {
      if (val.email === user.email) {
        return user;
      }
      return val;
    });
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };


  const updateCurrUser = (details) => {
    if (localStorage.getItem("currUser")==null){
      return
    }
    
    const curr = JSON.parse(localStorage.getItem("currUser"));
    localStorage.setItem(
      "currUser",
      JSON.stringify({
        email: curr.email,
        password: curr.password,
        details: details,
        prev: curr.prev
      })
    );
    updateUsers();
  };

  const value = {
    login,
    logout,
    isLoggedIn,
    createUser,
    updateUsers,
    checkCredentials,
    checkPrevUsers,
    updateCurrUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
