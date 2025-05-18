import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supaBaseClient";

export const Registration = () => {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [currentQualification, setCurrentQualification] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!name || !phoneNo || !currentQualification || !email) {
      setErrorMessage("Please fill in all the fields.");
      return;
    }

    const { error } = await supabase.from("users").insert([
      {
        name,
        phone_no: phoneNo,
        current_qualification: currentQualification,
        email,
      },
    ]);

    if (error) {
      console.error("Error saving user details:", error.message);
      setErrorMessage("Failed to save your details. Please try again.");
    } else {
      setErrorMessage("");
      navigate("/personality"); // Redirect to the Personality Test
    }
  };

  return (
    <div
className="flex items-center h-screen bg-cover bg-center pl-8"      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      <div className="flex flex-col items-center justify-center w-full max-w-lg bg-white bg-opacity-90 text-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6">Register</h1>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 px-4 py-2 border rounded w-full"
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          className="mb-4 px-4 py-2 border rounded w-full"
        />
        <input
          type="text"
          placeholder="Current Educational Qualification"
          value={currentQualification}
          onChange={(e) => setCurrentQualification(e.target.value)}
          className="mb-4 px-4 py-2 border rounded w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 px-4 py-2 border rounded w-full"
        />
        <button
          onClick={handleSubmit}
          className={`px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 w-full ${
            !name || !phoneNo || !currentQualification || !email
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={!name || !phoneNo || !currentQualification || !email}
        >
          Proceed to Personality Test
        </button>
      </div>
    </div>
  );
};

export default Registration;
