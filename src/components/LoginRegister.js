import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "../styles/LoginRegister.css";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true); // Trạng thái để chuyển đổi giữa đăng nhập và đăng ký

  return (
    <div className="login-register-page">
      {/* Nút chuyển đổi giữa Đăng nhập và Đăng ký */}
      <div className="tab-buttons">
        <button
          onClick={() => setIsLogin(true)}
          className={isLogin ? "active" : ""}
        >
          Đăng nhập
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={!isLogin ? "active" : ""}
        >
          Đăng ký
        </button>
      </div>
      {/* Hiển thị form tương ứng */}
      <div>{isLogin ? <LoginForm /> : <RegisterForm />}</div>
    </div>
  );
};

export default LoginRegister;
