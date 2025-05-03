"use client"
import React from 'react'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import ExpenseList from '../Components/ExpenseList';

const page = () => {
    return (
        <div className="h-screen flex flex-col">
          <div className="block lg:hidden">
            <Navbar />
          </div>
    
          <div className="flex flex-1">
            <div className="hidden lg:block w-65 bg-base-200">
              <Sidebar page="expenses"/>
            </div>
            {/* Main content */}
            <div className="w-full h-full py-5 bg-base-100">
              <ExpenseList/>
            </div>
          </div>
        </div>
      );
}

export default page