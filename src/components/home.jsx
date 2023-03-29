import React from "react";
import styled from "styled-components";
import PortfolioSwiper from "./portfolioSwiper";
import FloatingButton from "./floatingButton";

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100vh;
`;

const Home = () => {
  return (
    <Container>
      <PortfolioSwiper />
      <FloatingButton />
    </Container>
  );
};
export default Home;
