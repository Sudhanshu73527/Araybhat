import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://araybhat-1.onrender.com/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);

        // 👉 Redirect with success message
        navigate("/admin/dashboard", {
          state: { message: "✅ Successfully Logged In!" }
        });

      } else {
        setLoading(false);
        alert(data.message || "Invalid Login");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("Server Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-green-100 via-white to-green-200">

      <motion.form
        onSubmit={handleLogin}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="backdrop-blur-lg bg-white/70 border p-10 rounded-3xl shadow-2xl w-96 flex flex-col items-center"
      >
        <p className="mb-4 text-sm text-red-500 font-semibold text-center">
          ⚠️ Admin Access Only
        </p>

        <h2 className="text-3xl font-bold mb-6 text-green-800">
          Admin Login
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter Email"
          className="border p-3 w-full rounded-xl mb-4 focus:ring-2 focus:ring-green-400"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <div className="relative w-full mb-6">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            className="border p-3 w-full rounded-xl pr-12 focus:ring-2 focus:ring-green-400"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-xl font-semibold flex justify-center items-center gap-2
          ${loading
            ? "bg-yellow-300 cursor-not-allowed"
            : "bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600"
          }`}
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
              Please wait...
            </>
          ) : (
            "Login"
          )}
        </button>

      </motion.form>
    </div>
  );
};

export default Login;