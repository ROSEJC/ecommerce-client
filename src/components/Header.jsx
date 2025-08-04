import React, { useEffect, useState } from "react";

import { Search, ShoppingBag, Heart, List, User, Eye } from "lucide-react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
const Header = ({ onToggleSearch, onToggleDarkMode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [tokenValid, setTokenValid] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const handleSignout = () => {
    localStorage.removeItem("token");
    navigate(0);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const now = Date.now() / 1000;
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const now = Date.now() / 1000;

        if (decoded.exp < now) {
          // Token hết hạn
          setTokenValid(false);
          localStorage.removeItem("token");
        } else {
          setTokenValid(true);
        }
      } catch (error) {
        console.error("Invalid token");
        setTokenValid(false);
        localStorage.removeItem("token");
      }
    } else {
      setTokenValid(false);
    }
  }, []);

  console.log("token valid", tokenValid);
  return (
    <header
      className="sticky top-0 z-50 
    bg-white/30 dark:bg-gray-900/50 
      backdrop-blur-md 
      border-b border-white/20 dark:border-white/10 lg:-mx-[300px]"
    >
      <div className="xl:mx-[300px] flex items-center justify-between py-4 px-6 ">
        {/* Left: Logos */}
        <div className="basis-1/3 flex items-center space-x-4">
          <span className="font-bold text-xl text-blue-600 dark:text-blue-400">
            Logo1
          </span>
        </div>

        {/* Center: Menu */}
        <nav className="basis-1/3 hidden md:flex text-zinc-600 dark:text-zinc-300 justify-center">
          <button className="font-semibold text-sm bg-transparent border-none hover:text-green-600 dark:hover:text-green-400 hover:underline hover:decoration-2 transition">
            Home
          </button>
          <button className="font-semibold text-sm bg-transparent border-none hover:text-green-600 dark:hover:text-green-400 hover:underline hover:decoration-2 transition">
            Shop
          </button>
          <button className="font-semibold text-sm bg-transparent border-none hover:text-green-600 dark:hover:text-green-400 hover:underline hover:decoration-2 transition">
            Hot deal
          </button>
        </nav>

        {/* Right: Auth Buttons */}
        <div className="basis-1/3 flex justify-end ">
          <button
            onClick={() => {
              onToggleDarkMode();
              setIsDarkMode(!isDarkMode);
            }}
            className="p-2 rounded-full 
            bg-blue-400 dark:bg-zinc-800 
            hover:bg-blue-200 dark:hover:bg-zinc-700 
            transition-colors duration-200 
            shadow-sm dark:shadow-md 
            mx-2"
          >
            {isDarkMode ? (
              <Moon className="w-6 h-6 text-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.5)]" />
            ) : (
              <Sun className="w-6 h-6 text-yellow-100 drop-shadow-[0_0_8px_rgba(250,204,21,0.7)]" />
            )}
          </button>

          <button
            className="bg-transparent flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition px-2"
            onClick={onToggleSearch}
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            className="bg-transparent flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition px-2"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <ShoppingBag className="w-5 h-5" />
          </button>

          <button
            className="bg-transparent flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition px-2"
            onClick={() => {
              navigate("/favorite");
            }}
          >
            <Heart className="w-5 h-5" />
          </button>

          <button
            className="bg-transparent flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition px-2"
            onClick={() => {
              navigate("/order");
            }}
          >
            <List className="w-5 h-5" />
          </button>

          {!tokenValid && (
            <button
              className="bg-transparent flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition px-2"
              onClick={() => {
                navigate("/login");
              }}
            >
              <div className="text-sm">Login</div>
            </button>
          )}

          {tokenValid && (
            <button
              className="bg-transparent flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition px-2"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <User />
            </button>
          )}

          {openMenu && tokenValid && (
            <div className="absolute top-full right-10 mt-2 w-72 rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-lg dark:shadow-zinc-950 z-50 overflow-hidden">
              <div className="px-5 py-4 border-b border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800">
                <p className="text-base font-semibold text-zinc-800 dark:text-white">
                  Đông Hải
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  thaidong2005@gmail.com
                </p>
              </div>
              <div className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-700 text-sm bg-white dark:bg-zinc-900">
                <button className="text-left px-5 py-3 text-zinc-800 dark:text-white hover:bg-zinc-100 dark:bg-zinc-800 transition-colors">
                  Manage account
                </button>
                <button
                  onClick={handleSignout}
                  className="text-left px-5 py-3 text-zinc-800 dark:text-white hover:bg-zinc-100 dark:bg-zinc-800 transition-colors"
                >
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
