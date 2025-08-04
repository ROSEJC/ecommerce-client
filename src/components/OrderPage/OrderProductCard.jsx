import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReviewCard from "../Reviews/ReviewCard";

const OrderProductCard = ({ item, status, userId }) => {
  const [showReviewButton, setShowReviewButton] = useState(false); // control visibility
  const [showReviewCard, setShowReviewCard] = useState(false); // control visibility
  const navigate = useNavigate();
  useEffect(() => {});
  if (!item || !item.product) {
    console.warn("Missing item or item.product", item);
    return null;
  }

  const onReviewClose = () => {
    setShowReviewCard(false);
  };

  useEffect(() => {
    if (status === "Received" && !item.reviewId) {
      setShowReviewButton(true);
    } else {
      setShowReviewButton(false);
    }
  }, [status, item.reviewId]);

  return (
    <div className="p-4 border rounded-md bg-gray-50 dark:bg-gray-800 flex justify-between">
      <div className="flex space-x-2">
        <button
          className="p-0 m-0 border-none bg-transparent rounded-none "
          onClick={() => {
            navigate(`/detail/${item.productId}`);
          }}
        >
          <img
            src={item.product.image}
            className="h-32 w-32 rounded-lg hover:scale-105 transition-all duration-300"
            alt="AirPods"
          />
        </button>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {item.product.name}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Brand:{" "}
            <span className="font-semibold text-gray-800 dark:text-white">
              {item.product.manufacturer}
            </span>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Qty:{" "}
            <span className="font-semibold text-gray-800 dark:text-white">
              {item.quantity}
            </span>{" "}
            | Price:{" "}
            <span className="font-semibold text-green-600">
              {(item.price * 1000).toLocaleString()}₫
            </span>
          </p>
        </div>
      </div>

      {showReviewButton && (
        <div className="mt-2 flex items-center">
          <button
            className="px-2 bg-orange-500 hover:bg-orange-700 text-white text-sm rounded-lg transition py-3"
            onClick={() => {
              setShowReviewCard(true);
            }}
          >
            Review
          </button>
        </div>
      )}

      {showReviewCard && (
        <ReviewCard
          onClose={onReviewClose}
          productId={item.productId}
          orderItemId={item.id}
          userId={userId}
          name={item.product.name}
          img={item.product.image}
        />
      )}
    </div>
  );
};

export default OrderProductCard;
