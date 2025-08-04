import { LoaderCircle } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginCard = ({ setTokenValid }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setErrorMsg("");

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
      console.error("Login failed", err);
      setErrorMsg("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full p-8 rounded-xl shadow-xl space-y-8 bg-white/90 dark:bg-zinc-800/90 dark:text-white backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-start">Welcome Back</h2>

      {errorMsg && (
        <div className="text-red-600 bg-red-100 dark:bg-red-800/40 px-4 py-2 rounded-md text-sm">
          {errorMsg}
        </div>
      )}

      <div>
        <label className="block text-sm mb-1 font-semibold">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white placeholder-gray-500"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm mb-1 font-semibold">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white placeholder-gray-500"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        disabled={loading}
        className={`w-full flex items-center justify-center gap-2 font-semibold py-2 rounded-md transition 
          ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white`}
        onClick={handleLogin}
      >
        {loading && <LoaderCircle className="animate-spin h-5 w-5" />}
        {loading ? "Signing In..." : "Sign In"}
      </button>

      {/* Sign Up Link */}
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
