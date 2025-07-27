import React from "react";
import { useState } from "react";

import { Search, ShoppingBag, Heart, List } from "lucide-react";

const Header = ({ onToggleSearch }) => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between py-4 px-6 bg-white/30 backdrop-blur-md border-b border-white/20">
      {/* Left: Logos */}
      <div className="basis-1/3 flex items-center space-x-4">
        <span className="font-bold text-xl text-blue-600">Logo1</span>
      </div>

      {/* Center: Menu */}
      <nav className="basis-1/3 hidden md:flex text-zinc-600 justify-center">
        <button className="font-semibold text-sm bg-transparent border-none hover:text-green-600  hover:underline hover:decoration-2 transition">
          Home
        </button>
        <button className="font-semibold text-sm bg-transparent border-none hover:text-green-600  hover:underline hover:decoration-2 transition">
          Shop
        </button>
        <button className="font-semibold text-sm bg-transparent border-none hover:text-green-600 hover:underline hover:decoration-2 transition">
          Hot deal
        </button>
      </nav>

      {/* Right: Auth Buttons */}
      <div className="basis-1/3 flex justify-end ">
        <button
          className="bg-transparent flex items-center hover:text-blue-600 transition  px-2"
          onClick={onToggleSearch}
        >
          <Search className="w-5 h-5" />
        </button>

        <button className="bg-transparent flex items-center hover:text-blue-600 transition  px-2">
          <ShoppingBag className="w-5 h-5" />
        </button>

        <button className="bg-transparent flex items-center hover:text-blue-600 transition  px-2">
          <Heart className="w-5 h-5" />
        </button>

        <button className="bg-transparent flex items-center hover:text-blue-600 transition  px-2">
          <List className="w-5 h-5" />
        </button>

        <button className="bg-transparent flex items-center hover:text-blue-600 transition  px-2">
          <div className="text-sm">Login</div>
        </button>
      </div>
    </header>
  );
};

export default Header;
