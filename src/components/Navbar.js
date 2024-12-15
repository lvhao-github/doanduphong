import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <img src="/logo192.png" alt="Logo" className="nav-logo-image" />
      </Link>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" className="nav-item">
          <FaHome className="nav-icon" />
          <span className="nav-text">Trang chủ</span>
        </Link>
        <Link to="/login" className="nav-item">
          <FaInfoCircle className="nav-icon" />
          <span className="nav-text">Đăng Ký / Đăng Nhập </span>
        </Link>
        <Link to="/contact" className="nav-item">
          <FaEnvelope className="nav-icon" />
          <span className="nav-text">Liên hệ</span>
        </Link>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
