import React from "react";
import styled from "styled-components";
import img from "../../img/logo.png";
import headerBg from "../../img/header.jpg";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  background: url(${headerBg}) no-repeat center;
  width: 100%;
  background-size: cover;
  min-height: 260px;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: flex-end;
  list-style: none;
  justify-content: flex-start;

  li {
    margin-right: 40px;

    @media (max-width: 325px) {
      margin-right: 20px;
    }

    a {
      text-decoration: none;
      cursor: pointer;
      color: #fff;
      font-weight: 400;
      font-size: 12px;
      line-height: 17px;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Nav = styled.nav`
  padding: 30px 150px;
  @media (max-width: 650px) {
    padding: 30px 0;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 40px;
  line-height: 58px;

  color: #ffffff;
`;

function Header() {
  return (
    <HeaderContainer className="header">
      <Nav>
        <Ul className="navbar">
          <li>
            <NavLink to="/">
              <img src={img} alt="Logo" />
              {"Coffe house "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/our-coffe">Our coffee</NavLink>
          </li>
          <li>
            <NavLink to="/for-pleasure">For your pleasure</NavLink>
          </li>
        </Ul>
      </Nav>
      <Title>Our Coffee</Title>
    </HeaderContainer>
  );
}

export default Header;
