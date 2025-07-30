import { useNavigate } from "react-router-dom";
import { useState } from "react";
const DeliveryCard = () => {
  const defaultData = [
    {
      id: "hometown",
      label: "Hometown",
      address: "123 Main St, Apt 4B, Dalas, DL 10056",
    },
    {
      id: "home",
      label: "Home",
      address: "123 Main St, Apt 4B, New York, NY 10001",
    },
    {
      id: "office",
      label: "Office",
      address: "456 Business Ave, New York, NY 10002",
    },
  ];
  const [selected, setSelected] = useState("home");

  return (
    <div className="w-full h-auto border border-black rounded-lg mx-auto flex flex-col items-center px-4">
      <div className="text-lg font-semibold self-start my-4">
        Delivery Address
      </div>
      <div className="space-y-4 self-start mb-4">
        {defaultData.map((option) => (
          <label
            key={option.id}
            className="flex items-start gap-3 cursor-pointer"
          >
            <input
              type="radio"
              name="address"
              value={option.id}
              checked={selected === option.id}
              onChange={() => setSelected(option.id)}
              className="peer hidden"
            />
            <div className="w-5 h-5 mt-1 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-black">
              <div className="w-2.5 h-2.5 bg-green-700 rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
            </div>
            <div>
              <div
                className={`font-semibold ${
                  selected === option.id ? "text-green-700" : "text-black"
                }`}
              >
                {option.label}
              </div>
              <div className="text-sm text-gray-600">{option.address}</div>
            </div>
          </label>
        ))}
      </div>
      <button className="bg-gray-100 hover:bg-black hover:text-white border border-gray-300 text-black font-semibold w-full  justify-center my-2 rounded-3xl">
        Add New Address
      </button>
    </div>
  );
};

export default DeliveryCard;
