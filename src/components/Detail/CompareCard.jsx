import { Key, X } from "lucide-react"; // hoặc bất kỳ icon nào bạn dùng
import { useState } from "react";
import ChooseProductWarning from "./ChooseProductWarning";
import ProductPreshow from "./ProductPreshow";
import CompareProductCard from "./CompareProductCard";
import axios from "axios";
import { useEffect } from "react";
import ImgCompare from "./ImgCompare";
import AttributesCompare from "./AttributesCompare";
const CompareCard = ({ onClose, defaultProduct }) => {
  const [ready_1, setReady_1] = useState(false);
  const [ready_2, setReady_2] = useState(false);

  const [product_1, setProduct_1] = useState([]);
  const [product_2, setProduct_2] = useState([]);

  const [isSearchingProduct_1, setIsSearchingProduct_1] = useState(false);
  const [isSearchingProduct_2, setIsSearchingProduct_2] = useState(false);

  const [searchedProduct_1, setSearchedProduct_1] = useState([]);
  const [searchedProduct_2, setSearchedProduct_2] = useState([]);

  const [searchKey_1, setSearchKey_1] = useState("");
  const [searchKey_2, setSearchKey_2] = useState("");

  const AttriButeToCompare = [
    { label: "name", title: "Product Name" },
    { label: "manufacturer", title: "Brand" },
    { label: "price", title: "Price (VND)" },
    { label: "modelName", title: "Model" },
    { label: "shape", title: "Design Shape" },
    { label: "controls", title: "Control Features" },
    { label: "eartip", title: "Eartip Type" },
    { label: "batteryBuds", title: "Battery (Buds)" },
    { label: "batteryCase", title: "Battery (Case)" },
    { label: "chargePort", title: "Charging Port" },
    { label: "releaseYear", title: "Release Year" },
    { label: "waterResistance", title: "Water Resistance" },
  ];

  const on_Product_1_Choose = (productId) => {
    for (let i = 0; i < searchedProduct_1.length; i++) {
      if (searchedProduct_1[i].id == productId) {
        setProduct_1(searchedProduct_1[i]);
        setReady_1(true);
        setIsSearchingProduct_1(false);
        return;
      }
    }
    //Trong truong hop loi ko tim thay product trong danh sach product hien co
    console.log("Khong tim thay product");
  };

  const on_Product_2_Choose = (productId) => {
    for (let i = 0; i < searchedProduct_2.length; i++) {
      if (searchedProduct_2[i].id == productId) {
        setProduct_2(searchedProduct_2[i]);
        setReady_2(true);
        setIsSearchingProduct_2(false);

        return;
      }
    }
    //Trong truong hop loi ko tim thay product trong danh sach product hien co
  };
  useEffect(() => {
    if (defaultProduct) {
      setProduct_1(defaultProduct);
      setReady_1(true);
      setIsSearchingProduct_1(false);
    }
  }, [defaultProduct]);

  useEffect(() => {
    const getData = async () => {
      if (searchKey_1 !== "") {
        const response = await axios.get("http://localhost:3000/product", {
          params: {
            name: searchKey_1,
          },
        });
        setSearchedProduct_1(response.data);
      }
    };
    getData();
  }, [searchKey_1]);

  useEffect(() => {
    const getData = async () => {
      if (searchKey_2 !== "") {
        const response = await axios.get("http://localhost:3000/product", {
          params: {
            name: searchKey_2,
          },
        });
        setSearchedProduct_2(response.data);
      }
    };
    getData();
  }, [searchKey_2]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div className="relative z-50 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-[1200px] h-[90vh] mx-4 overflow-y-auto text-black dark:text-white">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-white bg-transparent"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Nội dung tìm kiếm */}
        <h2 className="text-xl font-semibold mb-4">
          Which product is suitable for you?
        </h2>

        {(!ready_1 || !ready_2) && (
          <div className="my-4 grid grid-cols-2 max-h-[70vh] h-full ">
            <div className=" flex justify-center items-center border-r shadow-sm">
              {ready_1 && !ready_2 && (
                <ProductPreshow
                  searchingButtonClick={() => {
                    setIsSearchingProduct_1(true);
                    setReady_1(false);
                  }}
                  name={product_1.name}
                  image={product_1.image}
                />
              )}
              {!ready_1 && !isSearchingProduct_1 && (
                <ChooseProductWarning
                  searchingButtonClick={() => {
                    setIsSearchingProduct_1(true);
                    setReady_1(false);
                  }}
                />
              )}
              {isSearchingProduct_1 && (
                <div className="w-full  h-full overflow-y-auto">
                  <div className="my-4 space-y-1 max-h-[400px] h-full mx-4">
                    <input
                      type="text"
                      placeholder="Search your product hear..."
                      className="w-full p-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring focus:ring-blue-500 mb-4"
                      onChange={(e) => {
                        setSearchKey_1(e.target.value);
                      }}
                    />
                    {searchedProduct_1.map((item, index) => (
                      <CompareProductCard
                        key={index}
                        name={item.name}
                        price={item.price}
                        brand={item.manufacturer}
                        shape={item.shape}
                        action={() => on_Product_1_Choose(item.id)}
                        image={item.image}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-center items-center border-l shadow-sm dark:border-gray-500">
              {!ready_1 && ready_2 && (
                <ProductPreshow
                  searchingButtonClick={() => {
                    setIsSearchingProduct_2(true);
                    setReady_2(false);
                  }}
                  name={product_2.name}
                  image={product_2.name}
                />
              )}
              {!ready_2 && !isSearchingProduct_2 && (
                <ChooseProductWarning
                  searchingButtonClick={() => {
                    setIsSearchingProduct_2(true);
                    setReady_2(false);
                  }}
                />
              )}
              {isSearchingProduct_2 && (
                <div className="w-full  h-full overflow-y-auto ">
                  <div className="my-4 space-y-1 max-h-[400px] h-full mx-4">
                    <input
                      type="text"
                      placeholder="Search your product hear..."
                      className="w-full p-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring focus:ring-blue-500 mb-4"
                      onChange={(e) => {
                        setSearchKey_2(e.target.value);
                      }}
                    />
                    {searchedProduct_2.map((item, index) => (
                      <CompareProductCard
                        key={index}
                        name={item.name}
                        price={item.price}
                        brand={item.manufacturer}
                        shape={item.shape}
                        action={() => on_Product_2_Choose(item.id)}
                        image={item.image}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {ready_1 && ready_2 && (
          <div>
            <ImgCompare
              id_1={product_1.id}
              id_2={product_2.id}
              clickHandle={onClose}
              img1={product_1.image}
              img2={product_2.image}
            />
            {AttriButeToCompare.map((item, index) => (
              <AttributesCompare
                key={index}
                title={item.title}
                att1={product_1[item.label] ? product_1[item.label] : "none"}
                att2={product_2[item.label] ? product_2[item.label] : "none"}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CompareCard;
