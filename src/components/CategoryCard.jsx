import React from "react";

const CategoryCard = () => {
  return (
    <div className="my-10 w_full py-5 px-5 border rounded-lg shadow- grid grid-cols-2 max-w-full">
      <img src="/airpod.png" className="h-4 w-4" />
      {/*Title*/}
      <div className="text-3xl border-b pb-3">Popular Categories</div>
    </div>
  );
};
export default CategoryCard;
