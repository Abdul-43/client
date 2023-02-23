import { Container } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {API} from "../global"

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // perform registration validation
    if (password !== confirmPassword) {
      // Display an error message to the user if the passwords don't match
      alert("Passwords don't match");
      return;
    }
    try {
      const response=await axios
        .post(`${API}/auth/register`, {
          email,
          password
        })
        navigate("/questions");
        console.log(response.data)
    } catch (e) {
      console.log(e.response.data.message);
      if (e.response.data.message === 'failed to create') {
        alert('Email address is already registered');
      }
    }
  };

  return (
    <div className="auth-container">
      <Container centerContent>
        <div className="auth-card">
          <div className="auth-form">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
              <label>
                <b>Email</b>
                <br />
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </label>
              <br />
              <br />
              <label>
                <b>Password</b>
                <br />
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </label>
              <br />
              <br />
              <label>
                <b>Confirm Password</b>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </label>
              <br />
              <br />
              <button type="submit" className="register-button">
                Register
              </button>
            </form>
            <div className="auth-footer">
              <p>Already have an account?</p>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Register;
