import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import PortfolioSwiper from "components/portfolioSwiper";

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100vh;
`;

export default function Root() {
  return (
    <Container>
      <PortfolioSwiper></PortfolioSwiper>
      <Outlet />
    </Container>
  );
}
