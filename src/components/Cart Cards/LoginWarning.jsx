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
    <div className="bg-white border rounded-lg max-w-[600px] h-auto w-full mx-auto flex flex-col items-center px-8 py-4 my-10">
      <div className="text-2xl text-blue-500 font-bold">LOGO</div>
      <div className="text-xl font-semibold mb-4">WELCOME BACK</div>
      <div className="text-lg text-gray-400 text-center">
        Log in to view your cart items and checkout. Don't miss out on your
        favorite products!
      </div>
      <button
        className="bg-green-800 hover:bg-green-900 text-white font-semibold w-full  justify-center my-4"
        onClick={handleSigninClick}
      >
        Sign in
      </button>
      <div className="my-4 text-sm text-gray-400 text-center w-full">
        <p>Don't have an account?</p>
        <button
          className="bg-none hover:bg-gray-100 border border-gray-300 text-black font-semibold w-full  justify-center my-2"
          onClick={handleSignupClick}
        >
          Create an account
        </button>
      </div>
    </div>
  );
};

export default LoginWarning;
