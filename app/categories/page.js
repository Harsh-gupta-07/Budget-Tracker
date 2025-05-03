"use client"
import React from 'react'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import CategoriesWiseExpenseCards from '../Components/CategoriesWiseExpenseCards';

const page = () => {
    return (
        <div className="h-screen flex flex-col">
          <div className="block lg:hidden">
            <Navbar />
          </div>
    
          <div className="flex flex-1">
            <div className="hidden lg:block w-65 bg-base-200">
              <Sidebar page="categories"/>
            </div>
    
            <div className="w-full h-full">
              <div className="flex flex-row bg-base-100 p-6  justify-between align-middle">
                <CategoriesWiseExpenseCards/>
              </div>
            </div>
          </div>
        </div>
      );
}

export default page