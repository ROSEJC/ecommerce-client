import { ShoppingBag } from "lucide-react";
import { useState } from "react";
const ProductCart = ({
  name = "Lorems ipsum",
  productQuantity = 1,
  shape = "Hook",
  price = "1000",
}) => {
  const [quantity, setQuantity] = useState(productQuantity);

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className="flex max-w-full w-full">
      <button className="overflow-hidden border border-gray-300 rounded-lg m-2">
        <img
          src="/airpod.png"
          className="h-24 w-24 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </button>
      <div className="mx-4">
        <p className="text-lg font-semibold mt-4">{name}</p>
        <div className="flex gap-1 text-sm">
          <span>Shape: </span> <div className="font-semibold">{sha}}</div>
        </div>
        <div className="flex gap-1 text-sm">
          <span>Status: </span> <div className="font-semibold">New</div>
        </div>
      </div>

      <div className="mx-4 ml-auto space-x-2 flex flex-col justify-between my-2">
        <div className="flex gap-2">
          {" "}
          <p className="text-lg font-semibold mt-4 text-black">
            {price * 1000 * quantity} VND
          </p>
        </div>

        <div className="flex items-center space-x-4 justify-end">
          <button
            onClick={decrease}
            className="w-8 h-8 rounded-md border border-gray-300 flex items-center justify-center shadow-sm hover:bg-gray-100"
          >
            <span className="text-xl leading-none">−</span>
          </button>
          <span className="text-lg font-medium w-4 text-center">
            {quantity}
          </span>
          <button
            onClick={increase}
            className="w-8 h-8 rounded-md border border-gray-300 flex items-center justify-center shadow-sm hover:bg-gray-100"
          >
            <span className="text-xl leading-none">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
