import React from "react";
import SidebarFilter from "./SidebarFilter";
import ProductCard from "./ProductCard";
import Header from "./Footer&Header/Header";
import Footer from "./Footer&Header/Footer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Shop = () => {
  const [choices, setChoices] = useState({
    shape: null,
    brand: null,
    price: null,
  });
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const getData = async (shape, brand, minPrice, maxPrice) => {
      const response = await axios.get("http://localhost:3000/product", {
        params: {
          shape,
          minPrice,
          maxPrice,
          brand,
        },
      });
      return response.data;
    };

    const fetchData = async () => {
      try {
        const data = await getData(
          choices.shape,
          choices.brand,
          choices.price?.minPrice,
          choices.price?.maxPrice
        );
        setDatas(data);
      } catch (err) {
        console.error("Lỗi khi fetch product:", err);
      }
    };

    fetchData();
  }, [choices]); // chạy lại mỗi khi selectedCategory thay đổi

  return (
    <div>
      <p className="text-2xl my-4 font-bold">GET THE PRODUCTS AS YOUR NEEDS</p>
      <div className="flex flex-col md:flex-row">
        <div className="border-t border-r border-black max-w-xs w-full">
          <SidebarFilter setChoices={setChoices} />
        </div>

        <div className="max-h-screen h-180 overflow-y-auto border-t border-black w-auto grid grid-cols-2 lg:grid-cols-3 gap-x-4 px-4 gap-y-4 py-4">
          {datas.map((data, index) => (
            <div key={index} className="h-full">
              <ProductCard
                id={data.id}
                category={data.shape}
                name={data.name}
                price={data.price}
                oldPrice={data.price + 1000}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Shop;
