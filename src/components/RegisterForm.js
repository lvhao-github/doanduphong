import React from "react";

const RegisterForm = () => {
  return (
    <form>
      <h2>Đăng ký</h2>
      {/* Họ và tên */}
      <div>
        <label>Họ và tên:</label>
        <input type="text" placeholder="Nhập họ và tên" />
      </div>

      {/* Email */}
      <div>
        <label>Email:</label>
        <input type="email" placeholder="Nhập email" />
      </div>

      {/* Mật khẩu */}
      <div>
        <label>Mật khẩu:</label>
        <input type="password" placeholder="Nhập mật khẩu" />
      </div>

      {/* Tuổi */}
      <div>
        <label>Tuổi (tùy chọn):</label>
        <input type="number" placeholder="Nhập tuổi" />
      </div>

      {/* Quê quán */}
      <div>
        <label>Quê quán (tùy chọn):</label>
        <input type="text" placeholder="Nhập quê quán" />
      </div>

      {/* Avatar */}
      <div>
        <label>Ảnh đại diện (tùy chọn):</label>
        <input type="file" accept="image/*" />
      </div>

      {/* Nút Đăng ký */}
      <button type="submit">Đăng ký</button>
    </form>
  );
};

export default RegisterForm;
