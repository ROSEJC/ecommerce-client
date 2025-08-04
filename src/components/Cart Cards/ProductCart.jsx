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
  image,
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
        onClick={handleImgClick}
        className="overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-white rounded-lg m-2 transition-colors"
      >
        <img
          src={image}
          alt="Product"
          className="h-24 w-24 object-cover transition-transform duration-300 ease-in-out hover:scale-105 rounded-lg"
        />
      </button>

      <div className="mx-4 text-zinc-800 dark:text-zinc-200">
        <p className="text-lg font-semibold mt-4">{name}</p>

        <div className="flex gap-1 text-sm mt-1">
          <span className="text-zinc-600 dark:text-zinc-400">Shape:</span>
          <span className="font-semibold">{shape}</span>
        </div>

        <div className="flex gap-1 text-sm mt-1">
          <span className="text-zinc-600 dark:text-zinc-400">Status:</span>
          <span className="font-semibold text-green-600 dark:text-green-400">
            New
          </span>
        </div>
      </div>

      <div className="mx-4 ml-auto space-x-2 flex flex-col justify-between my-2">
        <div className="flex justify-center">
          <p className="text-lg font-semibold mt-4 text-zinc-800 dark:text-zinc-200">
            {price * 1000 * quantity} VND
          </p>
        </div>

        <div className="flex items-center space-x-4 justify-end">
          <button
            onClick={decrease}
            className="w-8 h-8 rounded-md border border-gray-300 dark:border-zinc-600 flex items-center justify-center shadow-sm hover:bg-gray-100 dark:hover:bg-zinc-700 dark:bg-gray-700"
          >
            <span className="text-xl leading-none text-gray-800 dark:text-white ">
              −
            </span>
          </button>

          <span className="text-lg font-medium w-4 text-center text-gray-800 dark:text-white">
            {quantity}
          </span>

          <button
            onClick={increase}
            className="w-8 h-8 rounded-md border border-gray-300 dark:border-zinc-600 flex items-center justify-center shadow-sm hover:bg-gray-100 dark:hover:bg-zinc-700 dark:bg-gray-700"
          >
            <span className="text-xl leading-none text-gray-800 dark:text-white">
              +
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
