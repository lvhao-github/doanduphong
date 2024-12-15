import React from "react";

const LoginForm = () => {
  return (
    <form>
      <h2>Đăng nhập</h2>
      <div>
        <label>Email:</label>
        <input type="email" placeholder="Nhập email" />
      </div>
      <div>
        <label>Mật khẩu:</label>
        <input type="password" placeholder="Nhập mật khẩu" />
      </div>
      <button type="submit">Đăng nhập</button>
    </form>
  );
};

export default LoginForm;
