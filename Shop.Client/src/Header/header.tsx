import React from "react";
import logo from "../images/smartphone-by-made-premium.png";
import styled from "styled-components";

const StyledHeader = styled.div`
  & > img {
    height: 100px;
    width: 100px;
  }
  & > h1 {
    color: black;
    display: block;
    font-size: 3em;
    font-weight: bold;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="smartphone logo" />
      <h1>Shop.Client</h1>
    </StyledHeader>
  );
};

export default Header;
