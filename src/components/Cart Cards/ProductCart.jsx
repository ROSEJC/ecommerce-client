import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { AwardIcon, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ProductCart = ({
  id = 1,
  name = "Lorems ipsum",
  productQuantity = 1,
  shape = "Hook",
  price = "1000",
}) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(productQuantity);

  const isTokenValid = (token) => {
    const now = Date.now() / 1000;
    const decoded = jwtDecode(token);
    if (decoded.exp < now) {
      return false;
    }

    return true;
  };

  const updateProduct = async () => {
    const token = localStorage.getItem("token");
    if (isTokenValid(token)) {
      const decoded = jwtDecode(token);
      const userId = decoded.userId;
      try {
        await axios.post(
          `http://localhost:3000/cart/update/${userId}`,
          {
            productId: id,
            newQuantity: quantity,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (err) {
        console.log(err.message);
      }
    } else {
      navigate(0);
    }
  };
  const handleImgClick = () => {
    navigate(`/detail/${id}`);
  };
  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };
  useEffect(() => {
    updateProduct();
  }, [quantity]);
  return (
    <div className="flex max-w-full w-full">
      <button
        className="overflow-hidden border border-gray-300 rounded-lg m-2"
        onClick={handleImgClick}
      >
        <img
          src="/airpod.png"
          className="h-24 w-24 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </button>
      <div className="mx-4">
        <p className="text-lg font-semibold mt-4">{name}</p>
        <div className="flex gap-1 text-sm">
          <span>Shape: </span> <div className="font-semibold">{shape}</div>
        </div>
        <div className="flex gap-1 text-sm">
          <span>Status: </span> <div className="font-semibold">New</div>
        </div>
      </div>

      <div className="mx-4 ml-auto space-x-2 flex flex-col justify-between my-2">
        <div className="flex justify-center">
          <p className="text-lg font-semibold mt-4 text-black">
            {price * 1000 * quantity} VND
          </p>
        </div>

        <div className="flex items-center space-x-4 justify-end">
          <button
            onClick={decrease}
            className="w-8 h-8 rounded-md border border-gray-300 flex items-center justify-center shadow-sm hover:bg-gray-100"
          >
            <span className="text-xl leading-none">−</span>
          </button>
          <span className="text-lg font-medium w-4 text-center">
            {quantity}
          </span>
          <button
            onClick={increase}
            className="w-8 h-8 rounded-md border border-gray-300 flex items-center justify-center shadow-sm hover:bg-gray-100"
          >
            <span className="text-xl leading-none">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
