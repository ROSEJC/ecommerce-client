import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoaderCircle } from "lucide-react";

const SignupCard = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async () => {
    setErrorMsg("");
    if (password !== passwordConfirm) {
      setErrorMsg("Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      await axios.post("http://localhost:3000/auth/signup", {
        email,
        name,
        password,
      });
      console.log("Sign up successfully");
      navigate("/login");
    } catch (err) {
      console.error("Sign up failed", err);
      setErrorMsg("Sign up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full p-8 rounded-xl shadow-xl space-y-8 bg-white/90 dark:bg-zinc-800/90 dark:text-white backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-start">Create Account</h2>

      {/* Error Message */}
      {errorMsg && (
        <div className="text-red-600 bg-red-100 dark:bg-red-800/40 px-4 py-2 rounded-md text-sm">
          {errorMsg}
        </div>
      )}

      <div>
        <label className="block text-sm mb-1 font-semibold">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white placeholder-gray-500"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

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

      <div>
        <label className="block text-sm mb-1 font-semibold">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Confirm your password"
          className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white placeholder-gray-500"
          onChange={(e) => setPasswordConfirm(e.target.value)}
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
        onClick={handleSignup}
      >
        {loading && <LoaderCircle className="animate-spin h-5 w-5" />}
        {loading ? "Signing Up..." : "Sign Up"}
      </button>

      {/* Redirect to Login */}
      <div className="text-sm text-center">
        Already have an account?{" "}
        <button
          className="text-blue-600 hover:underline dark:text-blue-400"
          onClick={() => navigate("/login")}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignupCard;
