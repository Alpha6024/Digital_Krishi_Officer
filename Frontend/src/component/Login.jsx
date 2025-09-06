import { motion } from "framer-motion";
import Header from "./Header";
import RiveCircle from "./rivecircle";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate

export default function Login() {
  const [move, setMove] = useState(false);
  const navigate = useNavigate(); // ✅ create navigate function

  const handleLogin = () => {
    // You can add validation here if needed before navigating
    navigate("/main");
  };

  return (
    <>
      <Header />
      <div className="min-h-[92vh] w-screen bg-blue-300 flex flex-col md:flex-row justify-center items-center gap-6 p-4 relative overflow-hidden">
        {/* LEFT CARD */}
        <motion.div
          animate={{ x: move ? 460 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-[70vh] w-[35vw] bg-white rounded-2xl gap-6 flex flex-col justify-center items-center shadow-xl p-4"
        >
          <div className="h-[25vh] w-[15vw] bg-[#e3835f] rounded-full flex items-center justify-center overflow-hidden shadow-lg">
            <RiveCircle src="/harold.riv" />
          </div>

          <div className="h-[35vh] w-[28vw] text-center gap-4 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-green-900">
              Digital Krishi Officer
            </h1>
            <p className="text-lg md:text-2xl font-semibold text-gray-800">
              Always Available, Always Reliable, Always Farmer First
            </p>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          animate={{ x: move ? -460 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-[70vh] w-[35vw] bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            {move ? "Create Account" : "Welcome Back"}
          </h2>

          <input
            type="text"
            placeholder={move ? "Enter new username" : "Enter your name"}
            className="mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="password"
            placeholder={move ? "Enter new password" : "Enter your password"}
            className="mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
          >
            {move ? "Sign Up" : "Login"}
          </button>

          <p className="text-center text-gray-600 mt-4">
            {move ? "Already have an account?" : "Don’t have an account?"}{" "}
            <button
              onClick={() => setMove(!move)}
              className="text-green-600 font-semibold hover:underline"
            >
              {move ? "Go Back" : "Create one"}
            </button>
          </p>
        </motion.div>
      </div>
    </>
  );
}
