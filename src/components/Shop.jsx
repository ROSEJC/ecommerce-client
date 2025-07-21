import React from "react";
import SidebarFilter from "./SidebarFilter";
import ProductCard from "./ProductCard";
const Shop = () => {
  return (
    <div>
      <p className="text-2xl my-4 font-bold">GET THE PRODUCTS AS YOUR NEEDS</p>
      <div className="flex flex-col md:flex-row">
        <div className="border-t border-r border-black max-w-xs w-full">
          <SidebarFilter />
        </div>

        <div className="max-h-screen h-180 overflow-y-auto border-t border-black w-auto grid grid-cols-2 lg:grid-cols-3 gap-x-4 px-4 gap-y-4 py-4">
          {[...Array(30)].map((_, index) => (
            <div key={index} className="h-full">
              <ProductCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Shop;
