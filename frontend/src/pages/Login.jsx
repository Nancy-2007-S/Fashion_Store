import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import '../styles/Login.css';

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(
          `${backendUrl}/api/user/register`,
          { name, email, password },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        }
        else {
          toast.error(response.data.message)
        }
      } else {
        const response = await axios.post(
          `${backendUrl}/api/user/login`,
          { email, password }
        );
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        }
        else {
          toast.error(response.data.message)
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };
  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])
  return (
    <form onSubmit={onSubmitHandler} className="login-container">
      <div className="login-header">
        <p className="login-title prata-regular">{currentState}</p>
        <hr className="login-divider" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input onChange={(e) => setName(e.target.value)} value={name}
          type="text"
          className="login-input"
          placeholder="John Doe"
          required
        />
      )}
      <input onChange={(e) => setEmail(e.target.value)} value={email}
        type="email"
        className="login-input"
        placeholder="hello@gmail.com"
        required
      />
      <input onChange={(e) => setPassword(e.target.value)} value={password}
        type="password"
        className="login-input"
        placeholder="Password"
        required
      />
      <div className="login-links">
        <p className="login-link-text">Forgot your password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="login-link-text"
          >
            Create a new account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="login-link-text"
          >
            Login here
          </p>
        )}
      </div>
      <button className="login-button">{currentState === "Login" ? "Sign In" : "Sign Up"}</button>
    </form>
  );
};

export default Login;
