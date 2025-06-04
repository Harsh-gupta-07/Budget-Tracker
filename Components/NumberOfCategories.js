import Image from "next/image";
import Link from "next/link";
import React from "react";

const NumberOfCategories = ({numberOfCategories}) => {
  return (
    <div className="bg-[#181a1b] p-5 rounded-lg shadow-sm border border-gray-700">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-gray-300 text-sm mb-2">Categories</p>
          <p className="text-2xl font-semibold font-mono">{numberOfCategories}</p>
        </div>
        <div className=" p-2 flex justify-center align-middle bg-[#1e2021] rounded-full">
          <Image src="/shapes.svg" alt="bank-logo" width={23} height={23} />
        </div>
      </div>
      <Link href="/categories">
        <div className="text-xs text-[#469ff6]">Manage Categories</div>
      </Link>
    </div>
  );
};

export default NumberOfCategories;
