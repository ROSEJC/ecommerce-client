import { jwtDecode } from "jwt-decode";
import OrderProductCard from "./OrderProductCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const OrderCard = ({ order }) => {
  const navigate = useNavigate();
  const updateStatus = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const now = Date.now() / 1000;
      if (decoded.exp < now) return;
      const res = await axios.patch(
        `http://localhost:3000/orders/${order.id}/status`,
        {
          status: "Received",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate(0);
      console.log("Order status updated:", res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mx-auto p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 my-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Order #{order.id}
        </h1>
        <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Confirmed on: {formatDate(order.createdAt)}
        </div>
        <div className="mt-1 text-sm text-gray-700 dark:text-gray-300">
          Status:{" "}
          <span className="font-semibold text-green-600 dark:text-green-400">
            {order.status}
          </span>
        </div>
      </div>

      {/* Product List */}
      <div className="space-y-4 mb-6">
        {order.items.map((product, index) => (
          <OrderProductCard
            item={product}
            key={index}
            status={order.status}
            userId={order.userId}
          />
        ))}
      </div>

      {/* Address & Payment Info */}
      <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1 mb-6">
        <p>
          <span className="font-medium"> Address:</span>{" "}
          <span className="font-semibold"> {order.shippingAddress}</span>
        </p>
        <p>
          <span className="font-medium">Payment:</span>{" "}
          <span className="font-semibold"> {order.paymentMethod}</span>
        </p>
      </div>

      {/* Action Button */}
      <button
        className={`w-full sm:w-auto mt-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white  rounded-xl transition font-semibold ${
          order.status !== "Delivered" ? "hidden" : ""
        } `}
        onClick={updateStatus}
      >
        I’ve received it
      </button>
    </div>
  );
};
export default OrderCard;
