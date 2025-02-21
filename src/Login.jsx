import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/main.scss"; 

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 로그인 처리 함수
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      alert("로그인 성공!");
      navigate("/"); // 로그인 성공 후 홈으로 이동
    } else {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
    }
  };

  // 회원가입 버튼 클릭 시 alert 띄우기
  const handleSignup = () => {
    alert("회원가입 기간이 아닙니다.");
  };

  return (
    <div className="login-bg">
    <div className="login-container">
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>아이디</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-btn">로그인</button>
      </form>
      <button className="signup-btn" onClick={handleSignup}>회원가입</button>
    </div>
    </div>
  );
};

export default Login;