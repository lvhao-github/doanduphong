// src/components/ThemeToggle.jsx
import React, { useState, useEffect } from "react";
import "../styles/ThemeToggle.css";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("dark-mode");
    return savedTheme === "true"; // Nếu không có giá trị lưu, mặc định là false.
  });

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
    localStorage.setItem("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="theme-toggle-container">
      <span>{isDarkMode ? "Tối" : "Sáng"}</span>
      <label className="theme-switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
