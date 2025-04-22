import React from 'react'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';

const page = () => {
    return (
        <div className="h-screen flex flex-col">
          {/* Navbar: Only visible on small/medium screens */}
          <div className="block lg:hidden">
            <Navbar />
          </div>
    
          <div className="flex flex-1">
            {/* Sidebar: Only visible on large screens and up */}
            <div className="hidden lg:block w-65 bg-base-200">
              <Sidebar page="categories"/>
            </div>
    
            {/* Main content */}
            <div className="w-full h-full">
              <div className="flex flex-row bg-base-100 p-6  justify-between align-middle">
                <h1 className="text-2xl font-bold inline align-middle mt-[5px]">Categories</h1>
              </div>
            </div>
          </div>
        </div>
      );
}

export default page