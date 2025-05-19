import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-cyan-300 to-cyan-900 text-white">
      <div className="text-center">
        {/* Animated Logo */}
        <img
          src="/logo.png"
          alt="App Logo"
          className="w-40 h-40 ml-45 mb-8 rounded-full shadow-lg center "
        />

        {/* Animated Heading */}
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg animate-fade-in">
          Career Preference Tests
        </h1>

        {/* Animated Description */}
        <p className="text-lg font-medium mb-8 max-w-md mx-auto drop-shadow-md animate-fade-in delay-200">
          Discover your personality, career preferences, and learning styles in
          a fun and interactive way!
        </p>

        {/* Animated Button */}
        <button
          onClick={() => navigate("/register")}
          className="px-8 py-4 bg-gradient-to-r from-white to-blue-500 text-blue-600 font-bold rounded-full shadow-lg hover:bg-blue-100 hover:scale-105 transition-transform duration-300 animate-fade-in delay-400"
        >
          Get Started
        </button>

        {/* Footer */}
        <p className="mt-8 text-sm font-semibold text-white drop-shadow-md animate-fade-in delay-600">
          Powered by <span className="text-yellow-300 italic pb-10">NextU Empower</span>
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
