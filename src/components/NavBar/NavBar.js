import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Input, Spacer } from "@chakra-ui/react";

import SofLogo from "../svg/Sof.svg";


// ./svg/Sof.svg
const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f6f6f6;
  height: 60px;
  padding: 0 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
`;

const NavLink = styled(Link)`
  margin: 0 10px;
  font-size: 14px;
  color: #666;
  text-decoration: none;

  &:hover {
    color: #000;
  }
`;
const buttonStyle = {
  height: "30px",
  border: "none",
};
const loginStyle = {
  display: "flex",
  justifycontent: "center",
  alignitem: "center",
};
function NavBar() {
  return (
    <Navigation>
      <Logo to="/">
        <img src={SofLogo} width="25px" alt="sof-logo" />
        Stack Overflow
      </Logo>

      <Input
        placeholder="Search"
        size="lg"
        w="50%"
        h="20px"
        className="search-input"
      />
      <button style={buttonStyle}>Search</button>
      <Spacer />
      <NavLinks>
        <NavLink to="/questions">Questions</NavLink>
        {/* <NavLink to="/tags">Tags</NavLink>
        <NavLink to="/users">Users</NavLink> */}
        <b>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Signup</NavLink>
        </b>
      </NavLinks>
    </Navigation>
  );
}

export default NavBar;
