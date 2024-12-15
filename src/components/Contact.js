import React from "react";
import '../styles/UserInfo.css'; 

const UserInfo = () => {
  const user = {
    name: "Lê Nguyễn Nhật Hào",
    email: "nhathao@gmail.com",
    password: "123456",
    age: 18,
    hometown: "",
    avatar: "/logo192.png",
  };

  return (
    <div className="user-info-container">
      <div className="user-avatar">
        <img src={user.avatar} alt="Avatar" />
      </div>
      <h2>Thông tin người dùng</h2>
      <form className="user-info-form">
        <div className="form-group">
        <label className="fromhh">Họ và tên:</label>
          <input type="text" value={user.name} readOnly />
        </div>
        <div className="form-group">
        <label className="fromhh">Email:</label>
          <input type="email" value={user.email} readOnly />
        </div>
        <div className="form-group">
        <label className="fromhh">Mật khẩu:</label>
          <input type="password" value={user.password} readOnly />
        </div>
        <div className="form-group">
        <label className="fromhh">Tuổi:</label>
          <input type="number" value={user.age} readOnly />
        </div>
        <div className="form-group">
        <label className="fromhh">Quê quán:</label>
          <input type="text" value={user.hometown} readOnly />
        </div>
      </form>
    </div>
  );
};

export default UserInfo;
