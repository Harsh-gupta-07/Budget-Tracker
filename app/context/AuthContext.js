"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter, redirect } from "next/navigation";
import { auth } from "../firebase";
import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext({});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [month, setMonth] = useState(() => {
    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();
    return `${currentMonth}-${currentYear}`;
  });

  // useEffect(() => {
  //   const saved = localStorage.getItem("currUser");
  //   if (saved == null) return;

  //   const userData = JSON.parse(saved);

  //   if (userData.currMonth !== month) {
  //     // Move details to prev
  //     const updatedPrev = {
  //       ...(userData.prev || {}),
  //       [userData.currMonth]: userData.details,
  //     };

  //     // Reset transactions
  //     const updatedDetails = {
  //       ...userData.details,
  //       transactions: [],
  //       categories: userData.details.categories.map((cat) => ({
  //         ...cat,
  //         spent: 0,
  //       })),
  //     };

  //     const updatedUser = {
  //       ...userData,
  //       currMonth: month,
  //       prev: updatedPrev,
  //       details: updatedDetails,
  //     };

  // try {
  //     const userRef = doc(db, "users", user.uid);
  //     await setDoc(userRef, updatedUser, { merge: true });
  //     localStorage.setItem("currUser", JSON.stringify(updatedUser));
  //   } catch (err) {
  //     setError(err.message);
  //     console.error(err.message);
  //   }
  //   }
  // }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userRef = doc(db, "users", userCredential.user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        console.log(userData);

        localStorage.setItem("currUser", JSON.stringify(userData));
        router.push("/dashboard");
      }
    } catch (err) {
      setError(err.message);
      console.error(err.message)
      // throw err;
    }
  };

  const logout = async () => {
    setError(null);
    try {
      await signOut(auth);
      localStorage.removeItem("currUser")
      router.push("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  const createUser = async (email, password) => {
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Store user data in Firestore

      await setDoc(doc(db, "users", userCredential.user.uid), {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        currMonth: month,
        details: { categories: [], transactions: [], reminders: [] },
        prev: [],
      });
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const setIntialData = async (categories) => {
    if (!user) {
      setError("No authenticated user.");
      return;
    }
    // console.log(categories);
    
    const userData = {
      uid: user.uid,
      email: user.email,
      currMonth: month,
      details: {
        categories: categories,
        transactions: [],
        reminders: [],
      },
      prev: [],
    };

    try {
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, userData, { merge: true });
      localStorage.setItem("currUser", JSON.stringify(userData));
    } catch (err) {
      setError(err.message);
      console.error(err.message);
    }
  };

  const updateCurrUser = async (details) => {
    console.log(details);
    
    setError(null);
    if (!user) {
      setError("No authenticated user.");
      router.push("/login");
      return;
    }
    const userData = {
      uid: user.uid,
      email: user.email,
      details: details,
    };

    try {
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, userData, { merge: true });
      localStorage.setItem("currUser", JSON.stringify(userData));
    } catch (err) {
      setError(err.message);
      console.error(err.message);
    }
  };

  const isLoggedIn = () => !!user;

  const value = {
    user,
    loading,
    error,
    login,
    logout,
    isLoggedIn,
    createUser,
    updateCurrUser,
    setIntialData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
