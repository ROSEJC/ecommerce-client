import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/shop");
  };
  return (
    <div className="w_full bg-green-200 rounded-lg text-4xl flex justify-between  px-16">
      <div className="max-w-sm flex flex-wrap py-16">
        <strong className="pb-4">
          Grab Upto 50% Off On Selected headphone
        </strong>
        <button
          className="bg-green-900 text-white text-lg w-32 h-12 flex items-center justify-center"
          onClick={handleClick}
        >
          Buy now
        </button>
      </div>
      <img
        src="/blue-jacket-boy.png"
        className="h-60 w-auto self-end hidden lg:block"
      />
    </div>
  );
};
export default Banner;
