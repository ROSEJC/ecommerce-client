import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

import axios from "axios";
const FavoriteTableItem = ({
  onDelete,
  id = 1,
  productName = "No name",
  price = 2000,
  shape = "Hook",
  brand = "ROSEJC Store",
}) => {
  const navigate = useNavigate();

  const [showNotif, setShowNotif] = useState(false);

  const handleDeleteFavorite = async () => {
    const token = localStorage.getItem("token");
    const now = Date.now() / 1000;
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp > now) {
          const userId = decoded.userId;
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

          onDelete();
          console.log("Delete Successfully");
        }
      } catch (err) {
        console.log(err);
      }
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
            setShowNotif(true);

            // Auto hide after 3 seconds
            setTimeout(() => setShowNotif(false), 3000);
            console.log("Đã thêm vào giỏ hàng");
          } catch (err) {
            console.error(
              "Lỗi khi thêm vào giỏ hàng:",
              err.response?.data || err.message
            );
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
    <div className="grid grid-cols-12 border-b py-2 border-gray-200 dark:border-gray-700 dark:bg-zinc-900">
      {/* Image + Name */}
      <div className="col-span-6 flex lg:col-span-4">
        <button
          className="h-full max-w-10 w-full flex items-center justify-center font-bold mx-2 
        text-gray-500 hover:text-red-500 
        dark:text-white dark:hover:text-red-400 
          bg-transparent dark:bg-transparent"
          onClick={handleDeleteFavorite}
        >
          X
        </button>
        <button
          className="overflow-hidden"
          onClick={() => {
            navigate(`/detail/${id}`);
          }}
        >
          <img
            src="/airpod.png"
            className="max-w-20 max-h-20 rounded-lg hover:scale-105 transition-transform duration-300"
          />
        </button>

        <div className="h-20 flex items-center mx-2">
          <p className="text-black dark:text-white truncate whitespace-nowrap ">
            {productName}{" "}
          </p>
        </div>
      </div>

      {/* Hook */}
      <div className="col-span-2 text-sm items-center text-gray-700 dark:text-gray-300 hidden lg:flex">
        {shape}
      </div>

      {/* Type */}
      <div className="col-span-2  items-center text-gray-700 dark:text-gray-300 hidden lg:flex">
        {brand}
      </div>

      {/* In stock */}
      <div className="col-span-1 text-sm text-green-600 dark:text-green-400 lg:flex items-center hidden">
        In Stock
      </div>

      {/* Price */}
      <div className="col-span-3 text-sm font-semibold text-gray-800 dark:text-white flex items-center lg:col-span-1">
        {price * 1000}
      </div>

      {/* Add to cart button */}
      <div className="col-span-3 flex items-center lg:col-span-2">
        <button
          className="flex items-center justify-center gap-2 
          bg-green-600 hover:bg-green-700 text-white 
          dark:bg-green-700 dark:hover:bg-green-800 
          px-4 py-2 rounded-3xl w-full max-w-[10rem] transition"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
      {showNotif && (
        <div className="fixed bottom-10 right-10 bg-green-100 dark:bg-green-800 text-green-900 dark:text-white px-6 py-5 rounded-2xl shadow-2xl z-50 text-lg font-semibold ">
          Product has been added to your cart.
        </div>
      )}
    </div>
  );
};

export default FavoriteTableItem;
