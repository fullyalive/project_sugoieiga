import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Error from "Components/Error";

const Container = styled.div`
  padding: 0px 10px;
`;

const TVPresenter = ({ airingToday, topRated, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {airingToday && airingToday.length > 0 && (
        <Section title={"今日の放送"}>
          {airingToday.map(tv => (
            <span key={tv.id}>{tv.name}</span>
          ))}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title={"トップレートフィルム"}>
          {topRated.map(tv => (
            <span key={tv.id}>{tv.name}</span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title={"人気の放送"}>
          {popular.map(tv => (
            <span key={tv.id}>{tv.name}</span>
          ))}
        </Section>
      )}
      {error && <Error color="#1071ff" text={error} />}
    </Container>
  );

TVPresenter.propTypes = {
  airingToday: PropTypes.array,
  topRated: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default TVPresenter;
