import React from "react";
import styled from "styled-components";
import mockup1 from "assets/images/common/mice_mockup.png";
import mockup2 from "assets/images/common/incheon_mockup.png";
import mockup3 from "assets/images/common/cj_mockup.png";
import mockup4 from "assets/images/common/national_museum_mockup.png";
import mockup5 from "assets/images/common/app_mockup.png";
import mockup6 from "assets/images/common/vogo_mockup.png";
import mockup7 from "assets/images/common/vogo_brand_mockup.png";
import arrowIcon from "assets/images/common/ic_arrow_back.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

const Title = styled.h1`
  padding: 5% 0 35px;
  font-size: 40px;
  color: #000;
  font-weight: bold;
  @media screen and (max-width: 720px) {
    padding: 22% 0 15px;
    font-size: 25px;
  }
`;

const WorksSwiper = styled(Swiper)`
  position: relative;
  width: 70%;
  text-align: center;
  padding: 0 0 5%;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0 0 0 0 !important;
    font-size: 18px;
    background-color: #fff;
  }
`;

const SNavigation = styled.div`
  position: absolute;
  top: 42%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background: url(${arrowIcon}) no-repeat center/contain;
  z-index: 100;
  cursor: pointer;
  &.works__btn-prev {
    left: 8px;
  }
  &.works__btn-next {
    right: 8px;
    transform: translateY(-50%) rotate(180deg);
  }
  @media screen and (max-width: 720px) {
    top: 50%;
    &.works__btn-prev {
      left: 0;
    }
    &.works__btn-next {
      right: 0;
    }
  }
`;

const Img = styled.img`
  width: 100%;
  max-height: 250px;
  height: auto;
  object-fit: contain;
`;

const Img2 = styled(Img)`
  max-height: 200px;
  @media screen and (max-width: 720px) {
    max-height: 150px;
  }
`;

const MockupTitle = styled.p`
  display: block;
  width: 100%;
  padding: 15px 0;
  font-size: 20px;
  color: #2b2b2b;
  font-weight: bold;
  text-align: center;
`;

const Btns = styled.div`
  padding: 0 0 15px;
`;

const Btn = styled.div`
  display: inline-block;
  position: relative;
  padding: 4px 12px;
  font-size: 13px;
  color: #fff;
  font-weight: bold;
  vertical-align: bottom;
  background-color: #f46161;
  z-index: 10;
  border-radius: 10px;
  cursor: pointer;
  &:first-of-type {
    margin-left: 3px;
  }
`;

const Txts = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #2b2b2b;
  font-weight: lighter;
  letter-spacing: -0.5px;
  text-align: center;
  @media screen and (max-width: 720px) {
    font-size: 13px;
  }
`;

const ColorTxt = styled(Txts)`
  display: flex;
  align-items: center;
  padding: 0 10px 0 0;
`;

const Color = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  box-sizing: border-box;
  &:not(:last-of-type) {
    margin-right: 5px;
  }
  &.indigo_1 {
    background-color: #344589;
  }
  &.blue {
    background-color: #0184ce;
  }
  &.red {
    background-color: #ef5d58;
  }
  &.indigo_2 {
    background-color: #2d2b6f;
  }
  &.indigo_3 {
    background-color: #111541;
  }
  &.blue_2 {
    background-color: #1471ac;
  }
  &.black {
    background-color: #292929;
  }
  &.white {
    background-color: #fff;
    border: 1px solid #d6d6d6;
  }
  &.brown {
    background-color: #8d652c;
  }
  &.darkbrown {
    background-color: #49403b;
  }
  &.skyblue {
    background-color: #85d0d4;
  }
  &.skin {
    background-color: #ffd9a5;
  }
  &.purple {
    background-color: #753efd;
  }
  &.black_2 {
    background-color: #181818;
  }
  &.purple_2 {
    background-color: #6728ff;
  }
  &.yellow {
    background-color: #fed933;
  }
`;

