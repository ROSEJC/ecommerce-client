import { Key, X } from "lucide-react"; // hoặc bất kỳ icon nào bạn dùng
import React, { useEffect, useState } from "react";

import SearchItemCard from "./SearchItemCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SearchModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [searchedProduct, setSearchedProduct] = useState([]);
  const [searchName, setSearchName] = useState("");

  const imgClickAction = (id) => {
    navigate(`/detail/${id}`);
    onClose();
  };
  useEffect(() => {
    const getData = async () => {
      if (searchName !== "") {
        const response = await axios.get("http://localhost:3000/product", {
          params: {
            name: searchName,
          },
        });
        setSearchedProduct(response.data);
      } else setSearchedProduct([]);
    };
    getData();
  }, [searchName]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

      {/* Modal content */}
      <div className="relative z-50 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 p-6 rounded-lg shadow-lg w-full max-w-[1000px] h-[90vh] mx-4 overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-white bg-transparent"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-semibold mb-4">Product search bar</h2>
        <input
          type="text"
          placeholder="Search your product here..."
          className="w-full p-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring focus:ring-blue-500"
          onChange={(e) => setSearchName(e.target.value)}
        />

        <div className="my-4 space-y-2">
          {searchedProduct.map((product, index) => (
            <SearchItemCard
              key={index}
              product={product}
              action={() => imgClickAction(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
