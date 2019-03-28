import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div`
  padding: 0px 10px;
`;

const HomePresenter = ({
  nowPlaying,
  upcoming,
  topRated,
  popular,
  error,
  loading
}) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="現在上映中">
          {nowPlaying.map(movie => movie.title)}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="封切り予定のフィルム">
          {upcoming.map(movie => movie.title)}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="トップレートフィルム">
          {topRated.map(movie => movie.title)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="人気のフィルム">
          {popular.map(movie => movie.title)}
        </Section>
      )}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  topRated: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default HomePresenter;
