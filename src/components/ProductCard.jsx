import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { ShoppingCart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  id = 1,
  image = "/airpod.png",
  name = "Apple AirPods 3rd generation...",
  category = "GADGET ACCESSORIES, AIRBUDS",
  price = 1700,
  oldPrice = 1870,
  inStock = 9,
  reviewCount = 5,
  rating = 5,
}) {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/detail/${id}`);
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
    <div className="border rounded-lg shadow-sm overflow-hidden w-full max-w-[18rem]">
      {/* Hình ảnh sản phẩm */}
      <button
        className="focus:outline-none focus:ring-0 active:outline-none hover:outline-none"
        onClick={handleCardClick}
      >
        <img
          src={image}
          alt="Product"
          className="w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </button>

      {/* Nội dung */}
      <div className="p-4 space-y-1">
        {/* Loại sản phẩm */}
        <p className="text-xs text-gray-400 uppercase">{category}</p>

        {/* Tên sản phẩm */}
        <h3 className="text-sm font-semibold text-gray-900 truncate">{name}</h3>

        {/* Đánh giá */}
        <div className="flex items-center text-sm text-gray-400">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 text-green-500 fill-yellow-500 mr-1"
            />
          ))}
          <span className="ml-1 text-gray-400">5 Reviews</span>
        </div>

        {/* Tồn kho */}
        <p className="text-sm text-gray-700">
          In Stock <span className="text-green-600 font-medium">{inStock}</span>
        </p>

        {/* Giá */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-green-600">{price}</span>
          <span className="text-sm line-through text-gray-400">{oldPrice}</span>
        </div>

        {/* Nút Add to cart */}
        <button
          className="flex items-center justify-center gap-2 bg-green-800 hover:bg-green-900 text-white px-4 py-2 rounded-3xl w-full max-w-[10rem] mt-2"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
