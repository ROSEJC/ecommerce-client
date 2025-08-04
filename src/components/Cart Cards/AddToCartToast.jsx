import React from "react";
import { CheckCircle } from "lucide-react";

const AddToCartToast = ({ message = "Item added to cart!", visible }) => {
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex items-center space-x-3 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 px-4 py-3 rounded-xl shadow-lg transition-all duration-300">
        <CheckCircle className="w-5 h-5" />
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
};

export default AddToCartToast;
