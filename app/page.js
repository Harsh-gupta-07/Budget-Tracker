"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const page = () => {
  const router = useRouter();
  
  useEffect(() => {
    const userData = localStorage.getItem('userData');
    
    if (!userData) {
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