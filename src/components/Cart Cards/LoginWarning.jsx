import { useNavigate } from "react-router-dom";
const LoginWarning = () => {
  const navigate = useNavigate();
  const handleSigninClick = () => {
    navigate("/login");
  };
  const handleSignupClick = () => {
    navigate("/signup");
  };
  return (
    <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl max-w-[600px] w-full mx-auto flex flex-col items-center px-8 py-6 my-10 shadow-sm dark:shadow-zinc-800">
      <div className="text-2xl text-blue-600 dark:text-blue-400 font-bold">
        LOGO
      </div>
      <div className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        WELCOME BACK
      </div>

      <div className="text-base text-center text-gray-500 dark:text-gray-400 mb-6">
        Log in to view your cart items and checkout.
        <br />
        Don’t miss out on your favorite products!
      </div>

      <button
        onClick={handleSigninClick}
        className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M12 5l7 7-7 7"
          />
        </svg>
        Sign in
      </button>

      <div className="my-4 text-sm text-gray-500 dark:text-gray-400 text-center w-full">
        <p>Don’t have an account?</p>
        <button
          onClick={handleSignupClick}
          className="mt-2 py-2 px-4 w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-medium shadow-sm transition-all duration-300"
        >
          Create an account
        </button>
      </div>
    </div>
  );
};

export default LoginWarning;
