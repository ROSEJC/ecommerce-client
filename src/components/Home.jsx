import React from "react";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import RouteButton from "../components/HomeButtons";
import Banner from "../components/Banner";
import { Route } from "lucide-react";
import PopularCategoryCard from "../components/PopularCategory";
import ShopByBrands from "../components/ShopByBrands";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
const Home = () => {
  const [product, setProducts] = useState();
  const [choice, setChoice] = useState();

  useEffect(() => {
    if (!choice) return; // tránh gọi khi chưa có giá trị

    const fetchData = async () => {};

    fetchData();
  }, [choice]); // chạy lại mỗi khi selectedCategory thay đổi
  return (
    <div className="flex-grow">
      <Header />
      <Banner />
      <RouteButton />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <PopularCategoryCard />
      <ShopByBrands />
      <Footer />
    </div>
  );
};
export default Home;
