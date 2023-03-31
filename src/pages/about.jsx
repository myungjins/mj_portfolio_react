import React, { useState } from "react";
import styled from "styled-components";
import profile from "assets/images/common/profile.jpg";

const Title = styled.h1`
  padding: 0 0 30px;
  font-size: 40px;
  color: #000;
  font-weight: bold;
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
  @media screen and (max-width: 400px) {
    font-size: 18px;
    padding: 0 0 20px;
  }
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const Profile = styled.div`
  width: 30%;
  @media screen and (max-width: 800px) {
    width: 180px;
  }
  @media screen and (max-width: 400px) {
    width: 130px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const TabWrap = styled.div`
  width: 60%;
  height: 100%;
  @media screen and (max-width: 800px) {
    width: 100%;
    max-width: 600px;
    padding: 0 16px;
  }
  @media screen and (max-width: 400px) {
    width: 86%;
  }
`;

const TabMenu = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

const Tab = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 50%;
  padding: 15px;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
  transition: color 0.5s;
  cursor: pointer;
  box-sizing: border-box;
  &.focused {
    color: #000;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 3px;
      background-color: #000;
    }
  }
  @media screen and (max-width: 800px) {
    padding: 10px;
    margin: 5px 0 0;
    font-size: 13px;
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 25px 0 0;
  @media screen and (max-width: 800px) {
    padding: 15px 0 0;
  }
`;

const Item = styled.div`
  display: flex;
  &:not(:last-of-type) {
    padding: 0 0 14px;
    @media screen and (max-width: 800px) {
      padding: 0 0 6px;
    }
  }
`;

const ItemLeft = styled.div`
  width: 30%;
  font-size: 14px;
  color: #666;
  text-align: left;
  @media screen and (max-width: 800px) {
    font-size: 11px;
  }
`;

const ItemRight = styled(ItemLeft)`
  width: 70%;
`;

export default function About() {
  const [currentTab, clickTab] = useState(0);

  const tabList = [
    { id: 0, name: "PROFILE", state: "profile" },
    { id: 1, name: "SKILLS", state: "skills" },
  ];

  const selectMenuHandler = (index) => {
    clickTab(index);
  };

  return (
    <>
      <Title>ABOUT</Title>
      <Wrap>
        <Profile>
          <Img src={profile} alt="profile" />
        </Profile>
        <TabWrap>
          <TabMenu>
            {tabList.map((el, index) => (
              <Tab
                key={index}
                className={index === currentTab ? "submenu focused" : "submenu"}
                onClick={() => selectMenuHandler(index)}
              >
                {el.name}
              </Tab>
            ))}
          </TabMenu>
          {tabList[currentTab].state === "profile" ? (
            <Content>
              <Item>
                <ItemLeft>이름</ItemLeft>
                <ItemRight>송명진</ItemRight>
              </Item>
              <Item>
                <ItemLeft>생년월일</ItemLeft>
                <ItemRight>1996년 8월 6일</ItemRight>
              </Item>
              <Item>
                <ItemLeft>성별</ItemLeft>
                <ItemRight>여자</ItemRight>
              </Item>
              <Item>
                <ItemLeft>거주지</ItemLeft>
                <ItemRight>서울특별시 관악구 신림동</ItemRight>
              </Item>
              <Item>
                <ItemLeft>교육이수</ItemLeft>
                <ItemRight>
                  2017년 02월 ~ 2017년 06월 그린컴퓨터 아트학원 스마트기기 UXUI
                  디자인 (디지털 앱, 웹디자인) 수료
                </ItemRight>
              </Item>
              <Item>
                <ItemLeft>사회경력</ItemLeft>
                <ItemRight>
                  2017년 07월 ~ 2019년 05월 "위니플" 에서 웹퍼블리셔로 근무
                  <br />
                  2019년 08월 ~ 2019년 12월 "윤커뮤니케이션즈" 에서 웹퍼블리셔로
                  근무
                  <br /> 2020년 10월 ~ 2023년 3월 "보고플레이" 에서 웹퍼블리셔로
                  근무
                </ItemRight>
              </Item>
            </Content>
          ) : (
            <Content>
              <Item>
                <ItemLeft>HTML</ItemLeft>
                <ItemRight>
                  웹 표준에 준수한 마크업 / 유효성에 적합한 구조 설계 / HTML5
                  사용
                </ItemRight>
              </Item>
              <Item>
                <ItemLeft>CSS</ItemLeft>
                <ItemRight>
                  CSS3 사용 / SCSS 사용 / styled-components 사용
                </ItemRight>
              </Item>
              <Item>
                <ItemLeft>JavaScript</ItemLeft>
                <ItemRight>
                  JavaScript 라이브러리 사용 / 오픈소스 활용
                </ItemRight>
              </Item>
              <Item>
                <ItemLeft>React</ItemLeft>
                <ItemRight>React 라이브러리 사용 / 오픈소스 활용</ItemRight>
              </Item>
              <Item>
                <ItemLeft>Cross Browsing</ItemLeft>
                <ItemRight>
                  ie, chrome, firefox, safari, opera 등 브라우저별로 같은 표현
                  가능
                </ItemRight>
              </Item>
              <Item>
                <ItemLeft>웹 접근성</ItemLeft>
                <ItemRight>웹 접근성에 준수한 마크업</ItemRight>
              </Item>
              <Item>
                <ItemLeft>반응형 웹</ItemLeft>
                <ItemRight>디바이스에 맞는 유동적인 설계 가능</ItemRight>
              </Item>
              <Item>
                <ItemLeft>Adobe</ItemLeft>
                <ItemRight>Photoshop, Illustrator 툴 사용 가능</ItemRight>
              </Item>
              <Item>
                <ItemLeft>커뮤니케이션</ItemLeft>
                <ItemRight>각 직군과 협업가능</ItemRight>
              </Item>
            </Content>
          )}
        </TabWrap>
      </Wrap>
    </>
  );
}
