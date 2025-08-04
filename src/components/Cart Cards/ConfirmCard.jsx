const ConfirmCard = ({ onClose, handleCheckout }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* Modal content */}
      <div className="relative z-50 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 p-6 rounded-lg shadow-lg max-w-[500px] mx-4 overflow-y-auto ">
        <div className="w-full flex justify-end items-center">
          <button
            className="bg-transparent text-zinc-700 dark:text-zinc-300 hover:scale-105 p-0"
            onClick={onClose}
          >
            X
          </button>
        </div>

        {/* Your modal content goes here */}
        <div className="flex flex-col justify-start items-center">
          <div className="flex flex-col justify-center items-center my-4 space-y-2 mx-20">
            <img
              src="/shoppingbag.webp"
              className="h-28 w-28 border rounded-full overflow-visible bg-white"
            />
            <p className="font-bold text-blue-700 dark:text-blue-400 text-xl">
              CONFIRM CHECKOUT
            </p>
          </div>

          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            Are you sure you want to place this order
          </p>
          <button
            className="bg-orange-600 dark:bg-orange-500 text-white font-semibold mt-5 hover:bg-orange-800 dark:hover:bg-orange-600"
            onClick={() => {
              handleCheckout();
              onClose();
            }}
          >
            Lets go
          </button>
        </div>
      </div>
    </div>
  );
};
export default ConfirmCard;
