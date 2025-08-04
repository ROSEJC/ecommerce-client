import React from "react";
import { FaStar } from "react-icons/fa";

const ShowResponseCard = ({ review }) => {
  const { rating, comment, createdAt, user } = review;

  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-md dark:shadow-none mb-4 transition-colors duration-300">
      <div className="flex items-center mb-2">
        {/* Stars */}
        <div className="flex text-green-600 dark:text-green-400 mr-3">
          {Array.from({ length: rating }, (_, index) => (
            <FaStar key={index} />
          ))}
        </div>

        {/* Name & Date */}
        <div>
          <span className="font-semibold text-gray-900 dark:text-white mr-2">
            {user ? user.name : "Anonymous"}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            – {formattedDate}
          </span>
        </div>
      </div>

      {/* Comment */}
      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        {comment}
      </p>
    </div>
  );
};

export default ShowResponseCard;
