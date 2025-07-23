import React from "react";
const LoginCard = () => {
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
        />
      </div>

      {/* Nhập mật khẩu */}
      <div>
        <label className="block text-sm mb-1">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder-gray-500 font-medium"
        />
      </div>

      {/* Nút đăng nhập */}
      <button className="w-full bg-blue-600 font-semibold py-2 rounded-md hover:bg-blue-700 transition">
        Sign In
      </button>
    </div>
  );
};

export default LoginCard;
