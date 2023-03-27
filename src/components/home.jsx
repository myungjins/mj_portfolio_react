import React from "react";
import styled from "styled-components";
import PortfolioSwiper from "./portfolioSwiper";

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100vh;
`;

export default function Home() {
  return (
    <Container>
      <PortfolioSwiper />
    </Container>
  );
}
