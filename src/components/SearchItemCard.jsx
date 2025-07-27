import React from "react";
import { ShoppingBag } from "lucide-react";
import ProductCard from "./ProductCard";
const SearchItemCard = ({ product, action }) => {
  return (
    <div className="flex border border-orange-200 max-w-full w-full">
      <button
        className="overflow-hidden border border-gray-300 rounded-lg m-2"
        onClick={action}
      >
        <img
          src="/airpod.png"
          className="h-24 w-24 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </button>
      <div className="mx-4">
        <p className="text-lg font-semibold mt-4">{product.name}</p>
        <button className="flex items-center justify-center gap-2 px-6 py-2 bg-green-800 hover:bg-green-900 text-white rounded-md shadow text-sm my-4">
          <ShoppingBag className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
      <div className="mx-4 ml-auto flex space-x-2">
        <p className="text-lg font-semibold mt-4 text-green-600">
          {product.price * 1000} VND
        </p>
        <p className="text-lg font-semibold mt-4 line-through text-gray-400">
          {" "}
          {product.price * 1000 + 1000} VND
        </p>
      </div>
    </div>
  );
};

export default SearchItemCard;
