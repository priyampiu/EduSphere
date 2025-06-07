import React from "react";
import Navbar from "../components/Navbar";
import CourseTabs from "../components/CourseTabs.js";
import Footer from "../components/Footer.js";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="welcome-section">
        <h1>Welcome to <span>EduSphere</span></h1>
        <p>Empowering Education Through Collaboration</p>
      </div>
      <CourseTabs />
      <Footer />
    </>
  );
}

export default HomePage;
