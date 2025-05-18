import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
<div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-cyan-300 via-cyan-500 to-blue-900 text-white">      <div className="text-center">
        <img
          src="/logo.png"
          alt="App Logo"
          className="w-40 h-40 mb--8"
        />
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Welcome to the Personality Test App
        </h1>
        <p className="text-lg font-medium mb-8 max-w-md mx-auto drop-shadow-md">
          Discover your personality, career preferences, and learning styles in
          a fun and interactive way!
        </p>
        <button
          onClick={() => navigate("/register")}
          className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-blue-100 hover:scale-105 transition-transform duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;