export default function Works() {
  const miceUrl = "http://korean.miceseoul.com/index";
  const incheonUrl = "https://www.incheon.go.kr/index";
  const vogoUrl = "https://www.vogoplay.com/";
  const vogoBrandUrl = "https://brand.vogoplay.com/html/index.html";
  const appUrl = "https://myungjins.github.io/portfolio/links/app/index.html";
  const museumUrl =
    "https://myungjins.github.io/portfolio/links/museum/index.html";
  const cjOneUrl =
    " https://myungjins.github.io/portfolio/links/cj-one/index.html";

  return (
    <>
      <Title>WORKS</Title>
      <WorksSwiper
        className="worksSwiper"
        slidesPerView={1}
        speed={400}
        loop={true}
        navigation={{
          nextEl: ".works__btn-next",
          prevEl: ".works__btn-prev",
        }}
      >
        <SwiperSlide>
          <Img src={mockup6} alt="mockup6" />
          <MockupTitle>vogoplay</MockupTitle>
          <Btns>
            <Btn
              onClick={() => {
                window.open(vogoUrl);
              }}
            >
              View
            </Btn>
          </Btns>
          <Txts>
            React 기반으로 반응형, webview 작업을 하였습니다.
            <br />
            vogoplay.com의 전체적인 퍼블리싱 100% 진행 했습니다.
            <br />
            <br />
            사용 기술 : React, styled-components, jsx, tsx 등
          </Txts>
          <Txts>
            <ColorTxt>사용 색상 :</ColorTxt>
            <Color className="purple" />
            <Color className="black_2" />
          </Txts>
        </SwiperSlide>
        <SwiperSlide>
          <Img src={mockup7} alt="mockup7" />
          <MockupTitle>brand.vogoplay</MockupTitle>
          <Btns>
            <Btn
              onClick={() => {
                window.open(vogoBrandUrl);
              }}
            >
              View
            </Btn>
          </Btns>
          <Txts>
            웹 표준을 준수하고 반응형 작업을 한 홈페이지며,
            <br />
            전체 페이지 80% 작업 하였습니다.
            <br />
            <br />
            사용 기술 : html, css, javascript 등
          </Txts>
          <Txts>
            <ColorTxt>사용 색상 :</ColorTxt>
            <Color className="purple_2" />
            <Color className="yellow" />
            <Color className="white" />
          </Txts>
        </SwiperSlide>
        <SwiperSlide>
          <Img src={mockup1} alt="mockup1" />
          <MockupTitle>Seoul Convention Bureau</MockupTitle>
          <Btns>
            <Btn
              onClick={() => {
                window.open(miceUrl);
              }}
            >
              View
            </Btn>
          </Btns>
          <Txts>
            웹 표준을 준수하고 다국어 버전과 반응형 작업을 한 홈페이지며,
            <br />
            메인과 서브페이지 100% 작업을 진행하였습니다.
            <br />
            <br />
            사용 기술 : html, css, javascript, 슬라이드배너, 모바일 최적화 등
          </Txts>
          <Txts>
            <ColorTxt>사용 색상 :</ColorTxt>
            <Color className="indigo_1" />
            <Color className="blue" />
            <Color className="red" />
          </Txts>
        </SwiperSlide>
        <SwiperSlide>
          <Img src={mockup2} alt="mockup2" />
          <MockupTitle>인천광역시</MockupTitle>
          <Btns>
            <Btn
              onClick={() => {
                window.open(incheonUrl);
              }}
            >
              View
            </Btn>
          </Btns>
          <Txts>
            지금도 사용되고 있으며 인천광역시를 대표하는 홈페이지며 반응형 작업
            등
            <br />
            서브페이지 부분을 도와드렸습니다.
            <br />
            <br />
            사용 기술 : html, css, 반응형, javascript, 모바일 최적화 등
          </Txts>
          <Txts>
            <ColorTxt>사용 색상 :</ColorTxt>
            <Color className="indigo_2" />
            <Color className="indigo_3" />
            <Color className="blue_2" />
          </Txts>
        </SwiperSlide>
        <SwiperSlide>
          <Img src={mockup3} alt="mockup3" />
          <MockupTitle>CJ ONE</MockupTitle>
          <Btns>
            <Btn
              onClick={() => {
                window.open(cjOneUrl);
              }}
            >
              View
            </Btn>
          </Btns>
          <Txts>
            Meadia Query를 사용하여 디바이스별 반응형이 되도록 제작한 홈페이지
            입니다.
            <br />
            <br />
            사용 기술 : html, css, 반응형 등
          </Txts>
          <Txts>
            <ColorTxt>사용 색상 :</ColorTxt>
            <Color className="black" />
            <Color className="white" />
          </Txts>
        </SwiperSlide>
        <SwiperSlide>
          <Img2 src={mockup4} alt="mockup4" />
          <MockupTitle>국립박물관</MockupTitle>
          <Btns>
            <Btn
              onClick={() => {
                window.open(museumUrl);
              }}
            >
              View
            </Btn>
          </Btns>
          <Txts>
            웹 표준을 준수하여 W3C Validation에 통과하였으며,
            <br />
            브라우저별 크로스 브라우징과 internet explore 버전별 호환이
            가능하도록 작업하였습니다.
            <br />
            <br />
            사용 기술 : html, css 등
          </Txts>
          <Txts>
            <ColorTxt>사용 색상 :</ColorTxt>
            <Color className="brown" />
            <Color className="darkbrown" />
          </Txts>
        </SwiperSlide>
        <SwiperSlide>
          <Img2 src={mockup5} alt="mockup5" />
          <MockupTitle>인테리어 앱</MockupTitle>
          <Btns>
            <Btn
              onClick={() => {
                window.open(appUrl);
              }}
            >
              View
            </Btn>
          </Btns>
          <Txts>
            다른앱에 비해 이 앱은 창문과 문에 대해서만 정보가 수록되어 있으며
            <br />
            사용자 끼리 소통도 하며 정보 공유도 하고 한눈에 쉽게 물건들을 볼 수
            있고
            <br />
            쇼핑몰 연동까지 되어 있는 아주 편리한 앱 입니다.
            <br />
            <br />
            사용 기술 : 반응형, 직접 기획 및 디자인 퍼블 등
          </Txts>
          <Txts>
            <ColorTxt>사용 색상 :</ColorTxt>
            <Color className="skyblue" />
            <Color className="skin" />
            <Color className="white" />
          </Txts>
        </SwiperSlide>

        <SNavigation className="works__btn-next" />
        <SNavigation className="works__btn-prev" />
      </WorksSwiper>
    </>
  );
}
