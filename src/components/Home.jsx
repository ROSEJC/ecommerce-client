import React from "react";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import RouteButton from "../components/HomeButtons";
import Banner from "../components/Banner";
import { Route, ShieldPlus } from "lucide-react";
import PopularCategoryCard from "../components/PopularCategory";
import ShopByBrands from "../components/ShopByBrands";
import Header from "./Footer&Header/Header";
import Footer from "./Footer&Header/Footer";
import { useEffect } from "react";

import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [choices, setChoices] = useState("");
  useEffect(() => {
    const getFilteredProducts = async ({
      category,
      minPrice,
      maxPrice,
      search,
      page = 1,
      limit = 10,
      shape,
    }) => {
      const response = await axios.get("http://localhost:3000/product", {
        params: {
          category,
          minPrice,
          maxPrice,
          search,
          page,
          limit,
          shape,
        },
      });

      return response.data;
    };
    const fetchData = async () => {
      try {
        const result = await getFilteredProducts({
          shape: choices,
        });
        setProducts(result);
      } catch (err) {
        console.error("Lỗi khi fetch product:", err);
      }
    };

    fetchData();
  }, [choices]); // chạy lại mỗi khi selectedCategory thay đổi

  return (
    <div className="flex-grow">
      <Banner />
      <RouteButton setChoice={setChoices} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 m-0">
        {products.map((product, index) => (
          <ProductCard
            id={product.id}
            key={index}
            name={product.name}
            price={product.price}
            oldPrice={product.price + 1000}
            category={product.shape}
          />
        ))}
      </div>
      <PopularCategoryCard />
      <ShopByBrands />
    </div>
  );
};
export default Home;
