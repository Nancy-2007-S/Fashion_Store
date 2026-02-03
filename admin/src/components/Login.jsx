import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

import "../styles/Login.css";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });

      if (response.data.success) {
        setToken(response.data.token);
        toast.success("Login successful.");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Please try again later.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo-wrapper">
          <img src={assets.logo} alt="Trendify" />
        </div>
        <h1 className="login-title">Admin Dashboard</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="login-form-group">
            <p className="login-label">Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="login-input"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <p className="login-label">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="login-input"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            className="login-btn"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
