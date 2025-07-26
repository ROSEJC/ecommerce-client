import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignupCard = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (password !== passwordConfirm) {
      console.error("password and confirmed password need to be the same");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/signup", {
        email,
        name,
        password,
      });
      console.log("Sign up successfully");
      navigate("/login");
    } catch (err) {
      console.err("Sign up failed", err);
    }
  };
  return (
    <div className="max-w-md w-full p-8 rounded-lg shadow-md space-y-8 bg-none items-center text-gray-800 my-8 text-shadow font-bold">
      {/* Tiêu đề */}
      <h2 className="text-2xl font-boldtext-center">Register</h2>

      {/* Nhập tên */}
      <div>
        <label className="block text-sm  mb-1">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Nhập email */}
      <div>
        <label className="block text-sm  mb-1">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Nhập mật khẩu */}
      <div>
        <label className="block text-sm mb-1">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Nhập lại mật khẩu */}
      <div>
        <label className="block text-sm  mb-1">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
      </div>

      {/* Nút đăng ký */}
      <button
        className="w-full bg-blue-600 font-semibold py-2 rounded-md hover:bg-blue-700 transition"
        onClick={handleSignup}
      >
        Sign Up
      </button>
    </div>
  );
};
export default SignupCard;
