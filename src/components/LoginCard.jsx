import { AwardIcon, FastForward } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginCard = ({ setTokenValid }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      const user = response.data.user;

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", user.token);
      setTokenValid(true);
      navigate("/home");
    } catch (err) {
      console.error("Đăng nhập thất bại");
      alert("Password or Email is wrong");
    }
  };

  return (
    <div className="max-w-md w-full p-8 rounded-lg shadow-md space-y-8 bg-none items-center text-gray-800 dark:text-white my-8 text-shadow font-bold">
      <h2 className="text-2xl font-bold text-start">Login</h2>

      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder-gray-500 font-medium"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder-gray-500 font-medium"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        className="w-full bg-blue-600 font-semibold py-2 rounded-md hover:bg-blue-700 transition font-semibold text-white"
        onClick={handleLogin}
      >
        Sign In
      </button>

      {/* Sign up redirect */}
      <div className="text-sm text-center text-gray-600 dark:text-zinc-300 font-medium">
        Don't have an account?{" "}
        <button
          className="text-blue-600 hover:underline font-semibold"
          onClick={() => navigate("/signup")}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default LoginCard;
