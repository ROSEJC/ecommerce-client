import React from "react";
import ProductCard from "../components/ProductCard";
import RouteButton from "../components/HomeButtons";
import Banner from "../components/Banner";
import { Route } from "lucide-react";
import PopularCategoryCard from "../components/PopularCategory";
import ShopByBrands from "../components/ShopByBrands";

const Home = () => {
  return (
    <div className="flex-grow">
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
    </div>
  );
};
export default Home;
