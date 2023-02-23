import React from "@chakra-ui/react";
import Login from "../pages/Login"
import Register from "../pages/Register"
import { Route,Routes  } from "react-router-dom";

function Authentication() {
    return (
      <div className="auth-page">
          <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/register" element={<Register/>} />
          </Routes>

      </div>
    );
  }
  
  export default Authentication;
  
  