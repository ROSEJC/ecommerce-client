import { Divide } from "lucide-react";
import React from "react";
import SignupCard from "./SignupCard";
import LoginCard from "./LoginCard";

const LoginPage = ({ setTokenValid }) => {
  return (
    <div className="">
      <div
        id="background-layer"
        className="pointer-events-none w-screen h-screen bg-[url('/bg_2.jpg')] bg-cover bg-center flex justify-center items-center"
      ></div>

      {/* Nội dung chính canh giữa dọc & ngang */}
      <div className=" z-10 flex justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="w-full max-w-[1000px] h-[600px] rounded-2xl overflow-hidden flex shadow-xl shadow-blue-300/40">
          {/* Bên trái: ảnh */}
          <div className="relative w-1/2 h-full">
            <img
              src="/sky_bg.jpg"
              className="w-full h-full object-cover"
              alt="Background"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent pointer-events-none rounded-l-2xl"></div>
          </div>

          {/* Bên phải: SignupCard */}
          <div className="w-1/2 h-full flex items-center justify-center bg-white/70 px-6 py-8">
            <LoginCard setTokenValid={setTokenValid} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
