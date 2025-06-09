"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useAuth } from './context/AuthContext';

const page = () => {
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
    } else {
      router.push("/dashboard");
    }
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    </div>
  )
}

export default page