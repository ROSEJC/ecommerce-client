import React from "react";
import { useState } from "react";
const RouteButton = () => {
  const [choice, setChoice] = useState(1);
  return (
    <div className="flex justify-between items-center w-full mx-auto px-4 my-10">
      {/* 4 button bên trái */}

      <div className="flex gap-2 text-lg">
        <button
          onClick={() => setChoice(1)}
          className={`px-4 py-2 rounded-3xl 
        ${
          choice === 1 ? "bg-blue-400 text-white" : "bg-gray-200 text-black"
        } focus:outline-none focus:ring-0`}
        >
          Gadget
        </button>

        <button
          onClick={() => setChoice(2)}
          className={`px-4 py-2 rounded-3xl 
        ${
          choice === 2 ? "bg-blue-400 text-white" : "bg-gray-200 text-black"
        } focus:outline-none focus:ring-0`}
        >
          Appliances
        </button>

        <button
          onClick={() => setChoice(3)}
          className={`px-4 py-2 rounded-3xl 
        ${
          choice === 3 ? "bg-blue-400 text-white" : "bg-gray-200 text-black"
        } focus:outline-none focus:ring-0`}
        >
          Refrigertors
        </button>

        <button
          onClick={() => setChoice(4)}
          className={`px-4 py-2 rounded-3xl 
        ${
          choice === 4 ? "bg-blue-400 text-white" : "bg-gray-200 text-black"
        } focus:outline-none focus:ring-0`}
        >
          Others
        </button>
      </div>

      {/* 1 button bên phải */}
      <button
        onClick={() => setChoice(5)}
        className={`px-4 py-2 rounded-3xl text-lg
        ${
          choice === 5 ? "bg-blue-400 text-white" : "bg-gray-200 text-black"
        } focus:outline-none focus:ring-0`}
      >
        See All
      </button>
    </div>
  );
};
export default RouteButton;
