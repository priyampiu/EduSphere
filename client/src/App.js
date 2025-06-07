import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import OtpVerification from "./pages/otpVerification";
import RegisterPage from "./pages/RegisterPage";  // ✅ Make sure file exists
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/otp" element={<OtpVerification />} />
        <Route path="/home" element={<HomePage />} />
        {/* Add more routes later */}
      </Routes>
    </Router>
  );
}

export default App;