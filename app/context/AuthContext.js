'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext({});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const router = useRouter();

  const login = () => {
    localStorage.setItem('userData', JSON.stringify("This is strongest authentication method"));
    router.push('/dashboard');
  };

  const logout = () => {
    localStorage.removeItem('userData');
    router.push('/login');
  };

  const isLoggedIn = () => {
    const userData = localStorage.getItem('userData');
    return userData !== null;
  };


  const value = {
    login,
    logout,
    isLoggedIn,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
} 