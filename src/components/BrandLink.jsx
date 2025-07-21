import React from "react";

const BrandLink = ({ brandName }) => {
  return (
    <div className="max-w-40 w-full h-28 flex items-center justify-center bg-white rounded-lg hover:drop-shadow-xl hover:border-2">
      <a href="none">
        <img
          src={`/Brands/${brandName}.png`}
          alt="Link Image"
          className="w-20 h-auto cursor-pointer"
        />
      </a>
    </div>
  );
};
export default BrandLink;
