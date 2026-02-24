import React from "react";
import { FaRegBell } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";

const TopNavbar = ({ onMenuClick }) => {
  return (
    <header className="h-14 w-full  bg-white flex items-center justify-between px-4">
      <div className="flex items-center gap-3">
        {/* Mobile menu button */}
        <button className="md:hidden" onClick={onMenuClick}>
          <HiOutlineMenu size={24} />
        </button>

        <img
          alt="logo"
          src="/src/assets/Layer_1.png"
          className="w-43.25 h-8.75"
        />
      </div>

      <div className="flex items-center gap-3">
        <button className="flex">
          <FaRegBell className="text-[20px]" />
          <sup className=" bg-primary bg-green-500 -ml-1  text-xs rounded-full w-4 h-4 fond-bold text-white">
            2
          </sup>
        </button>

        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default TopNavbar;
