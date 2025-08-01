import React from "react";
import {
  Heart,
  Check,
  Truck,
  RefreshCcw,
  Share2,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Star,
} from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import ProductTabs from "./ProductTabs";
import Header from "./Header";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ShoppingBag } from "lucide-react";
import CompareCard from "./Detail/CompareCard";

const defaultProduct = {
  name: "Canon EOS 250D 24.1MP Full HD WI-FI DSLR Camera with 18–55mm",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  price: 750,
  oldPrice: 810,
  inStock: true,
  rating: 4,
  ratingCount: 120,
  images: [
    "/airpod.png",
    "/airpod.png",
    "/airpod.png",
    "/airpod.png",
    "/airpod.png",
  ],
  delivery: {
    free: true,
    returnable: true,
  },
};

const Detail = () => {
  const { id } = useParams();
  const [showCompare, setShowCompare] = useState(false);
  const [productData, setProductData] = useState([]);

  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/product/${id}`);
        setProductData(response.data); //
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
      }
    };

    getData();
  }, [id]);
  const handleCompareClick = () => {
    setShowCompare(true);
  };

  const handleAddToCart = () => {
    const token = localStorage.getItem("token");
    const now = Date.now() / 1000;

    if (token) {
      const decoded = jwtDecode(token);
      if (decoded.exp > now) {
        const addToCart = async () => {
          try {
            await axios.post(
              "http://localhost:3000/cart/add",
              {
                userId: decoded.userId,
                productId: id,
                quantity: 1,
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            console.log("Đã thêm vào giỏ hàng");
          } catch (err) {
            console.error("Lỗi khi thêm vào giỏ hàng:", err.message);
          }
        };

        addToCart();
      } else {
        localStorage.removeItem("token");
        console.error("Phiên đăng nhập đã hết hạn");
        navigate("/login"); // hoặc "/cart" nếu bạn muốn vậy
      }
    } else {
      console.error("Bạn cần đăng nhập để sử dụng chức năng này");
      navigate("/login");
    }
  };
  return (
    <div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        {/* Left - Image Gallery */}
        <div className="space-y-4">
          <img
            src={`${defaultProduct.images[0]}`}
            alt="Main"
            className="w-full rounded-lg border"
          />
          <div className="flex flex-wrap gap-2">
            {defaultProduct.images.map((img, idx) => (
              <img
                key={idx}
                src={`${img}`}
                alt={`thumb-${idx}`}
                className="w-24 max-w-full h-auto rounded border cursor-pointer hover:ring-2"
              />
            ))}
          </div>
        </div>

        {/* Right - Details */}
        <div className="">
          <div className="border-b py-4">
            <h1 className="text-2xl font-semibold">
              {productData ? productData.name : defaultProduct.name}
            </h1>
            <p className="text-gray-500">{defaultProduct.description}</p>

            {/* Rating */}
            <div className="flex items-center text-green-600 font-semibold text-sm">
              {Array.from({ length: 4 }).map((_, i) => (
                <Star key={i} size={16} fill="green" strokeWidth={0} />
              ))}
              <Star size={16} stroke="green" />
              <span className="ml-2">(120)</span>
            </div>
          </div>

          {/* Price */}
          <div className="py-4 border-b space-y-1">
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold text-gray-800">
                {(productData ? productData.price : defaultProduct.price) *
                  1000}{" "}
                VND
              </span>
              <span className="line-through text-gray-400">
                {(productData ? productData.price : defaultProduct.price) *
                  1000 +
                  1000}{" "}
                VND
              </span>
            </div>

            {/* Stock */}
            <div className="text-green-600 p-2 bg-green-200 rounded-lg text-xs inline-block font-semibold ">
              In Stock
            </div>
          </div>
          {/* Add to cart */}
          <div className="flex space-x-2 my-6">
            <button
              className="flex flex-1 items-center justify-center gap-2 px-6 py-2 bg-green-800 hover:bg-green-900 text-white rounded-md shadow text-sm"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </button>

            <button className="p-2 border rounded-md border-pink-200 ">
              <Heart className="text-gray-600 w-5 h-5" />
            </button>
          </div>

          {/* Expandable Info */}
          <div
            className="flex items-center justify-between text-sm text-black cursor-pointer font-bold"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span>
              {`${
                productData ? productData.name : defaultProduct.name
              }: Characteristics`}
            </span>

            {isExpanded ? (
              <ChevronUp className="w-4 h-4 ml-2" />
            ) : (
              <ChevronDown className="w-4 h-4 ml-2" />
            )}
          </div>

          {/* Expandable area with animation */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isExpanded ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <div className="text-sm text-gray-700 leading-relaxed px-1 pb-2">
              <ul className="list-disc ml-5 space-y-1">
                <li>
                  Shape:{" "}
                  <span className="font-bold">
                    {productData ? productData.shape : "None"}
                  </span>
                </li>

                <li>
                  Ear tip:{" "}
                  <span className="font-bold">
                    {productData ? productData.eartip : "None"}
                  </span>
                </li>

                <li>
                  Minimum Latency:{" "}
                  <span className="font-bold">
                    {productData ? productData.minLatencyMs : "None"}
                  </span>
                </li>
                <li>
                  Brands:{" "}
                  <span className="font-bold">
                    {productData ? productData.manufacturer : "None"}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Icons */}
          <div className="flex space-x-6 text-gray-600 text-sm mt-4">
            <button
              className="border border-orange-500 text-black  text-sm font-semibold rounded-lg mx-2 my-6 hover:bg-orange-700 hover:text-white"
              onClick={handleCompareClick}
            >
              Compare
            </button>
            <div className="flex items-center space-x-1">
              <Truck size={16} /> <span>Delivery & Return</span>
            </div>
            <div className="flex items-center space-x-1">
              <Share2 size={16} /> <span>Share</span>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="border-t pt-4 mt-4 space-y-2 text-sm">
            <div className="flex items-start space-x-2">
              <Truck className="text-orange-500 mt-1 w-5 h-5" />
              <span>
                <strong>Free Delivery</strong> – Enter your Postal code for
                Delivery Availability.
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <RefreshCcw className="text-orange-500 mt-1 w-5 h-5" />
              <span>
                <strong>Return Delivery</strong> – Free 30days Delivery Returns.{" "}
                <a href="#" className="text-blue-600 underline">
                  Details
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start">
        <ProductTabs
          description={
            productData ? productData.description : defaultProduct.description
          }
          additionalInfo={
            productData
              ? `
            - Controls: ${productData.controls}
            - Eartip: ${productData.eartip}
            - Earbuds Battery Level: ${productData.batteryBuds}
            - Charging Case Battery: ${productData.batteryCase}	
            - Charge Port: ${productData.chargePort}
            - Release Year: ${productData.releaseYear}
            `
              : ``
          }
        />
      </div>

      {showCompare && (
        <CompareCard
          onClose={() => {
            setShowCompare(false);
          }}
        />
      )}
    </div>
  );
};
export default Detail;
