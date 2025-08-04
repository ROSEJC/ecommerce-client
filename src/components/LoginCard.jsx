import { AwardIcon, FastForward } from "lucide-react";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
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

      // Save user to localStorage
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
    <div className="max-w-md w-full p-8 rounded-lg shadow-md space-y-8 bg-none items-center text-gray-800 my-8 text-shadow font-bold">
      {/* Tiêu đề */}
      <h2 className="text-2xl font-bold text-start">Login</h2>

      {/* Nhập email */}
      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder-gray-500 font-medium"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Nhập mật khẩu */}
      <div>
        <label className="block text-sm mb-1">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder-gray-500 font-medium"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Nút đăng nhập */}
      <button
        className="w-full bg-blue-600 font-semibold py-2 rounded-md hover:bg-blue-700 transition"
        onClick={handleLogin}
      >
        Sign In
      </button>
    </div>
  );
};

export default LoginCard;
