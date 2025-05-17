import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-[#181a1b] lg:hidden">
      <div className="flex-1">
        <Link href="./">
          <p className="text-xl font-bold align-middle px-4 py-0 select-none">
            Budget Tracker
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
