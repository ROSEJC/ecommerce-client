import { useNavigate } from "react-router-dom";
const FavoriteEmpty = () => {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate("/shop");
  };
  return (
    <div className="flex my-10">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-md dark:shadow-zinc-800 max-w-[500px] h-auto w-full mx-auto flex flex-col items-center px-8 py-10 transition-all">
        <div className="w-60 h-auto ml-0 rounded-xl bg-white p-2 dark:bg-white">
          <img src="/empty_cart.png" alt="Empty cart" />
        </div>

        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          YOUR CART IS EMPTY
        </div>
        <div className="text-sm text-gray-500 dark:text-zinc-400 text-center">
          It looks like you haven't added anything to your favorite yet. Let's
          change that and find some amazing products for you!
        </div>
        <button
          className="mt-4 py-2 px-4 w-full rounded-xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-700 font-medium shadow-sm transition-all duration-300"
          onClick={handleDiscoverClick}
        >
          Discover products
        </button>
      </div>
    </div>
  );
};

export default FavoriteEmpty;
