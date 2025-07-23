import { useState } from "react";

const ProductTabs = ({ description, additionalInfo, reviews }) => {
  const [activeTab, setActiveTab] = useState("description");

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
      <div className="flex space-x-4 bg-gray-100 rounded-lg p-1 w-full">
        {["description", "additionalInfo", "reviews"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 rounded-md font-medium text-sm w-full
              ${
                activeTab === tab
                  ? "bg-white text-green-800 border border-green-600"
                  : "text-gray-600 hover:text-green-700"
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
      <div className="mt-6 text-gray-700 text-sm leading-relaxed whitespace-pre-line">
        {activeTab === "description" &&
          (description ? description : defaultDescription)}
        {activeTab === "additionalInfo" &&
          (additionalInfo ? additionalInfo : defaultAdditionalInfo)}
        {activeTab === "reviews" &&
          (reviews && reviews.length > 0
            ? reviews.map((review, idx) => (
                <p key={idx} className="mb-2">
                  {review}
                </p>
              ))
            : "No reviews")}
      </div>
    </div>
  );
};

export default ProductTabs;
