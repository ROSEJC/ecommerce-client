import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

export default function OrderConfirmation() {
  // Sample data
  const [orders, setOrders] = useState([
    {
      id: "ORD001",
      customer: "John Doe",
      date: "2025-08-28",
      total: 1500000,
      payment: "COD",
      status: "Pending",
      items: [
        { name: "T-Shirt", qty: 2, price: 200000 },
        { name: "Jeans", qty: 1, price: 400000 },
      ],
    },
    {
      id: "ORD002",
      customer: "Jane Smith",
      date: "2025-08-28",
      total: 2300000,
      payment: "Momo",
      status: "Pending",
      items: [
        { name: "Sneakers", qty: 1, price: 1200000 },
        { name: "Handbag", qty: 1, price: 1100000 },
      ],
    },
  ]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3000/seller/orders");
      if (res.data) {
        setOrders(res.data);
      }
    };

    try {
      getData();
    } catch (err) {
      console.log(err);
    }
  });
  const [expanded, setExpanded] = useState(null);

  const handleConfirm = (id) => {
    setOrders(
      orders.map((o) => (o.id === id ? { ...o, status: "Confirmed" } : o))
    );
    alert(`Order ${id} has been confirmed!`);
  };

  const handleReject = (id) => {
    setOrders(
      orders.map((o) => (o.id === id ? { ...o, status: "Rejected" } : o))
    );
    alert(`Order ${id} has been rejected!`);
  };

  return (
    <div className="p-6 min-h-screen dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Order Confirmation
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-lg bg-white dark:bg-gray-800">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
              <th className="p-3">Order ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Date</th>
              <th className="p-3">Total</th>
              <th className="p-3">Payment</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <React.Fragment key={order.id}>
                <tr className="border-b dark:border-gray-700">
                  <td className="p-3">{order.id}</td>
                  <td className="p-3">{order.customer}</td>
                  <td className="p-3">{order.date}</td>
                  <td className="p-3">{order.total.toLocaleString()} đ</td>
                  <td className="p-3">{order.payment}</td>
                  <td
                    className={`p-3 font-semibold ${
                      order.status === "Confirmed"
                        ? "text-green-600"
                        : order.status === "Rejected"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {order.status}
                  </td>
                  <td className="p-3 flex gap-2">
                    <button
                      className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      onClick={() =>
                        setExpanded(expanded === order.id ? null : order.id)
                      }
                    >
                      {expanded === order.id ? "Hide" : "Details"}
                    </button>

                    <button
                      className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
                      onClick={() => handleConfirm(order.id)}
                      disabled={order.status !== "Pending"}
                    >
                      Confirm
                    </button>

                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      onClick={() => handleReject(order.id)}
                      disabled={order.status !== "Pending"}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
                {expanded === order.id && (
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td colSpan="7" className="p-4">
                      <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
                        Items in order:
                      </h3>
                      <ul className="space-y-1 text-gray-700 dark:text-gray-200">
                        {order.items.map((item, index) => (
                          <li key={index}>
                            {item.name} x {item.qty} –{" "}
                            {(item.price * item.qty).toLocaleString()} đ
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
