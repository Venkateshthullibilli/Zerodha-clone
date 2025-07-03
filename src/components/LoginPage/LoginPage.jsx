import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
    setShowSubmitError(false);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    setShowSubmitError(false);
  };

  const handleForm = async (event) => {
    event.preventDefault();
    try {
      const url = "https://api.escuelajs.co/api/v1/auth/login";
      const response = await axios.post(url, {
        email: username,
        password: password,
      });

      const jwtToken = await response.data.access_token;
      if (username === "john@mail.com" && password === "changeme") {
        localStorage.setItem("jwt_token", jwtToken);
        navigate("dashboard");
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.log(error)
      setShowSubmitError(true);
      setErrorMessage("Invalid username or password");
    }
  };


  const accessToken = localStorage.getItem('jwt_token')
  if (accessToken !== null){
      Navigate('/')
  }

  return (
    <div className="login-page-container">
      <form className="form-container" onSubmit={handleForm}>
        <header className="website-logo-container">
          <img
            src="https://kite.zerodha.com/static/images/kite-logo.svg"
            width={60}
            height={60}
            alt="website-logo"
          />
        </header>
        <h2 className="heading">Login to Kite</h2>
        <div className="input-container">
          <label htmlFor="userId" className="input-label">
            Phone number or User ID
          </label>
          <input
            type="text"
            className="input-field"
            id="userId"
            value={username}
            onChange={onChangeUsername}
            required
            placeholder="Phone number or User ID"
          />
        </div>
        <div className="input-container">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="input-field"
            value={password}
            onChange={onChangePassword}
            required
            placeholder="Password"
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        {showSubmitError && <p className="error-message">{errorMessage}</p>}
        <a href="#" className="forget-password">
          Forgot user ID or password?
        </a>
      </form>
    </div>
  );
};

export default LoginPage;
