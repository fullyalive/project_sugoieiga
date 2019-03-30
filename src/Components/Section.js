import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// MainSection styled-components

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 30px;
  }
`;
const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 15px;
  justify-content: space-evenly;
  margin-top: 10px;
`;

// SubSection styled-components

const SubContainer = styled.div`
  margin-top: 30px;
`;

const SubGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 60px);
  grid-gap: 10px;
  justify-content: space-evenly;
  margin-top: 10px;
`;

export const MainSection = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);
// children은 예약된 react prop이다
// div 내부에 원하는 children을 넣기 위함.
// children은 다른 Presenter에서 불러 사용할 때, Section태그 사이 값인 Grid로 들어간다.

export const SubSection = ({ title, children }) => (
  <SubContainer>
    <Title>{title}</Title>
    <SubGrid>{children}</SubGrid>
  </SubContainer>
);

MainSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

SubSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
