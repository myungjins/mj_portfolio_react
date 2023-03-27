import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrap = styled.div`
  width: 100%;
  height: auto;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <Link to="/">Home</Link>
      <Link to="/about">about</Link>
    </HeaderWrap>
  );
};

export default Header;
