import React from "react";
import "../styles/TeacherCard.css";

function TeacherCard({ name, subject, image, rating }) {
  return (
    <div className="teacher-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{subject}</p>
      <p>⭐ {rating}</p>
      <button>View</button>
    </div>
  );
}

export default TeacherCard;