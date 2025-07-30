import { useNavigate } from "react-router-dom";
const CartEmptyWarning = () => {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate("/shop");
  };
  return (
    <div className="flex my-10">
      <div className="bg-white border rounded-xl shadow-xl max-w-[500px] h-auto w-full mx-auto flex flex-col items-center px-8 py-10">
        <div className="w-60 h-auto ml-0 rounded-xl">
          <img src="/empty_cart.png" />
        </div>
        <div className="text-2xl font-bold text-blue-600 mb-4">
          YOUR CART IS EMPTY
        </div>
        <div className="text-sm text-gray-400 text-center">
          It looks like you haven't added anything to your cart yet. Let's
          change that and find some amazing products for you!
        </div>
        <button
          className="bg-gray-100 hover:bg-black hover:text-white border border-gray-300 text-black font-semibold w-full  justify-center my-2 rounded-3xl"
          onClick={handleDiscoverClick}
        >
          Discover products
        </button>
      </div>
    </div>
  );
};

export default CartEmptyWarning;
