import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="logo">Edu<span>Sphere</span></div>

      <div className="search">
        <input type="text" placeholder="Search by" />
        <button>Search</button>
      </div>

      <div className="profile" onClick={() => setDropdownOpen(!dropdownOpen)}>
        <FaUserCircle size={30} />
        {dropdownOpen && (
          <div className="dropdown">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;