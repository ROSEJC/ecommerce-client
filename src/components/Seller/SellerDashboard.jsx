import { useEffect } from "react";
import axios from "axios";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

export default function SellerDashboard() {
  // Dữ liệu mẫu
  const [stats, setStats] = useState({
    revenueToday: "$1,250",
    orders: 87,
    stock: 342,
    customers: 15,
    repeatRate: "42%",
  });

  let orderData = [
    { name: "Mon", orders: 12 },
    { name: "Tue", orders: 19 },
    { name: "Wed", orders: 8 },
    { name: "Thu", orders: 14 },
    { name: "Fri", orders: 23 },
    { name: "Sat", orders: 18 },
    { name: "Sun", orders: 10 },
  ];

  const [topProducts, setTopProducts] = useState([
    { name: "Áo thun basic", sold: 120 },
    { name: "Quần jeans", sold: 95 },
    { name: "Áo sơ mi", sold: 80 },
    { name: "Giày sneaker", sold: 76 },
    { name: "Túi tote", sold: 54 },
  ]);

  const alerts = [
    "⚠️ Sản phẩm 'Áo thun basic' sắp hết hàng",
    "📦 Bạn có 3 đơn hàng mới cần xử lý",
  ];

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3000/seller/dashboard");
      setStats(res.data.stats);
      setTopProducts(res.data.topProductsData);
    };
    try {
      getData();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className="p-6 min-h-screen bg-gray-50 dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        SELLER DASHBOARD
      </h1>

      {/* Overview */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {[
          { label: "Today's Revenue", value: stats.revenueToday },
          { label: "Total Orders", value: stats.orders },
          { label: "Stock", value: stats.stock },
          { label: "New Customers", value: stats.customers },
          { label: "Returning Customers", value: stats.repeatRate },
        ].map((item, i) => (
          <div
            key={i}
            className="shadow-md rounded-2xl bg-white dark:bg-gray-800 p-4 text-center"
          >
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {item.label}
            </p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Orders Chart */}
      <div className="mb-8 shadow-md rounded-2xl bg-white dark:bg-gray-800 p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Weekly Orders
        </h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={orderData}>
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.9)", // dark:bg-gray-800
                borderRadius: "0.5rem",
                border: "none",
                color: "#fff", // white text
              }}
              itemStyle={{
                color: "#e5e7eb", // text-gray-200
              }}
            />
            <Bar dataKey="orders" fill="#3b82f6" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Top Products */}
      <div className="mb-8 shadow-md rounded-2xl bg-white dark:bg-gray-800 p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Best-Selling Products
        </h2>
        <ul className="space-y-2">
          {topProducts.map((p, i) => (
            <li
              key={i}
              className="flex justify-between border-b pb-1 border-gray-200 dark:border-gray-700"
            >
              <span className="text-gray-900 dark:text-white">{p.name}</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {p.sold} sold
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Alerts */}
      <div className="shadow-md rounded-2xl bg-white dark:bg-gray-800 p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Notifications
        </h2>
        <ul className="space-y-2">
          {alerts.map((a, i) => (
            <li key={i} className="text-red-600 dark:text-red-400">
              {a}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
