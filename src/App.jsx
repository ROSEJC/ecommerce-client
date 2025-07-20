import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import ProductCard from "./components/ProductCard";
import RouteButton from "./components/HomeButtons";
import Banner from "./components/Banner";
import { Route } from "lucide-react";
import PopularCategoryCard from "./components/PopularCategory";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white-200 flex flex-col min-h-screen max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <main className="flex-grow">
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
