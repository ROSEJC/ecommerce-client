import { useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
const ReviewCard = ({
  userId,
  productId,
  img,
  name = "No name",
  onClose,
  orderItemId,
}) => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [reviewText, setReviewText] = useState("");

  const handleSubmitReview = async () => {
    if (rating < 1 || rating > 5) {
      alert("Please select a rating between 1 and 5 stars.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/reviews/add", {
        productId: parseInt(productId),
        rating,
        comment: reviewText,
        orderItemId: orderItemId,
        userId,
      });

      onClose();
    } catch (err) {
      console.error("Error submitting review:", err);
      alert("Failed to submit review");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" onClick={onClose}></div>

      {/* Modal Card */}
      <div className="relative z-10 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl w-full max-w-xl flex flex-col items-center space-y-5">
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white self-start w-full">
          Leave a Review
        </h2>

        {/* Product Image */}
        <img
          src={img || "/airpod.png"}
          alt="Product"
          className="h-24 w-24 object-cover rounded-lg shadow-md border"
        />

        {/* Product Name */}
        <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
          {name}
        </p>

        {/* Star Rating */}
        <div className="flex space-x-5">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`cursor-pointer text-3xl transition-transform hover:scale-110 ${
                index + 1 <= (hovered || rating)
                  ? "text-yellow-400"
                  : "text-gray-300 dark:text-gray-600"
              }`}
              onClick={() => setRating(index + 1)}
              onMouseEnter={() => setHovered(index + 1)}
              onMouseLeave={() => setHovered(null)}
            />
          ))}
        </div>

        {/* Review Textarea */}
        <textarea
          className="w-full h-28 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write your honest opinion here..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />

        {/* Send Button */}
        <button
          className="w-full py-2 px-4 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-700 transition"
          onClick={handleSubmitReview}
        >
          Send Review
        </button>

        {/* Message */}
        <p className="text-sm italic text-gray-600 dark:text-gray-400 text-center">
          We truly value your feedback – every review helps us serve you better!
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
