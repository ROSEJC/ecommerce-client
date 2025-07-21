import React from "react";
import BrandLink from "./BrandLink";

const ShopByBrands = () => {
  const brands = [
    "apple",
    "bkav",
    "hitachi",
    "hp",
    "huewei",
    "ikea",
    "samsung",
    "sony",
  ];
  return (
    <div className="w-full my-10 space-y-10 bg-gray-50 py-10 px-10">
      {/* card title*/}
      <div className="flex justify-between">
        <p className="text-3xl">
          {" "}
          <strong>Shop By Brands</strong>
        </p>
        <a href="/shop" className="text-black">
          Views all
        </a>
      </div>

      {/*Brand Images*/}
      <div className="flex justify-between space-x-2">
        {brands.map((brand, index) => (
          <BrandLink key={index} brandName={brand} />
        ))}
      </div>
    </div>
  );
};
export default ShopByBrands;
