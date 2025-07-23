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
import ProductTabs from "./ProductTabs";
const defaultProduct = {
  title: "Canon EOS 250D 24.1MP Full HD WI-FI DSLR Camera with 18–55mm",
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
  const [product, setProduct] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Giả sử bạn fetch API ở đây, dùng dữ liệu thật từ server
    const fetchData = async () => {
      try {
        const res = await fetch("/api/product/123"); // ví dụ
        const data = await res.json();
        setProduct(data); // nếu thành công thì set bằng dữ liệu thật
      } catch (err) {
        console.error("Error fetching product:", err);
        setProduct(defaultProduct); // nếu lỗi thì dùng default
      }
    };
    fetchData();
  }, []);

  if (!product) return <div>Loading...</div>;
  return (
    <div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        {/* Left - Image Gallery */}
        <div className="space-y-4">
          <img
            src={`${product.images[0]}`}
            alt="Main"
            className="w-full rounded-lg border"
          />
          <div className="flex flex-wrap gap-2">
            {product.images.map((img, idx) => (
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
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">
            Canon EOS 250D 24.1MP Full HD WI-FI DSLR Camera with 18–55mm
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde
            illum expedita dolores aut nostrum, quidem placeat laborum nemo.
          </p>

          {/* Rating */}
          <div className="flex items-center text-green-600 font-semibold text-sm">
            {Array.from({ length: 4 }).map((_, i) => (
              <Star key={i} size={16} fill="green" strokeWidth={0} />
            ))}
            <Star size={16} stroke="green" />
            <span className="ml-2">(120)</span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-gray-800">$750.00</span>
            <span className="line-through text-gray-400">$810.00</span>
          </div>

          {/* Stock */}
          <div className="text-green-700 font-medium">In Stock</div>

          {/* Add to cart */}
          <div className="flex space-x-2">
            <button className="px-6 py-2 bg-green-700 hover:bg-green-800 text-white rounded-md shadow">
              Add to Cart
            </button>
            <button className="p-2 border rounded-md">
              <Heart className="text-gray-600 w-5 h-5" />
            </button>
          </div>

          {/* Expandable Info */}
          <div
            className="flex items-center justify-between text-sm text-gray-600 font-medium cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span>
              Canon EOS 250D 24.1MP Full HD WI-FI DSLR Camera with 18–55mm:
              Characteristics
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
                <li>Sensor: APS-C CMOS, 24.1 Megapixels</li>
                <li>ISO Range: 100–25600</li>
                <li>Video: Full HD (1080p)</li>
                <li>Connectivity: Wi-Fi, Bluetooth</li>
                <li>Weight: Approx. 449g</li>
              </ul>
            </div>
          </div>

          {/* Bottom Icons */}
          <div className="flex space-x-6 text-gray-600 text-sm mt-4">
            <div className="flex items-center space-x-1">
              <MessageCircle size={16} /> <span>Ask a question</span>
            </div>
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
        <ProductTabs />
      </div>
    </div>
  );
};
export default Detail;
