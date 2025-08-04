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
          onClick={() => handleClick("Stem")}
          className={`px-4 py-2 rounded-3xl 
        ${
          currentChoice === "Stem"
            ? "bg-blue-400 text-white"
            : "bg-gray-200 text-black"
        } focus:outline-none focus:ring-0`}
        >
          Stem
        </button>

        <button
          onClick={() => handleClick("Bud")}
          className={`px-4 py-2 rounded-3xl 
        ${
          currentChoice === "Bud"
            ? "bg-blue-400 text-white"
            : "bg-gray-200 text-black"
        } focus:outline-none focus:ring-0`}
        >
          Bud
        </button>

        <button
          onClick={() => handleClick("Hook")}
          className={`px-4 py-2 rounded-3xl 
        ${
          currentChoice === "Hook"
            ? "bg-blue-400 text-white"
            : "bg-gray-200 text-black"
        } focus:outline-none focus:ring-0`}
        >
          Hook
        </button>

        <button
          onClick={() => handleClick("")}
          className={`px-4 py-2 rounded-3xl 
        ${
          currentChoice === ""
            ? "bg-blue-400 text-white"
            : "bg-gray-200 text-black"
        } focus:outline-none focus:ring-0`}
        >
          Others
        </button>
      </div>

      {/* 1 button bên phải */}
      <button
        onClick={() => handleClick("")}
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
