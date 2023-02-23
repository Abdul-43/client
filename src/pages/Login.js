import { Container } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../global";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // perform login validation
    
    try {
      const response = await axios.post(`${API}/auth/login`, {
        email,
        password,
      });
      // localStorage.setItem('token', response.data.token);
      navigate("/questions");
      console.log(response.data.token);
    } catch (e) {
      console.log(e.response.data.message);
      if (e.response.data.message === "Invalid email or password") {
        alert("Invalid email or password");
      }
    }
      // Include the token in the request headers
// const axiosInstance = axios.create({
//   headers: {
//     accesstoken: localStorage.getItem('token')
//   }
// });

// // Make a request to the server
// axiosInstance.get(`${API}/auth/login`)
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.log(error);
//   });
  };


  return (
    <div className="auth-container">
      <Container centerContent>
        <div className="auth-card">
          <div className="auth-form">
            <h2>Login</h2>
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
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
            <div className="auth-footer">
              <p>Don't have an account?</p>
              <Link to="/register">Register</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Login;
