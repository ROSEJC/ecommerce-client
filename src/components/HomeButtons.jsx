import React from "react";
import { useState } from "react";
const RouteButton = ({ setChoice }) => {
  const [currentChoice, setCurrentChoice] = useState(1);
  const handleClick = (choice) => {
    setCurrentChoice(choice);
    setChoice(choice);
  };
  return (
    <div className="flex justify-between items-center w-full mx-auto px-4 my-10">
      {/* 4 button bên trái */}

      <div className="flex gap-2 text-lg">
        <button
          onClick={() => handleClick(1)}
          className={`px-4 py-2 rounded-3xl 
        ${
          currentChoice === 1
            ? "bg-blue-400 text-white"
            : "bg-gray-200 text-black"
        } focus:outline-none focus:ring-0`}
        >
          Gadget
        </button>

        <button
          onClick={() => handleClick(2)}
          className={`px-4 py-2 rounded-3xl 
        ${
          currentChoice === 2
            ? "bg-blue-400 text-white"
            : "bg-gray-200 text-black"
        } focus:outline-none focus:ring-0`}
        >
          Appliances
        </button>

        <button
          onClick={() => handleClick(3)}
          className={`px-4 py-2 rounded-3xl 
        ${
          currentChoice === 3
            ? "bg-blue-400 text-white"
            : "bg-gray-200 text-black"
        } focus:outline-none focus:ring-0`}
        >
          Refrigertors
        </button>

        <button
          onClick={() => handleClick(4)}
          className={`px-4 py-2 rounded-3xl 
        ${
          currentChoice === 4
            ? "bg-blue-400 text-white"
            : "bg-gray-200 text-black"
        } focus:outline-none focus:ring-0`}
        >
          Others
        </button>
      </div>

      {/* 1 button bên phải */}
      <button
        onClick={() => handleClick(5)}
        className={`px-4 py-2 rounded-3xl text-lg
        ${
          currentChoice === 5
            ? "bg-blue-400 text-white"
            : "bg-gray-200 text-black"
        } focus:outline-none focus:ring-0`}
      >
        See All
      </button>
    </div>
  );
};
export default RouteButton;
