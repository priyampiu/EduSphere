// otpVerification.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/otpVerification.css";
import verifyYourself from "../assets/verifyYourself.png";

function OtpPage() {
  const [enteredOtp, setEnteredOtp] = useState("");
  const navigate = useNavigate();
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [userEmail, setUserEmail] = useState("");
 
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }

    const userData = JSON.parse(localStorage.getItem("registrationData"));
if (userData?.email) {
  setUserEmail(userData.email);
}
  
    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = async () => {
    const userData = JSON.parse(localStorage.getItem("registrationData"));
    if (!userData || !userData.email) {
      alert("No registration data found.");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:5000/api/auth/resend-otp", {
        email: userData.email,
      });
  
      if (response.data.success) {
        localStorage.setItem("generatedOtp", response.data.otp);
        setTimer(30);
        setCanResend(false);
        alert("New OTP sent to your email.");
      }
    } catch (err) {
      alert("Failed to resend OTP. Try again.");
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    const generatedOtp = localStorage.getItem("generatedOtp");
    const registrationData = JSON.parse(localStorage.getItem("registrationData"));
     
    const payload = {
        fullName: registrationData.fullName,
        email: registrationData.email.trim().toLowerCase(),
        password: registrationData.password,
        gender: registrationData.gender,
        designation: registrationData.designation
      };

  // ✅ Log what registration data is about to be sent
  console.log("🚀 Data being sent to backend:", registrationData);

    if (!generatedOtp || !registrationData) {
      alert("Session expired. Please register again.");
      navigate("/register");
      return;
    }

    if (enteredOtp !== generatedOtp) {
      alert("Incorrect OTP. Please try again.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/auth/register", payload);
      alert("Registration successful!");
      localStorage.removeItem("generatedOtp");
      localStorage.removeItem("registrationData");
      navigate("/home");
    } catch (err) {
      alert(err.response?.data?.msg || "Failed to register user.");
    }
  };

  
 

  return (

    <div className="body">

        <img src={verifyYourself} alt="Verify Yourself" style={{height: "642px"}} />

        <div className="otp-container">
            
            <h1>Verify OTP</h1>
            <p>Enter the OTP sent to <strong>{userEmail}</strong>.</p>
            
            <form onSubmit={handleVerify} >
                <input
                    type="text"
                    value={enteredOtp}
                    onChange={(e) => setEnteredOtp(e.target.value)}
                    placeholder="Enter OTP"
                    maxLength="6"
                    required
                />

                <br />
                
                <button className="submit-btn" type="submit" >
                    Verify
                </button>
                
                <p style={{ fontSize: "14px", marginTop: "40px" }}>
                    {canResend ? (
                        <button type="button" onClick={handleResend} className="resend-btn">
                            Resend OTP
                        </button>
                    ) : (
                        <>You can resend OTP in {timer} seconds</>
                    )}
                </p>

            </form>
        </div>
    </div>
  );
}

export default OtpPage;
