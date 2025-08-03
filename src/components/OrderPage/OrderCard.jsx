import OrderProductCard from "./OrderProductCard";

const mockOrder = {
  id: 10001,
  createdAt: "2025-08-01T09:00:00.000Z",
  status: "Shipped",
  shippingAddress: "123 Le Van Viet Street, District 9, Ho Chi Minh City",
  paymentMethod: "Cash on delivery",
  items: [
    {
      id: 1,
      quantity: 2,
      price: 199000,
      product: {
        name: "Bluetooth Headphones X1",
        manufacturer: "SoundMax",
      },
    },
    {
      id: 2,
      quantity: 1,
      price: 499000,
      product: {
        name: "Logitech M330 Wireless Mouse",
        manufacturer: "Logitech",
      },
    },
    {
      id: 3,
      quantity: 3,
      price: 99000,
      product: {
        name: "1.5m USB-C Fast Charging Cable",
        manufacturer: "Anker",
      },
    },
  ],
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};
const OrderCard = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 my-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          🧾 Order #{mockOrder.id}
        </h1>
        <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Confirmed on: {formatDate(mockOrder.createdAt)}
        </div>
        <div className="mt-1 text-sm text-gray-700 dark:text-gray-300">
          Status:{" "}
          <span className="font-semibold text-green-600 dark:text-green-400">
            {mockOrder.status}
          </span>
        </div>
      </div>

      {/* Product List */}
      <div className="space-y-4 mb-6">
        {mockOrder.items.map((order, index) => (
          <OrderProductCard item={order} key={index} />
        ))}
      </div>

      {/* Address & Payment Info */}
      <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1 mb-6">
        <p>
          <span className="font-medium">📍 Address:</span>{" "}
          <span className="font-semibold"> {mockOrder.shippingAddress}</span>
        </p>
        <p>
          <span className="font-medium">💳 Payment:</span>{" "}
          <span className="font-semibold"> {mockOrder.paymentMethod}</span>
        </p>
      </div>

      {/* Action Button */}
      <button className="w-full sm:w-auto mt-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white  rounded-xl transition font-semibold">
        I’ve received it
      </button>
    </div>
  );
};
export default OrderCard;
