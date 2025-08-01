import React from "react";
import CategoryCard from "./CategoryCard";
const PopularCategoryCard = () => {
  return (
    <div className="my-10 w-full py-5 px-5 border rounded-lg shadow-sm">
      {/*Title*/}
      <div className="text-3xl border-b pb-3 my-4">
        <strong>Popular Categories</strong>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
        <CategoryCard category="Airpods" />
        <CategoryCard category="Refrigerators" />
        <CategoryCard category="Tivi" />
        <CategoryCard category="Air Conditional" />
        <CategoryCard category="Laptop" />
        <CategoryCard category="Phones" />
      </div>
    </div>
  );
};
export default PopularCategoryCard;
