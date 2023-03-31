import React, { useRef, useState } from "react";
import styled from "styled-components";
import Home from "pages/main";
import About from "pages/about";
import Works from "pages/works";
import Picture from "pages/picture";
import Picture2 from "pages/picture2";
import Contact from "pages/contact";
import { Link } from "react-router-dom";
import menuBlack from "assets/images/common/ic_menu_black.png";
import { ReactComponent as ic_close_black } from "assets/images/common/ic_close_black.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Mousewheel, Pagination]);

const Header = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 0 16px;
  z-index: 100;
`;

const Logo = styled.h1`
  position: absolute;
  top: 85px;
  left: -35px;
  transform: rotate(-90deg);
  font-size: 20px;
  font-weight: bold;
  /* color: #000; */
  color: ${(props) => (props.fontColor ? "#000" : "#fff")};
  letter-spacing: -1px;
  transition: all 0.5s ease 0s;
  cursor: pointer;
  @media screen and (max-width: 720px) {
    top: 70px;
    font-size: 16px;
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  cursor: pointer;
  @media screen and (max-width: 720px) {
    width: 30px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const Nav = styled.div`
  display: ${(props) => (props.see ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  transition: all 1s ease 0s;
`;

export const CloseSvg = styled(ic_close_black)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: ${(props) => (props.width ? props.width : 40)}px;
  min-width: ${(props) => (props.width ? props.width : 40)}px;
  height: ${(props) => (props.height ? props.height : 40)}px;
  min-height: ${(props) => (props.height ? props.height : 40)}px;
  z-index: 100;
  path {
    fill: ${(props) => (props.color ? props.color : "white")};
  }
  cursor: pointer;
  @media screen and (max-width: 720px) {
    width: ${(props) => (props.width ? props.width : 30)}px;
    min-width: ${(props) => (props.width ? props.width : 30)}px;
    height: ${(props) => (props.height ? props.height : 30)}px;
    min-height: ${(props) => (props.height ? props.height : 30)}px;
  }
`;

const NavWrap = styled.div``;

const NavItem = styled.div`
  margin: 0 0 30px;
  font-size: min(7.33vw, 13vh);
  color: #818181;
  font-weight: bold;
  line-height: 1;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  &:hover&:nth-of-type(1) {
    color: #ff4de1;
  }
  &:hover&:nth-of-type(2) {
    color: #52ff74;
  }
  &:hover&:nth-of-type(3) {
    color: #1fdaff;
  }
`;

const NavItemSmall = styled.div`
  font-size: 15px;
  color: #f1f1f1;
  font-weight: 500;
  line-height: 1.2;
  &:not(:last-of-type) {
    margin: 0 0 15px;
  }
  @media screen and (max-width: 400px) {
    font-size: 13px;
  }
`;

const Txt = styled(NavItemSmall)`
  color: #818181;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  &:hover {
    color: #f1f1f1;
  }
`;

const SSwiper = styled(Swiper)`
  position: relative;
  width: 100%;
  height: 100%;
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    font-size: 18px;
    background-color: #fff;
  }
`;

const SPagination = styled.div`
  &.portfolio__pagination {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }
  .swiper-pagination-bullet {
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: rgba(0, 0, 0, 0.2);
    opacity: 0.7;
    border-radius: 50%;
    cursor: pointer;
    &:not(:last-of-type) {
      margin: 0 0 10px 0;
    }
    &.swiper-pagination-bullet-active {
      background-color: #000;
      opacity: 1;
    }
  }
`;

const PortfolioSwiper = () => {
  const [modalSee, setModalSee] = useState(false);
  const swiperRef = useRef(null);
  const url = "https://www.instagram.com/m.jinnnn/";

  const changeSlide = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
    setModalSee(false);
  };

  return (
    <>
      <Header>
        <Logo onClick={() => changeSlide(0)} fontColor={true}>
          Song Myung Jin
        </Logo>
        <Menu onClick={() => setModalSee(true)}>
          <Img src={menuBlack} alt="menu" />
        </Menu>
        <Nav see={modalSee}>
          <CloseSvg onClick={() => setModalSee(false)} />
          <NavWrap>
            <NavItem onClick={() => changeSlide(0)}>HOME</NavItem>
            <NavItem onClick={() => changeSlide(2)}>PORTFOLIO</NavItem>
            <NavItem onClick={() => changeSlide(4)}>CONTACT</NavItem>
            <NavItemSmall>
              E-mail
              <br />
              <Txt>
                <Link to="mailto:myungjinchu2@gmail.com">
                  myungjinchu2@gmail.com
                </Link>
              </Txt>
            </NavItemSmall>
            <NavItemSmall>
              Phone
              <br />
              <Txt>
                <Link to="tel:01089866213"> 010-8986-6213</Link>
              </Txt>
            </NavItemSmall>
            <NavItemSmall>
              Kakaotalk
              <br />
              <Txt>o3omjj</Txt>
            </NavItemSmall>
            <NavItemSmall>
              Instagram <br />
              <Txt
                onClick={() => {
                  window.open(url);
                }}
              >
                www.instagram.com/m.jinnnn
              </Txt>
            </NavItemSmall>
          </NavWrap>
        </Nav>
      </Header>
      <SSwiper
        ref={swiperRef}
        direction={"vertical"}
        modules={[Pagination]}
        className="mySwiper"
        mousewheel={true}
        slidesPerView={1}
        speed={400}
        pagination={{
          el: ".portfolio__pagination",
          clickable: true,
        }}
      >
        <SwiperSlide className="home">
          <Home />
        </SwiperSlide>
        <SwiperSlide>
          <About />
        </SwiperSlide>
        <SwiperSlide>
          <Works />
        </SwiperSlide>
        <SwiperSlide className="picture">
          <Picture />
        </SwiperSlide>
        <SwiperSlide className="picture">
          <Picture2 />
        </SwiperSlide>
        <SwiperSlide>
          <Contact />
        </SwiperSlide>

        <SPagination className="portfolio__pagination" />
      </SSwiper>
    </>
  );
};

export default PortfolioSwiper;
