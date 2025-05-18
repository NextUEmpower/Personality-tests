import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src="/logo.png" alt="App Logo" className="w-32 h-32 mb-6" />
      <h1 className="text-4xl font-bold mb-4">Welcome to Personality Test App</h1>
      <p className="text-lg text-gray-600 mb-8">Discover your personality, career preferences, and more!</p>
      <button
        onClick={() => navigate("/register")} // Navigate to the registration page
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
