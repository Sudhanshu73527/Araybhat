import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://araybhat-1.onrender.com/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/admin/dashboard");
      } else {
        alert(data.message || "Invalid Login");
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-green-200 via-green-100 to-green-300">
      <motion.form
        onSubmit={handleLogin}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
        className="bg-white p-10 rounded-3xl shadow-2xl w-96 flex flex-col items-center"
      >
        {/* Admin notice */}
        <p className="mb-4 text-sm text-red-600 font-semibold text-center animate-pulse">
          ⚠️ Admin Access Only! Regular users, please do not proceed.
        </p>

        <h2 className="text-3xl font-bold mb-6 text-green-800 text-center">
          Admin Login
        </h2>

        {/* Email Input */}
        <motion.input
          whileFocus={{ scale: 1.02, borderColor: "#22c55e" }}
          type="email"
          placeholder="Email"
          className="border-2 border-gray-300 p-3 w-full rounded-xl mb-4 focus:outline-none focus:border-green-500 transition"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password Input */}
        <motion.input
          whileFocus={{ scale: 1.02, borderColor: "#22c55e" }}
          type="password"
          placeholder="Password"
          className="border-2 border-gray-300 p-3 w-full rounded-xl mb-6 focus:outline-none focus:border-green-500 transition"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Login Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-gradient-to-r from-green-600 to-green-400 text-white font-semibold py-3 w-full rounded-xl shadow-lg hover:shadow-2xl transition-all"
        >
          Login
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Login;