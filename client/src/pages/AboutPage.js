// src/pages/AboutUs.js
import React from "react";
import "../styles/AboutPage.css";
import { Link } from "react-router-dom";
import aboutus from "../assets/aboutUs.png";
import Mission from "../assets/mission.png";
import Vission from "../assets/vission.png";
import Offer from "../assets/offer.png";
import CoreValue from "../assets/corevalue.png";

function AboutUs() {
    return (
      <div className="about-body">
        <div className="about-container">
          <h2>Welcome to Edusphere!</h2>

        {/* About US */}
        <div className="grid-container">
            <div>
                <p style={{fontSize:"23px", fontWeight:"bold"}}>Who We Are</p>
                <p>
                    At Edusphere, we believe that education is the cornerstone of progress, and our mission is to make learning accessible,
                    engaging, and innovative for everyone. We are a dynamic platform where students and teachers collaborate to create, share,
                    and grow together. Whether you're here to learn, teach, or express your ideas, Edusphere is your one-stop destination
                    for education and creativity.
                </p>
                <p>
                    Edusphere is more than just a platform—it's a community of learners, educators, and creators. We are passionate about
                    bridging the gap between traditional education and modern learning needs by leveraging technology to enhance the educational experience.
                </p>
            </div>
            <img src={aboutus} alt="About Us" className="about-img" />
        </div>

        <div style={{textAlign:"center", height:"1px", width:"full", marginTop:"15px", backgroundColor: "#cfcccc"}}>.</div>

        {/* Our Mission */}
        <div className="grid-container">
            <img src={Mission} alt="Our Mission" className="mission-img" />
            <div>
                <br></br>
                <br></br>
                <p style={{fontSize:"23px", fontWeight:"bold"}}>Our Mission</p>
                <p>
                    Our mission is to empower students and educators by equipping them with state-of-the-art 
                    tools, resources, and opportunities that inspire a passion for learning, encourage 
                    knowledge-sharing, and facilitate skill development. We strive to create an ecosystem 
                    where education is accessible, innovative, and tailored to the diverse needs of learners 
                    and teachers alike. By fostering an environment of inclusivity, collaboration, and 
                    continuous growth, we aim to eliminate barriers to education, enabling individuals from 
                    all walks of life to unlock their full potential.
                </p>
            </div>
        </div>

        <div style={{textAlign:"center", height:"1px", width:"full", marginTop:"15px", backgroundColor: "#cfcccc"}}>.</div>
        
        {/* Our Vission */}
        <div className="grid-container">
            <div> 
                <br></br>
                <br></br>
                <p style={{fontSize:"23px", fontWeight:"bold"}}>Our Vision</p>
                <p>
                    We envision a world where education transcends traditional boundaries—where 
                    learning is not confined by geography, socioeconomic status, or time 
                    constraints. Our goal is to harness the power of technology and creativity 
                    to bridge gaps in education, ensuring that every student and educator has 
                    access to the tools they need to succeed. Through relentless innovation, 
                    unwavering dedication, and a commitment to accessibility, we aspire to shape 
                    a future where education is a catalyst for empowerment, transformation, and 
                    a better tomorrow.
                </p>
            </div>
            <img src={Vission} alt="Our Vission" className="vission-img" />
        </div>

        <div style={{textAlign:"center", height:"1px", width:"full", marginTop:"15px", backgroundColor: "#cfcccc"}}>.</div>
        
        {/* What We Offer */}
        <div className="grid-container">
            <img src={Offer} alt="What We Offer" className="offer-img" />
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p style={{fontSize:"23px", fontWeight:"bold"}}>What We Offer</p>
                <ul className="offer-list">
                    <li>
                        <strong>Interactive Courses:</strong> 
                        High-quality materials by experienced educators, hands-on projects.
                        Hands-on projects and practical assignments for real-world learning.
                    </li>
                    <li>
                        <strong>Blogging Platform:</strong> 
                        A place to express ideas and engage in collaborative learning.
                        Opportunities to connect and collaborate with a vibrant educational community.
                    </li>
                    <li>
                        <strong>Teacher Tools:</strong> 
                        Upload and share content easily. Track student progress.
                        Engage with students directly and track their progress.
                    </li>
                    <li>
                        <strong>Student Tools:</strong> 
                        Personalized paths and resources for effective learning.
                        A supportive environment to explore, learn, and grow.
                    </li>
                </ul>
            </div>
        </div>

        <div style={{textAlign:"center", height:"1px", width:"full", marginTop:"15px", backgroundColor: "#cfcccc"}}>.</div>
  
        {/* Our Core Values   */}
        <div className="grid-container">
            <div>
                <p style={{fontSize:"23px", fontWeight:"bold"}}>Our Core Values</p>
                <ul className="core-values">
                    <li>
                        <strong>Innovation:</strong> 
                        Create adaptive and engaging learning experiences, 
                        we aim to create engaging, adaptive, and impactful solutions 
                        that meet the needs of modern education. 
                        Innovation drives us to explore new possibilities and redefine the 
                        boundaries of learning.
                    </li>
                    <li>
                        <strong>Accessibility:</strong> 
                        Learning should be for everyone, everywhere.We are dedicated to 
                        breaking down barriers and ensuring that knowledge and resources 
                        are within reach of all, regardless of location or background, 
                        making learning truly inclusive.
                    </li>
                    <li>
                        <strong>Collaboration:</strong> 
                        Teamwork fosters success and empowerment.By fostering a culture of 
                        shared ideas and open communication, we empower students, educators, 
                        and communities to come together and achieve common goals.
                    </li>
                    <li>
                        <strong>Growth:</strong> 
                        Learning is a journey of continuous improvement. We are committed to 
                        nurturing curiosity, encouraging development, and helping individuals 
                        unlock their full potential in a world that’s constantly evolving.
                    </li>
                </ul>
            </div>
            <img src={CoreValue} alt="Our Values" className="corevalue-img" />
        </div>
  
        <div className="cta-box">
            <h3>Join Us in Shaping the Future of Education</h3>
            <p>
              At Edusphere, we’re not just building a platform—we’re building a community. Whether you’re a student, teacher, or creator,
              Edusphere is here for you.
            </p>
            <Link to="/register">
              <button className="register-btn">Register Now</button>
            </Link>
        </div>
        
        </div>
      </div>
    );
  }
  
  export default AboutUs;