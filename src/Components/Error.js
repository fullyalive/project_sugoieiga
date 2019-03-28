import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-top: 30px;
`;
const Text = styled.span`
  color: ${props => props.color};
  font-size: 24px;
  font-weight: 600;
`;

const Error = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

Error.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Error;
