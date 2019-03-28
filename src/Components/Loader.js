import React from "react";
import styled from "styled-components";
import loader from "Images/loader.gif";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export default () => (
  <Container>
    <img src={loader} alt={"loading"} style={{ width: 170, height: 140 }} />
  </Container>
);
