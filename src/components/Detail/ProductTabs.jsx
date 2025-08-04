import { useState, useEffect } from "react";
import axios from "axios";
import ShowResponseCard from "../Reviews/ShowResponseCard";

const ProductTabs = ({ description, additionalInfo, productId }) => {
  const [activeTab, setActiveTab] = useState("description");
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        console.log(productId);
        const res = await axios.get(
          `http://localhost:3000/reviews/${productId}`
        );
        setReviews(res.data);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };
    getData();
  }, [productId]);

  const defaultDescription = `
    In ducimus quod sed eum repellendus ea fugiat. Pariatur et illo at iure harum.
    Molestiae a itaque voluptas explicabo praesentium. Possimus omnis aut architecto et.
    Repellendus ab ipsa in non doloremque tenetur est doloremque.

    Quam in facere soluta consequatur voluptatem beatae asperiores. Qui quia itaque illo eos quibusdam voluptatem et.
    Est aut deserunt iste. Et ipsum eius ut odit deleniti.

    Officia praesentium ipsam perferendis possimus ex culpa voluptatem dolore. Aut id sit et vitae.
    Quis unde doloremque quisquam facere. In qui eos est voluptatem repudiandae blanditiis consequatur.
  `;

  const defaultAdditionalInfo = `
    - Material: Aluminum  
    - Weight: 1.2kg  
    - Dimensions: 25 x 15 x 10cm  
    - Warranty: 2 years  
  `;

  return (
    <div className="w-full max-w-3xl my-4">
      {/* Tabs */}
      <div className="flex space-x-4 bg-gray-300 dark:bg-zinc-700 rounded-lg p-1 w-full">
        {["description", "additionalInfo", "reviews"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 rounded-md font-medium text-sm w-full
          ${
            activeTab === tab
              ? "bg-white dark:bg-black text-black dark:text-white font-semibold"
              : "text-black dark:text-white hover:text-green-700 bg-gray-300 dark:bg-zinc-700"
          }`}
          >
            {tab === "description"
              ? "Description"
              : tab === "additionalInfo"
              ? "Additional Information"
              : "Reviews"}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6 text-gray-700 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-line">
        {activeTab === "description" &&
          (description ? description : defaultDescription)}
        {activeTab === "additionalInfo" &&
          (additionalInfo ? additionalInfo : defaultAdditionalInfo)}
        {activeTab === "reviews" &&
          (reviews && reviews.length > 0
            ? reviews.map((review, index) => (
                <ShowResponseCard key={index} review={review} />
              ))
            : "No reviews")}
      </div>
    </div>
  );
};

export default ProductTabs;
