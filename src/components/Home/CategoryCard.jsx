import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div className="group w_full py-5 px-5 shadow-sm flex items-center space-x-4 max-w-lg overflow-hidden bg-gray-100 dark:bg-zinc-800 transition-colors duration-300">
      <button className="p-0 m-0 border-none bg-transparent hover:none focus:outline-none">
        <img
          src="/airpod.png"
          className="h-20 w-auto border border-green-300 hover:border-green-400 group-hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg"
        />
      </button>

      {/* Title */}
      <div className="text-lg text-gray-900 dark:text-white">
        <strong>{category}</strong>
      </div>
    </div>
  );
};

export default CategoryCard;
