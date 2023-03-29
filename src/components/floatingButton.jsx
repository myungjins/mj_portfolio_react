import React from "react";
import styled from "styled-components";
import message from "assets/images/common/ic_message.svg";
import at from "assets/images/common/ic_at.svg";
import call from "assets/images/common/ic_call.svg";
import kakao from "assets/images/common/ic_kakao.svg";
import instagram from "assets/images/common/ic_instagram.svg";

const FloatingWrap = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  color: #666;
  transition: all 0.5s ease;
  transition-delay: 0.8s;
  z-index: 1;
  &:after {
    content: "";
    display: block;
    position: relative;
    transform: translateY(0);
    width: 80px;
    height: 80px;
    padding-top: 47px;
    font-size: 12px;
    color: #888;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0;
    background: rgba(255, 255, 255, 0.95) url(${message}) no-repeat center/50%
      auto;
    border-radius: 50%;
    border: 1px solid #fff;
    box-shadow: 7px 7px 7px 0px rgba(0, 0, 0, 0.1) inset,
      10px 10px 10px 0px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.5s ease;
  }
  &:hover .btn {
    box-shadow: 7px 7px 7px 0px rgba(0, 0, 0, 0.1) inset,
      10px 10px 10px 0px rgba(0, 0, 0, 0.2);
    opacity: 1;
  }
  &:hover .email {
    left: -270px;
  }
  &:hover .call {
    left: -180px;
  }
  &:hover .kakao {
    left: -90px;
  }
  &:hover .insta {
    left: 0;
  }
`;

const Btn = styled.div`
  display: block;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  background: #fff url(${at}) no-repeat center/50% auto;
  border-radius: 50%;
  border: 1px solid #fff;
  box-shadow: 7px 7px 7px 0px rgba(0, 0, 0, 0.1) inset;
  opacity: 0;
  transition: all 0.5s ease;
  z-index: 1;
  cursor: pointer;
  &.call {
    background-image: url(${call});
  }
  &.kakao {
    background-image: url(${kakao});
  }
  &.insta {
    background-image: url(${instagram});
  }
  &:hover .inner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 120px;
    height: 120px;
    margin: -60px 0 0 -60px;
    opacity: 1;
    z-index: 10;
    box-sizing: border-box;
  }
`;

const BtnInner = styled.div`
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2px;
  height: 2px;
  margin: -1px 0 0 -1px;
  padding: 0 10px;
  font-size: 13px;
  color: #000;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  border: 1px solid #fff;
  box-shadow: 7px 7px 7px 0px rgba(0, 0, 0, 0.1) inset,
    10px 10px 10px 0px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: width height 0.3s ease;
`;

const BoldTxt = styled.span`
  font-weight: 900;
`;

const floatingButton = () => {
  const atUrl = "mailto:myungjinchu2@gmail.com";
  const callUrl = "tel:01089866213";
  const instaurl = "https://www.instagram.com/m.jinnnn/";

  return (
    <FloatingWrap>
      <Btn className="btn email">
        <BtnInner
          className="inner"
          onClick={() => {
            window.open(atUrl);
          }}
        >
          <BoldTxt>E-mail</BoldTxt>myungjinchu2
          <br />
          @gmail.com
        </BtnInner>
      </Btn>
      <Btn className="btn call">
        <BtnInner
          className="inner"
          onClick={() => {
            window.open(callUrl);
          }}
        >
          <BoldTxt>Phone</BoldTxt>010-8986-6213
        </BtnInner>
      </Btn>
      <Btn className="btn kakao">
        <BtnInner className="inner">
          <BoldTxt>Kakaotalk ID</BoldTxt>o3omjj
        </BtnInner>
      </Btn>
      <Btn className="btn insta">
        <BtnInner
          className="inner"
          onClick={() => {
            window.open(instaurl);
          }}
        >
          <BoldTxt>Instagram ID</BoldTxt>m.jinnnn
        </BtnInner>
      </Btn>
    </FloatingWrap>
  );
};
export default floatingButton;
