const ProductPreshow = ({ searchingButtonClick, name }) => {
  return (
    <div className="max-w-max h-auto w-full text-center flex flex-col justify-center items-center">
      <img
        src="/airpod.png"
        className="h-40 w-40 rounded-xl shadow-lg dark:shadow-white"
      />
      <p className="my-4 text-xl text-center font-semibold text-black dark:text-white">
        {name}
      </p>
      <button
        className="border border-orange-500 
             text-black dark:text-white 
             bg-transparent dark:bg-transparent 
             text-sm font-semibold 
             rounded-3xl mx-2 my-6 
             dark:border-white
             hover:bg-orange-700 hover:text-white 
             dark:hover:bg-orange-600 dark:hover:text-white"
        onClick={searchingButtonClick}
      >
        Choose a different product
      </button>
    </div>
  );
};
export default ProductPreshow;
