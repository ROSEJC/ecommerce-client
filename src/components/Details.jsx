import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

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
  let { id } = useParams();
  id = parseInt(id);
  const [showCompare, setShowCompare] = useState(false);
  const [productData, setProductData] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
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

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const decoded = jwtDecode(token);
      const now = Date.now() / 1000;

      if (decoded.exp < now) {
        localStorage.removeItem("token");
        return;
      }

      const userId = decoded.userId;

      const checkFavorite = async () => {
        try {
          const res = await axios.get(
            `http://localhost:3000/favorite/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          const isFav = res.data.some((fav) => fav.product.id === id);
          console.log(res.data);
          setIsFavorite(isFav);
        } catch (err) {
          console.error("Error fetching favorites:", err);
        }
      };

      checkFavorite();
    } catch (err) {
      console.error("Invalid token");
      localStorage.removeItem("token");
    }
  }, [id]);

  const handleFavoriteClick = async () => {
    const token = localStorage.getItem("token");
    const now = Date.now() / 1000;
    if (!token) return;

    try {
      const decoded = jwtDecode(token);
      if (decoded.exp < now) {
        console.log("Token expired");
        localStorage.removeItem("token");
        return;
      }

      const userId = decoded.userId;
      if (!isFavorite) {
        const response = await axios.post(
          "http://localhost:3000/favorite/add",
          {
            userId,
            productId: id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setIsFavorite(true);
        console.log("Favorite added:", response.message);
      } else {
        const response = await axios.delete(
          "http://localhost:3000/favorite/delete",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            data: {
              userId,
              productId: id,
            },
          }
        );
        setIsFavorite(false);
        console.log("Favorite removed:", response.data);
      }
    } catch (err) {
      console.error("Error updating favorite:", err);
    }
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
        navigate("/login");
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
            className="w-full rounded-lg border bg-white p-2 dark:bg-white"
          />
          <div className="flex flex-wrap gap-2">
            {defaultProduct.images.map((img, idx) => (
              <img
                key={idx}
                src={`${img}`}
                alt={`thumb-${idx}`}
                className="w-24 h-auto rounded border bg-white p-1 cursor-pointer hover:ring-2 dark:bg-white"
              />
            ))}
          </div>
        </div>

        {/* Right - Details */}
        <div className="">
          <div className="border-b border-gray-200 dark:border-zinc-700 py-4">
            <h1 className="text-2xl font-semibold text-black dark:text-white">
              {productData ? productData.name : defaultProduct.name}
            </h1>
            <p className="text-gray-600 dark:text-zinc-400">
              {defaultProduct.description}
            </p>

            {/* Rating */}
            <div className="flex items-center text-green-600 dark:text-green-400 font-semibold text-sm mt-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
              <Star size={16} stroke="currentColor" />
              <span className="ml-2 text-black dark:text-white">(120)</span>
            </div>
          </div>

          {/* Price */}
          <div className="py-4 border-b space-y-1">
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold text-gray-800 dark:text-white">
                {(productData ? productData.price : defaultProduct.price) *
                  1000}{" "}
                VND
              </span>
              <span className="line-through text-gray-400 dark:text-zinc-500">
                {(productData ? productData.price : defaultProduct.price) *
                  1000 +
                  1000}{" "}
                VND
              </span>
            </div>

            {/* Stock */}
            <div className="text-green-600 dark:text-emerald-400 bg-green-100 dark:bg-green-900 px-3 py-1 rounded-full text-xs font-semibold inline-block">
              In Stock
            </div>
          </div>
          {/* Add to cart */}
          <div className="flex space-x-2 my-6">
            <button
              className="flex flex-1 items-center justify-center gap-2 px-6 py-2 bg-green-800 hover:bg-green-900 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white rounded-md shadow text-sm transition-colors"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </button>

            <button
              className="p-2 border rounded-md border-pink-200 dark:border-zinc-700 dark:bg-gray-800	"
              onClick={handleFavoriteClick}
            >
              {isFavorite && (
                <FaHeart
                  className="text-red-600 hover:scale-110 transition-transform cursor-pointer"
                  size={24}
                />
              )}
              {!isFavorite && (
                <FaRegHeart
                  className="text-red-600 hover:scale-110 transition-transform cursor-pointer"
                  size={24}
                />
              )}
            </button>
          </div>

          {/* Expandable Info */}
          <div
            className="flex items-center justify-between text-sm text-black dark:text-white cursor-pointer font-bold"
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
            <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed px-1 pb-2">
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
          <div className="flex space-x-6 text-gray-600 dark:text-gray-300 text-sm mt-4">
            <button
              className="border border-orange-500 text-black dark:text-white dark:bg-gray-800 text-sm font-semibold rounded-lg mx-2 my-6 dark:hover:bg-orange-700 hover:bg-orange-700 hover:text-white"
              onClick={handleCompareClick}
            >
              Compare
            </button>
            <div className="flex items-center space-x-1">
              <Truck size={16} className="text-inherit" />
              <span>Delivery & Return</span>
            </div>
            <div className="flex items-center space-x-1">
              <Share2 size={16} className="text-inherit" />
              <span>Share</span>
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
          defaultProduct={productData}
        />
      )}
    </div>
  );
};
export default Detail;
