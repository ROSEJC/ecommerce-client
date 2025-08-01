import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import LoginWarning from "./Cart Cards/LoginWarning";
import CartEmptyWarning from "./Cart Cards/CartEmptyWarning";
import OrderSummery from "./Cart Cards/OrderSumeryCard";
import DeliveryCard from "./Cart Cards/DeliveryCard";
import ProductCart from "./Cart Cards/ProductCart";
import { ShoppingBag, TableOfContents } from "lucide-react";
import axios from "axios";
const Cart = () => {
  const [login, setLogin] = useState(false);
  const [cartProduct, setCartProduct] = useState([]);
  const [productTotal, setProductTotal] = useState(0);

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
    <div className="flex max-w-full w-full justify-center items-center h-full mb-20">
      {login ? (
        cartProduct.length === 0 ? (
          <CartEmptyWarning />
        ) : (
          <div className="flex flex-col lg:flex-row space-x-6  w-full place-self-start m-0 ">
            {/* Left: Cart Items */}
            <div className="flex-1">
              {/* Shopping Cart Title */}
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
                    />
                  ))}
                </div>

                {/* Nút Reset Cart */}
                <button
                  className="bg-orange-500 text-white text-sm font-semibold rounded-lg mx-2 my-6 hover:bg-orange-700"
                  onClick={resetCartHandle}
                >
                  Reset Cart
                </button>
              </div>
            </div>

            {/* Right: Order Summary & Address */}
            <div className="w-full lg:w-[400px] space-y-4 pt-16">
              {/* Order Summary */}
              <OrderSummery items={cartProduct} />
              {/* Delivery Address */}
              <DeliveryCard />
            </div>
          </div>
        )
      ) : (
        <LoginWarning />
      )}
    </div>
  );
};

export default Cart;
