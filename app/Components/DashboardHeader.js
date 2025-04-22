import Image from "next/image";
import React from "react";

const DashboardHeader = () => {
  return (
    <div className="flex flex-row bg-base-100 p-5  justify-between align-middle px-12">
      <h1 className="text-2xl font-bold inline align-middle mt-[5px]">
        Dashboard
      </h1>
      <button className="bg-gray-700 hover:bg-base-300 rounded-full btn w-10 h-10 p-3 border-none">
        <Image
          src="/plus-svgrepo-com.svg"
          alt="plus img"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};

export default DashboardHeader;
