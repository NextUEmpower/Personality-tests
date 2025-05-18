import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Registration from "./components/Registration";
import TestPage from "./components/TestPage";
import personalityQuestions from "./data/personalityQuestions";
import intelligenceQuestions from "./data/intelligenceQuestions";
import careerQuestions from "./data/careerQuestions";
import learningQuestions from "./data/learningQuestions";

function App() {
  const location = useLocation();
  const showNavBar = !["/", "/register"].includes(location.pathname);

  return (
    <>
      {showNavBar && <NavBar />}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/register" element={<Registration />} />
        <Route
          exact
          path="/personality"
          element={<TestPage title="Personality Test" questions={personalityQuestions} />}
        />
        <Route
          exact
          path="/intelligences"
          element={<TestPage title="Multiple Intelligences Test" questions={intelligenceQuestions} />}
        />
        <Route
          exact
          path="/career"
          element={<TestPage title="Career Preference Test" questions={careerQuestions} />}
        />
        <Route
          exact
          path="/learning"
          element={<TestPage title="Learning Styles Test" questions={learningQuestions} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;