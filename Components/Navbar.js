import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-[#181a1b] lg:hidden fixed top-0 left-0 w-full z-50">
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
