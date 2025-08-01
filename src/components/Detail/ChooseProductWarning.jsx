const ChooseProductWarning = () => {
  return (
    <div className="max-w-max h-auto w-full text-center flex flex-col justify-center items-center ">
      <img src="/empty_cart.png" className="h-40 w-50 " />
      <p className="my-4 text-xl text-center font-semibold ">
        Please choose a product to compare
      </p>
      <button className="bg-orange-500 text-white  text-sm font-semibold rounded-lg mx-2 my-6 hover:bg-orange-700">
        Choose a product
      </button>
    </div>
  );
};

export default ChooseProductWarning;
