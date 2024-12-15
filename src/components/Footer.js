import React, { useState, useEffect } from "react";
import '../styles/Footer.css';


function Footer() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentDateTime(now.toLocaleString("vi-VN"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="footer text-center py-3">
      <p>© 2024 MyApp. All Rights Reserved.</p>
      <p>{currentDateTime}</p>
    </footer>
  );
}

export default Footer;
