const ProductPreshow = () => {
  return (
    <div className="max-w-max h-auto w-full text-center flex flex-col justify-center items-center ">
      <img src="/airpod.png" className="h-40 w-40 rounded-xl shadow-lg" />
      <p className="my-4 text-xl text-center font-semibold">
        This is product name longer longer
      </p>
      <button className="border border-orange-500 text-black  text-sm font-semibold rounded-lg mx-2 my-6 hover:bg-orange-700 hover:text-white">
        Choose a different product
      </button>
    </div>
  );
};
export default ProductPreshow;
