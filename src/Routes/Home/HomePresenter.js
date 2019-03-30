import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import { MainSection } from "Components/Section";
import { BigPoster } from "Components/Poster";
import Loader from "Components/Loader";
import Error from "Components/Error";

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
      <Helmet>
        <title>フィルムリスト | スゴイ映画</title>
      </Helmet>
      {nowPlaying && nowPlaying.length > 0 && (
        <MainSection title="現在上映中">
          {nowPlaying.map(movie => (
            <BigPoster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date.substring(0, 4)}
              movieType={true}
            />
          ))}
        </MainSection>
      )}
      {upcoming && upcoming.length > 0 && (
        <MainSection title="封切り予定のフィルム">
          {upcoming.map(movie => (
            <BigPoster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date.substring(0, 4)}
              movieType={true}
            />
          ))}
        </MainSection>
      )}
      {topRated && topRated.length > 0 && (
        <MainSection title="トップレートフィルム">
          {topRated.map(movie => (
            <BigPoster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date.substring(0, 4)}
              movieType={true}
            />
          ))}
        </MainSection>
      )}
      {popular && popular.length > 0 && (
        <MainSection title="人気のフィルム">
          {popular.map(movie => (
            <BigPoster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date.substring(0, 4)}
              movieType={true}
            />
          ))}
        </MainSection>
      )}
      {error && <Error color="#1071ff" text={error} />}
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
