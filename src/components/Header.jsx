import React from "react";
import { UserPlus, LogIn, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between py-4 px-6 bg-white/30 backdrop-blur-md border-b border-white/20">
      {/* Left: Logos */}
      <div className="flex items-center space-x-4">
        <span className="font-bold text-xl text-blue-600">Logo1</span>
      </div>

      {/* Center: Menu */}
      <nav className="hidden md:flex text-zinc-600 ">
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
      <div className="flex items-center">
        <button className="bg-transparent flex items-center hover:text-blue-600 transition">
          <Search className="w-6 h-6" />
        </button>

        <button className="bg-transparent flex items-center hover:text-blue-600 transition">
          <UserPlus className="w-6 h-6" />
        </button>

        <button className="bg-transparent flex items-center hover:text-blue-600 transition">
          <LogIn className="w-6 h-6" />
        </button>

        <button className="bg-transparent flex items-center hover:text-blue-600 transition">
          <div className="text-lg">Login</div>
        </button>
      </div>
    </header>
  );
};

export default Header;
