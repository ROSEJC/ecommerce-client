import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { io } from "socket.io-client";

const OrderSummery = () => {
  const [items, setItems] = useState([]);

  const [subTotal, setSubTotal] = useState(0);
  const navigate = useNavigate();
  const Discount = 2000;

  const countTotal = () => {
    let total = 0;

    for (let i = 0; i < items.length; i++) {
      const product = items[i].product;
      const price = product?.price;
      const quantity = items[i].quantity;
      if (typeof price === "number" && typeof quantity === "number") {
        total += price * quantity * 1000;
      }
      console.log(price, quantity);
    }
    setSubTotal(total);
  };

  useEffect(() => {
    countTotal();
  }, [items]); // Gọi mỗi khi items thay đổi
  useEffect(() => {
    const socket = io("http://localhost:3000");

    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const decoded = jwtDecode(token);
      const now = Date.now() / 1000;
      if (decoded.exp <= now) {
        console.warn("Token expired");
        return;
      }

      const userId = decoded.userId;

      socket.on("connect", () => {
        console.log("Connected socket:", socket.id);
        socket.emit("join-user", userId);
      });

      socket.on("data-updated", (data) => {
        console.log("Received data from server:", data);

        setItems(data.items);
      });

      return () => {
        socket.disconnect(); // <-- QUAN TRỌNG: đóng kết nối
      };
    } catch (err) {
      console.error("Token decode error:", err);
    }
  }, []);

  return (
    <div className="w-full h-auto border border-black dark:border-zinc-600 bg-white dark:bg-zinc-900 rounded-lg mx-auto flex flex-col items-center px-4 text-black dark:text-white">
      <div className="my-4 mx-4 w-full px-4 py-4 space-y-4 border-b border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-black dark:text-white rounded-xl shadow-sm">
        <div className="flex text-xl font-semibold self-start">
          Order Summary
        </div>
        <div className="flex justify-between">
          <div className="text-lg">Subtotal</div>
          <div className="text-lg font-semibold">{subTotal}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-lg">Discount</div>
          <div className="text-lg font-semibold">{Discount}</div>
        </div>
      </div>

      <div className="flex justify-between my-4 mx-4 w-full px-4 text-black dark:text-white">
        <div className="text-xl font-semibold">Total</div>
        <div className="text-xl font-semibold">
          {subTotal !== 0 ? subTotal - Discount : 0}
        </div>
      </div>

      <button className="w-full py-3 my-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg dark:from-zinc-800 dark:to-zinc-700 dark:hover:from-zinc-700 dark:hover:to-zinc-600">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default OrderSummery;
