import { Key, X } from "lucide-react"; // hoặc bất kỳ icon nào bạn dùng
import { useState } from "react";
import ChooseProductWarning from "./ChooseProductWarning";
import ProductPreshow from "./ProductPreshow";

const CompareCard = ({ onClose }) => {
  const [ready, setReady] = useState(false);

  const [product_1, setProduct_1] = useState([]);
  const [product_2, setProduct_2] = useState([]);

  const [findProduct_1, setFindProduct_1] = useState(false);
  const [findProduct_2, setFindProduct_2] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div className="relative z-50 bg-white p-6 rounded-lg shadow-lg w-full max-w-[1000px] h-[90vh] mx-4 overflow-y-auto ">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Nội dung tìm kiếm */}
        <h2 className="text-xl font-semibold mb-4 ">
          Which product is suitable for you?
        </h2>

        <div className="my-4 grid grid-cols-2 max-h-max h-full">
          <div className=" flex justify-center items-center border-r shadow-sm ">
            <ProductPreshow />
          </div>
          <div className="flex justify-center items-center border-l shadow-sm bg-gray-300 rounded-xl">
            <ChooseProductWarning />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareCard;
