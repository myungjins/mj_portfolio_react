import React from "react";
import styled from "styled-components";
import pictureBg1 from "assets/images/common/picture_bg_2.png";
import picture1 from "assets/images/common/picture_2.png";

const Contents = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const WrapLeft = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  background-color: #d2e6fb;
  animation: scale2 2s infinite alternate;
`;

const WrapRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
`;

const Img1 = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 63%;
  height: auto;
  object-fit: contain;
`;

const Img2 = styled(Img1)`
  width: 24%;
  z-index: 1;
`;

const Txt = styled.p`
  font-size: 30px;
  color: #000;
  font-weight: 900;
  @media screen and (max-width: 720px) {
    font-size: 20px;
  }
`;

export default function Picture2() {
  return (
    <>
      <Contents>
        <WrapLeft>
          <Img1 src={pictureBg1} alt="" />
          <Img2 src={picture1} alt="" />
        </WrapLeft>
        <WrapRight>
          <Txt>반응형</Txt>
          <Txt>크로스브라우징</Txt>
          <Txt>웹표준</Txt>
          <Txt>WebView</Txt>
          <Txt>UI&UX</Txt>
        </WrapRight>
      </Contents>
    </>
  );
}
