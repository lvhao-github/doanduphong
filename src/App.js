// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TodoApp from "./components/TodoApp";
import LoginRegister from "./components/LoginRegister";
import Contact from "./components/Contact";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <header>
          <Navbar />
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<TodoApp />} />
            <Route path="/login" element={<LoginRegister />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
