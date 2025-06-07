import React from "react";
import { Link } from "react-router-dom";
import "../styles/WelcomePage.css";
import welcomeImage from "../assets/Welcome1.png";
// import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="homepage">
      {/* 🔹 Top Navbar */}
      <div className="navbar">
        <h2 className="logo">
          Edu<span className="italic">Sphere</span>
        </h2>
        <div className="nav-links">
          <Link to="/about">About Us</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>

      {/* 🔹 Welcome Section */}
      <div className="welcome-section">
        <img src={welcomeImage} alt="Welcome" className="welcome-image" />
        <p className="description">
          Your ultimate platform for seamless learning and teaching.<br />
          Enroll in courses, monitor progress, share blogs, and grow together!<br />
          Let’s make education simple and inspiring.
        </p>
        <Link to="/register">
          <button className="register-button">Register Now</button>
        </Link>
      </div>
      {/* <Footer/> */}
      <div style={{textAlign:"center", fontSize:12, color:"#dcdcdc"}}>
            <p>© Supreme Students Pvt. Ltd. </p>
        </div>
    </div>
  );
}

export default HomePage;