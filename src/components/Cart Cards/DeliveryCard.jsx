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
    <div className="w-full h-auto border border-gray-300 dark:border-zinc-700 rounded-xl mx-auto flex flex-col items-center px-4 bg-white dark:bg-zinc-900">
      <div className="text-lg font-semibold self-start my-4 text-zinc-800 dark:text-white">
        Delivery Address
      </div>

      <div className="space-y-4 self-start mb-4 w-full">
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
            <div className="w-5 h-5 mt-1 border-2 border-gray-400 dark:border-zinc-600 rounded-full flex items-center justify-center peer-checked:border-green-600">
              <div className="w-2.5 h-2.5 bg-green-600 rounded-full scale-0 peer-checked:scale-100 transition-transform" />
            </div>
            <div>
              <div
                className={`font-semibold ${
                  selected === option.id
                    ? "text-green-700 dark:text-green-400"
                    : "text-zinc-800 dark:text-zinc-100"
                }`}
              >
                {option.label}
              </div>
              <div className="text-sm text-gray-600 dark:text-zinc-400">
                {option.address}
              </div>
            </div>
          </label>
        ))}
      </div>

      <button className="bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-900 dark:hover:bg-zinc-700 border border-gray-300 dark:border-zinc-600 text-zinc-800 dark:text-white font-semibold w-full py-2 justify-center my-2 rounded-2xl transition-colors">
        Add New Address
      </button>
    </div>
  );
};

export default DeliveryCard;
