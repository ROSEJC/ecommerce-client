import React, { useState } from "react";
import { useEffect } from "react";
const SidebarFilter = ({ setChoices }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const productCategories = ["Bud", "Hook", "Stem"];

  const brands = [
    "Microsoft",
    "Bang & Olufsen",
    "LG",
    "Avantree",
    "Sennheiser",
    "Cambridge Audio",
    "KZ",
    "HyperX",
    "TOZO",
    "EarFun",
    "Bowers & Wilkins",
    "Yamaha",
    "Asus",
    "Marshall",
    "Apple/Beats",
    "Sony",
    "Jabra",
    "1More",
    "Google",
    "QCY",
    "Vivo",
    "JBL",
    "Huawei",
    "Oppo",
    "TCL",
    "Amazon/Echo",
    "OnePlus",
    "Belkin",
    "Realme",
    "Fairphone",
    "HIFIMAN",
    "Nura",
    "Xiaomi/Redmi",
  ];

  const prices = [
    { label: "Under $100", min: 0, max: 100 },
    { label: "$100 - $200", min: 100, max: 200 },
    { label: "$200 - $300", min: 200, max: 300 },
    { label: "$300 - $500", min: 300, max: 500 },
    { label: "Over $500", min: 500, max: Infinity },
  ];

  useEffect(() => {
    setChoices({
      shape: selectedCategory,
      brand: selectedBrand,
      price: selectedPrice,
    });
  }, [selectedCategory, selectedBrand, selectedPrice, setChoices]);
  return (
    <div className="text-sm font-medium max-w-xs mb-10 mt-5 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow space-y-6">
      {/* Product Categories */}
      <div className="space-y-3 pb-4 border-b border-gray-200 dark:border-gray-700">
        <p className="font-semibold text-lg text-gray-800 dark:text-gray-100">
          Product Categories
        </p>
        <div className="space-y-2">
          {productCategories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
                className="hidden peer"
              />
              <div className="w-5 h-5 rounded border border-gray-400 flex items-center justify-center peer-checked:bg-blue-500 peer-checked:border-blue-500 transition">
                <span className="hidden peer-checked:block text-white text-xs">
                  ✓
                </span>
              </div>
              <span className="group-hover:text-blue-600 peer-checked:font-bold peer-checked:text-blue-600 transition">
                {category}
              </span>
            </label>
          ))}
        </div>

        {selectedCategory !== "" && (
          <button
            onClick={() => setSelectedCategory("")}
            className="mt-2 text-blue-500 text-xs hover:underline"
          >
            Reset selection
          </button>
        )}
      </div>

      {/* Brands */}
      <div className="space-y-3 pb-4 border-b border-gray-200 dark:border-gray-700">
        <p className="font-semibold text-lg text-gray-800 dark:text-gray-100">
          Brands
        </p>
        <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="brand"
                value={brand}
                checked={selectedBrand === brand}
                onChange={() => setSelectedBrand(brand)}
                className="hidden peer"
              />
              <div className="w-5 h-5 rounded border border-gray-400 flex items-center justify-center peer-checked:bg-blue-500 peer-checked:border-blue-500 transition">
                <span className="hidden peer-checked:block text-white text-xs">
                  ✓
                </span>
              </div>
              <span className="group-hover:text-blue-600 peer-checked:font-bold peer-checked:text-blue-600 transition">
                {brand}
              </span>
            </label>
          ))}
        </div>

        {selectedBrand !== "" && (
          <button
            onClick={() => setSelectedBrand("")}
            className="mt-2 text-blue-500 text-xs hover:underline"
          >
            Reset selection
          </button>
        )}
      </div>

      {/* Prices */}
      <div className="space-y-3">
        <p className="font-semibold text-lg text-gray-800 dark:text-gray-100">
          Prices
        </p>
        <div className="space-y-2">
          {prices.map((price) => (
            <label
              key={price.label}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="price"
                value={price.label}
                checked={selectedPrice?.label === price.label}
                onChange={() => setSelectedPrice(price)}
                className="hidden peer"
              />
              <div className="w-5 h-5 rounded border border-gray-400 flex items-center justify-center peer-checked:bg-blue-500 peer-checked:border-blue-500 transition">
                <span className="hidden peer-checked:block text-white text-xs">
                  ✓
                </span>
              </div>
              <span className="group-hover:text-blue-600 peer-checked:font-bold peer-checked:text-blue-600 transition">
                {price.label}
              </span>
            </label>
          ))}
        </div>

        {selectedPrice && (
          <button
            onClick={() => setSelectedPrice(null)}
            className="mt-2 text-blue-500 text-xs hover:underline"
          >
            Reset selection
          </button>
        )}
      </div>
    </div>
  );
};

export default SidebarFilter;
