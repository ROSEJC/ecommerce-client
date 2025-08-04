import React, { useEffect, useState } from "react";
import OrderProductCard from "./OrderProductCard";
import OrderCard from "./OrderCard";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const OrderPage = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      try {
        const now = Date.now() / 1000;
        const decoded = jwtDecode(token);
        if (decoded.exp < now) {
          return;
        }
        const userId = decoded.userId;
        const res = await axios.get(`http://localhost:3000/orders/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setOrder(res.data);
        console.log(res.data);
        console.log("Get orders successfully");
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <>
      {order.map((item, index) => (
        <OrderCard key={index} order={item} />
      ))}
    </>
  );
};

export default OrderPage;
