import React from "react";
import { ShoppingBag } from "lucide-react";

const CompareProductCard = ({
  price = 1000,
  name = "No name",
  brand = "Toshiba",
  shape = "Hook",
  action,
  image,
}) => {
  return (
    <button
      className="flex w-full rounded-lg border border-gray-300 transition-transform duration-300 ease-in-out hover:scale-105 hover:border-black dark:border-zinc-600 dark:bg-gray-800"
      onClick={action}
    >
      <div className="flex-shrink-0 overflow-hidden border border-gray-300 rounded-lg m-2">
        <img src={image} className="w-20 h-20 object-cover" />
      </div>

      <div className="flex flex-col justify-center mx-4 text-start min-w-0 flex-grow">
        <div className="text-lg font-semibold truncate">{name}</div>

        <div className="text-sm font-normal truncate">
          Brand:{" "}
          <span className="font-semibold text-black dark:text-orange-300">
            {brand}
          </span>
        </div>

        <div className="text-sm font-normal truncate">
          Shape:{" "}
          <span className="font-semibold text-black dark:text-orange-300">
            {shape}
          </span>
        </div>
      </div>

      <div className="ml-auto mr-4 flex items-center">
        <p className="text-lg font-semibold text-green-600 whitespace-nowrap">
          {price * 1000}Đ
        </p>
      </div>
    </button>
  );
};

export default CompareProductCard;
