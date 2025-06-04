import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Dock from "./Dock";

const LayoutWrapper = ({ children }) => {

  return (
    <div className="h-screen flex flex-col">
      <div className="block lg:hidden">
        <Navbar />
      </div>

      <div className="flex flex-1">
        <div className="hidden lg:block fixed top-0 left-0 h-screen w-64 bg-base-200 z-10">
          <Sidebar page="dashboard" />
        </div>
        <div className="lg:ml-[260px] w-full h-full mb-[56px] bg-[#1c1e1f]">
          {children}
        </div>
        <div className="block lg:hidden">
          <Dock />
        </div>
      </div>
    </div>
  );
};

export default LayoutWrapper;
