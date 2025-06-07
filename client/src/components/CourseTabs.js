import React, { useState } from "react";
import CourseCard from "./CourseCard.js";
import TeacherCard from "./TeacherCard.js";
import "../styles/CourseTabs.css";

const tabs = ["Top Rated Courses", "New Courses", "Top Free Courses"];

const courses = Array(5).fill({
  title: "Java Programming",
  instructor: "Dr. Priya Maity",
  image: "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png",
  rating: 4.9,
});

const teachers = Array(5).fill({
  name: "Dr. Henry Mark",
  subject: "IT Teacher",
  image: "https://randomuser.me/api/portraits/men/75.jpg",
  rating: 4.9,
});

function CourseTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={tab === activeTab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="cards">
        {courses.map((course, idx) => (
          <CourseCard key={idx} {...course} />
        ))}
        <button className="view-more">View More →</button>
      </div>

      <h3 className="teacher-title">Top Teachers</h3>
      <div className="teacher-cards">
        {teachers.map((teacher, idx) => (
          <TeacherCard key={idx} {...teacher} />
        ))}
        <button className="view-more">View More →</button>
      </div>
    </div>
  );
}

export default CourseTabs;