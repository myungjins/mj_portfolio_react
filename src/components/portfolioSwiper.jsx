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
  color: #000;
  letter-spacing: -1px;
  transition: all 0.5s ease 0s;
  cursor: pointer;
`;

const Menu = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  cursor: pointer;
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
  top: 10px;
  right: 16px;
  width: ${(props) => (props.width ? props.width : 40)}px;
  min-width: ${(props) => (props.width ? props.width : 40)}px;
  height: ${(props) => (props.height ? props.height : 40)}px;
  min-height: ${(props) => (props.height ? props.height : 40)}px;
  z-index: 100;
  path {
    fill: ${(props) => (props.color ? props.color : "white")};
  }
  cursor: pointer;
`;

const NavWrap = styled.div``;

const NavItem = styled.div`
  font-size: 30px;
  color: rgb(129, 129, 129);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  &:hover {
    color: rgb(241, 241, 241);
  }
  @media screen and (max-width: 620px) {
    font-size: 20px;
  }
  @media screen and (max-width: 400px) {
    font-size: 15px;
  }
`;

const SSwiper = styled(Swiper)`
  position: relative;
  width: 100%;
  height: 100%;
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 18px;
    background-color: #fff;
  }
  .home {
    justify-content: center;
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
        <Logo onClick={() => changeSlide(0)}>Song Myung Jin</Logo>
        <Menu onClick={() => setModalSee(true)}>
          <Img src={menuBlack} alt="menu" />
        </Menu>
        <Nav see={modalSee}>
          <CloseSvg onClick={() => setModalSee(false)} />
          <NavWrap>
            <NavItem onClick={() => changeSlide(0)}>HOME</NavItem>
            <NavItem onClick={() => changeSlide(2)}>PORTFOLIO</NavItem>
            <NavItem onClick={() => changeSlide(4)}>CONTACT</NavItem>
            <NavItem>
              <Link to="mailto:myungjinchu2@gmail.com">
                E-mail : myungjinchu2@gmail.com
              </Link>
            </NavItem>
            <NavItem>
              <Link to="tel:01089866213">Phone : 010-8986-6213</Link>
            </NavItem>
            <NavItem>Kakaotalk : o3omjj</NavItem>
            <NavItem
              onClick={() => {
                window.open(url);
              }}
            >
              Instagram : www.instagram.com/m.jinnnn
            </NavItem>
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
        <SwiperSlide className="works">
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
