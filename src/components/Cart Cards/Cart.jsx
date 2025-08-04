import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import LoginWarning from "./LoginWarning";
import CartEmptyWarning from "./CartEmptyWarning";
import OrderSummery from "./OrderSumeryCard";
import DeliveryCard from "./DeliveryCard";
import ProductCart from "./ProductCart";
import { ShoppingBag, TableOfContents } from "lucide-react";
import axios from "axios";
import ConfirmCard from "./ConfirmCard";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const [login, setLogin] = useState(false);
  const [cartProduct, setCartProduct] = useState([]);
  const [productTotal, setProductTotal] = useState(0);
  const [isAskingConfirm, setIsAskingConfirm] = useState(false);

  const navigate = useNavigate();

  const checkout = async (shippingAddress, paymentMethod) => {
    const token = localStorage.getItem("token");
    if (isTokenValid(token)) {
      const decoded = jwtDecode(token);
      const userId = decoded.userId;

      try {
        const response = await axios.post(
          `http://localhost:3000/checkout/${userId}`,
          {
            shippingAddress,
            paymentMethod,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        navigate(0);
        console.log("Order placed successfully:", response.data);
      } catch (error) {
        console.error(
          "Checkout failed:",
          error.response?.data || error.message
        );
      }
    }
  };

  const askingConfirm = () => {
    setIsAskingConfirm(true);
  };

  const closeAskingConfirm = () => {
    setIsAskingConfirm(false);
  };
  const isTokenValid = (token) => {
    const now = Date.now() / 1000;
    const decoded = jwtDecode(token);
    if (decoded.exp < now) {
      return false;
    }

    return true;
  };

  const resetCartHandle = async () => {
    const token = localStorage.getItem("token");
    if (isTokenValid(token)) {
      const decoded = jwtDecode(token);
      const userId = decoded.userId;
      try {
        await axios.delete(`http://localhost:3000/cart/reset/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCartProduct([]);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        const now = Date.now() / 1000;
        const userId = decoded.userId;
        if (decoded.exp < now) {
          // Token hết hạn
          setLogin(false);
          localStorage.removeItem("token");
        } else {
          setLogin(true);
          const getData = async () => {
            try {
              const response = await axios.get(
                `http://localhost:3000/cart/${userId}`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
              setCartProduct(response.data.items);
            } catch (err) {
              console.error("Error fetching cart:", err);
              // Có thể xử lý thêm: set thông báo lỗi, logout,...
            }
          };
          getData();
        }
      } catch (error) {
        console.error("Invalid token");
        setLogin(false);
        localStorage.removeItem("token");
      }
    } else {
      setLogin(false);
    }
  }, []);

  useEffect(() => {
    let total = 0;
    cartProduct.forEach((item) => {
      total += item.price * item.quantity;
    });

    setProductTotal(total);
  }, [cartProduct]);

  return (
    <div className="flex max-w-full w-full justify-center items-center mb-10">
      {login ? (
        cartProduct.length === 0 ? (
          <CartEmptyWarning />
        ) : (
          <>
            <div className="flex flex-col lg:flex-row space-x-6  w-full place-self-start m-0 ">
              <div className="flex-1">
                <div className="flex gap-1 my-4">
                  <ShoppingBag />{" "}
                  <div className="text-2xl font-semibold">Shopping Cart</div>
                </div>

                {/* Danh sách sản phẩm */}
                <div className="border border-gray-200 rounded-lg">
                  <div>
                    {cartProduct.map((item, index) => (
                      <ProductCart
                        key={index}
                        id={item.product?.id}
                        name={item.product?.name}
                        productQuantity={item.quantity}
                        shape={item.product?.shape}
                        price={item.product?.price}
                        image={item.product.image}
                      />
                    ))}
                  </div>

                  <button
                    className="bg-orange-500 text-white text-sm font-semibold rounded-lg mx-2 my-6 hover:bg-orange-700"
                    onClick={resetCartHandle}
                  >
                    Reset Cart
                  </button>
                </div>
              </div>

              <div className="w-full lg:w-[400px] space-y-6 pt-16 px-4 lg:px-0 bg-white dark:bg-transparent rounded-xl shadow-sm dark:shadow-zinc-800 transition-colors">
                <OrderSummery items={cartProduct} onProceed={askingConfirm} />
                <DeliveryCard />
              </div>
            </div>

            {isAskingConfirm && (
              <ConfirmCard
                onClose={closeAskingConfirm}
                handleCheckout={() =>
                  checkout("123 Main Street, Tokyo, Japan", "Pay when receive")
                }
              />
            )}
          </>
        )
      ) : (
        <LoginWarning />
      )}
    </div>
  );
};

export default Cart;
