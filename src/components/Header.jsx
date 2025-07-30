import React, { useEffect, useState } from "react";

import { Search, ShoppingBag, Heart, List, User } from "lucide-react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Header = ({ onToggleSearch }) => {
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

        <button
          className="bg-transparent flex items-center hover:text-blue-600 transition  px-2"
          onClick={() => {
            navigate("/cart");
          }}
        >
          <ShoppingBag className="w-5 h-5" />
        </button>

        <button className="bg-transparent flex items-center hover:text-blue-600 transition  px-2">
          <Heart className="w-5 h-5" />
        </button>

        <button className="bg-transparent flex items-center hover:text-blue-600 transition  px-2">
          <List className="w-5 h-5" />
        </button>

        {!tokenValid && (
          <button
            className="bg-transparent flex items-center hover:text-blue-600 transition  px-2"
            onClick={() => {
              navigate("/login");
            }}
          >
            <div className="text-sm">Login</div>
          </button>
        )}
        {tokenValid && (
          <button
            className="bg-transparent flex items-center hover:text-blue-600 transition  px-2 "
            onClick={() => setOpenMenu(!openMenu)}
          >
            <User />
          </button>
        )}
        {openMenu && tokenValid && (
          <div className="absolute top-full right-10  w-70 bg-white rounded-lg shadow-xl border z-50">
            <div className="p-4 border-b">
              <p className="font-semibold">Đông Hải</p>
              <p className="text-sm text-gray-500">thaidong2005@gmail.com</p>
            </div>
            <div className="flex flex-col divide-y text-sm">
              <button className="p-3 hover:bg-gray-100 text-left">
                Manage account
              </button>
              <button
                className="p-3 hover:bg-gray-100 text-left"
                onClick={handleSignout}
              >
                Sign out
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
