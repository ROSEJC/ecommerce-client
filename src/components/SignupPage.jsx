import { Divide } from "lucide-react";
import React from "react";
import SignupCard from "./SignupCard";

const SignupPage = () => {
  return (
    <div className="">
      {/* Background image layer */}
      <div
        id="background-layer"
        className="pointer-events-none w-screen h-screen bg-[url('/bg_2.jpg')] bg-cover bg-center flex justify-center items-center"
      ></div>

      {/* Centered login card */}
      <div className="z-10 flex justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-full max-w-[1000px] h-[600px] rounded-2xl overflow-hidden flex shadow-2xl dark:shadow-green-200/10">
          {/* Left side image */}
          <div className="relative w-1/2 h-full">
            <img
              src="/sky_bg.jpg"
              className="w-full h-full object-cover"
              alt="Background"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent pointer-events-none rounded-l-2xl"></div>
          </div>

          {/* Right side card */}
          <div className="w-1/2 h-full flex items-center justify-center bg-white dark:bg-zinc-900/90 px-6 py-8">
            <SignupCard />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignupPage;
