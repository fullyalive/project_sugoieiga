import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet"
import loader from "Images/loader.gif";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => (
  <Container>
    <Helmet>
      <title>ローディング | スゴイ映画</title>
    </Helmet>
    <img src={loader} alt={"loading"} style={{ width: 170, height: 130 }} />
  </Container>
);
