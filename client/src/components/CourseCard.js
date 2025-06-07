import React from "react";
import "../styles/CourseCard.css";

function CourseCard({ title, instructor, image, rating }) {
  return (
    <div className="course-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>by {instructor}</p>
      <p>⭐ {rating}</p>
      <button>Enroll</button>
    </div>
  );
}

export default CourseCard;