const ChooseProductWarning = ({ searchingButtonClick }) => {
  return (
    <div className="max-w-max h-auto w-full text-center flex flex-col justify-center items-center ">
      <p className="my-4 text-xl text-center  text-gray-600 font-bold dark:text-gray-400">
        PLEASE CHOOSE A PRODUCT
      </p>

      <button
        className="bg-gray-100 hover:bg-black hover:text-white border border-gray-300 text-black font-semibold w-full  justify-center my-2 rounded-3xl"
        onClick={searchingButtonClick}
      >
        Choose a product
      </button>
    </div>
  );
};

export default ChooseProductWarning;
