// RegisterPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../styles/RegisterLoginPage.css";
import Welcome from "../assets/welcome.png"

function RegisterPage() {

  useEffect(() => {
    localStorage.removeItem("registrationData");
    localStorage.removeItem("generatedOtp");
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    designation: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  // const validatePhone = (phone) => /^[6-9]\d{9}$/.test(phone);
  const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/.test(password);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { fullName, email, password, confirmPassword, gender, designation } = formData;
  
    if (!fullName || !email || !password || !confirmPassword || !gender || !designation) {
      alert("Please fill all the fields.");
      return;
    }
  
    const isEmail = validateEmail(email);
    // const isPhone = validatePhone(contact);
    if (!isEmail) {
      alert("Please enter a valid email.");
      return;
    }
  
    if (!validatePassword(password)) {
      alert("Password must be 8+ chars, include upper, lower, number & special character.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    try {
      setIsSubmitting(true);

      
      const payload = {
        fullName,
        gender,
        designation,
        password,
        email: email.trim().toLowerCase()
      };
      
      //  It helps you confirm what's being sent to the backend
      console.log("📦 Sending data to /register-otp:", payload);

      const response = await axios.post("http://localhost:5000/api/auth/register-otp", payload);
  
      if (response.data.success) {
        localStorage.setItem("registrationData", JSON.stringify(payload));
        localStorage.setItem("generatedOtp", response.data.otp);
        alert("OTP sent to your email. Please verify.");
        navigate("/otp");
      }
    } catch (err) {
      if (err.response?.data?.msg === "User already exists") {
        alert("User already exists with this email.");
      } else {
        alert("Something went wrong.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="body" >

      <img src={Welcome} alt="Welcome" className="welcome"/>

      <div className="register-container">
        <h1>Sign Up</h1>
        <h4>Create your account</h4>

        <form onSubmit={handleSubmit} className="register-form">
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
          <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />

          <div className="password-wrapper">
            <input type={showPassword ? "text" : "password"} name="password" placeholder="Create Password" value={formData.password} onChange={handleChange} required />
            <span className="eye-icon right" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="password-wrapper">
            <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
            <span className="eye-icon right" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="grid-container">
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <select name="designation" value={formData.designation} onChange={handleChange} required>
              <option value="">Select Role</option>
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
            </select>
          </div>

          <button type="submit" disabled={isSubmitting}>Register</button>
        </form>

        <p style={{ marginTop: "20px", fontSize: "14px" }}>
          Already have an account? <Link to="/login" style={{ color: "#6C2BD9", textDecoration: "none" }}>Login</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;