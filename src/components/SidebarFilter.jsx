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
    <div className="text-sm font-medium space-y-6 max-w-xs mb-10 mt-5">
      {/* Product Categories */}
      <div>
        <p className="mb-2 font-semibold text-lg">Product Categories</p>
        <div className="space-y-2">
          {productCategories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => {
                  setSelectedCategory(category);
                  console.log("Bạn vừa chọn:", category);
                  setSelectedCategory(category);
                }}
                className="hidden peer"
              />
              <div className="w-5 h-5 rounded-sm border border-black flex items-center justify-center peer-checked:bg-blue-500"></div>
              <div className="hidden peer-checked:block  text-white text-sm leading-none">
                ✓
              </div>
              <span className="peer-checked:font-bold">{category}</span>
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
      <div>
        <p className="mb-2 font-semibold text-lg">Brands</p>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="brand"
                value={brand}
                checked={selectedBrand === brand}
                onChange={() => {
                  setSelectedBrand(brand);
                  console.log("Bạn vừa chọn:", brand);
                }}
                className="hidden peer"
              />
              <div className="w-5 h-5 rounded-sm border border-black flex items-center justify-center peer-checked:bg-blue-500"></div>
              <div className="hidden peer-checked:block  text-white text-sm leading-none">
                ✓
              </div>
              <span className="peer-checked:font-bold">{brand}</span>
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

      {/* Price */}
      <div>
        <p className="mb-2 font-semibold text-lg">Prices</p>
        <div className="space-y-2">
          {prices.map((price) => (
            <label
              key={price.label}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="price"
                value={price.label}
                checked={selectedPrice?.label === price.label}
                onChange={() => {
                  setSelectedPrice(price);
                  console.log("Bạn vừa chọn:", price);
                }}
                className="hidden peer"
              />
              <div className="w-5 h-5 rounded-sm border border-black flex items-center justify-center peer-checked:bg-blue-500"></div>
              <div className="hidden peer-checked:block text-white text-sm leading-none">
                ✓
              </div>
              <span className="peer-checked:font-bold">{price.label}</span>
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
