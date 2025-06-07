// LoginPage.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../styles/RegisterLoginPage.css"; // Reuse register CSS for consistent design
import WelcomeBack from "../assets/welcomeback.png";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email: email.trim().toLowerCase(),
        password,
      });

      if (response.data.success) {
        alert("Login successful!");
        // Optionally store token or user info
        navigate("/home");
      }
    } catch (err) {
      alert(err.response?.data?.msg || "Login failed. Try again.");
    }
  };

  return (
    <div className="body" style={{ display: "flex" }}>
      <img src={WelcomeBack} alt="Welcome" className="welcome" />

      <div className="register-container">
        <h1>Login</h1>
        <h4>Welcome back to EduSphere</h4>

        <form onSubmit={handleSubmit} className="register-form" autoComplete="off">
          <input
             type="email"
             name="email"
             placeholder="Enter your email"
             autoComplete="off"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             required
          />

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="eye-icon right" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit">Login</button>

          <p style={{ marginTop: "20px", fontSize: "14px" }}>
            Don't have an account?{" "}
            <Link to="/register" style={{ color: "#6C2BD9", textDecoration: "none" }}>
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;