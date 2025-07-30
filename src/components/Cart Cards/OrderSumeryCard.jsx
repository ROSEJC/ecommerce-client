import { useState } from "react";
import { useNavigate } from "react-router-dom";
const OrderSummery = ({ sub }) => {
  const navigate = useNavigate();
  const Discount = 2000;
  const handleDiscoverClick = () => {
    navigate("/shop");
  };
  return (
    <div className="w-full h-auto border border-black rounded-lg mx-auto flex flex-col items-center px-4">
      <div className="my-4 mx-4 w-full px-4 py-4 space-y-4 border-b border-gray-300">
        <div className="flex text-xl font-semibold self-start">
          Order Summary
        </div>
        <div className="flex justify-between">
          <div className="text-lg ">Subtotal</div>
          <div className="text-lg font-semibold">{subTotal}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-lg ">Discount</div>
          <div className="text-lg font-semibold">{Discount}}</div>
        </div>
      </div>
      <div className="flex justify-between my-4 mx-4 w-full px-4">
        <div className="text-xl font-semibold">Total</div>
        <div className="text-xl font-semibold">
          {subTotal === 0 ? subTotal - Discount : 0}
        </div>
      </div>
      <button className="bg-green-700 hover:bg-green-900 text-white font-semibold w-full  justify-center my-4 rounded-3xl">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default OrderSummery;
