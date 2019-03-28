import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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
  margin-top: 10px;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);
// children은 예약된 react prop이다
// div 내부에 원하는 children을 넣기 위함.
// children은 다른 Presenter에서 불러 사용할 때, Section태그 사이 값인 Grid로 들어간다.

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Section;
