import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/shop");
  };
  return (
    <div className="w-full bg-green-200 dark:bg-green-700 rounded-lg text-4xl flex justify-between px-16">
      <div className="max-w-sm flex flex-wrap py-16">
        <strong className="pb-4 text-zinc-800 dark:text-white">
          Grab Upto 50% Off On Selected headphone
        </strong>
        <button
          className="bg-green-900 text-white hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-500 text-lg w-32 h-12 flex items-center justify-center mt-4 transition"
          onClick={handleClick}
        >
          Buy now
        </button>
      </div>
      <img
        src="/blue-jacket-boy.png"
        className="h-60 w-auto self-end hidden xl:block"
      />
    </div>
  );
};
export default Banner;
