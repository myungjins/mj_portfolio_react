import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: calc(100% + 1px);
  margin-top: -1px;
  background-color: #222222;
`;

const Txt = styled.p`
  padding: 0 0 35px;
  font-size: 50px;
  color: #fff;
  font-weight: bold;
  @media screen and (max-width: 720px) {
    font-size: 29px;
  }
`;

const Btn = styled.div`
  overflow: hidden !important;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 40px;
  width: 20%;
  min-width: 200px;
  height: 60px;
  font-size: 25px;
  color: #fff;
  font-weight: 900;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 20px;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase !important;
  transition: all 0.3s ease-in-out;
  z-index: 10;
  a {
    display: inline-block;
    width: 100%;
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: -10%;
    transform: skewX(-20deg);
    width: 0%;
    height: 100%;
    background: linear-gradient(to right, #747474, #404040, #2b2b2b);
    opacity: 1;
    z-index: -12;
    transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
    box-shadow: 2px 0px 14px rgba(0, 0, 0, 0.6);
  }
  &:hover&:before {
    opacity: 1;
    width: 116%;
  }
  &:after {
    content: "";
    display: block;
    width: 0%;
    height: 100%;
    position: absolute;
    top: 0;
    left: -10%;
    transform: skewX(-20deg);
    background: #fff;
    opacity: 0;
    z-index: -15;
    transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
    box-shadow: 2px 0px 14px rgba(0, 0, 0, 0.6);
  }
  &:hover&:after {
    opacity: 1;
    width: 120%;
  }
  &:hover {
    border-color: transparent;
    box-shadow: 1px 1px 6px 3px rgba(0, 0, 0, 0.2);
  }
`;

export default function Contact() {
  return (
    <Container>
      <Txt>채용하시겠습니까?</Txt>
      <Btn>
        <Link to="mailto:myungjinchu2@gmail.com">ok</Link>
      </Btn>
    </Container>
  );
}
