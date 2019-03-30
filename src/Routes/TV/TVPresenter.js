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

const TVPresenter = ({ airingToday, topRated, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Helmet>
        <title>放送リスト | スゴイ映画</title>
      </Helmet>
      {airingToday && airingToday.length > 0 && (
        <MainSection title={"今日の放送"}>
          {airingToday.map(tv => (
            <BigPoster
              key={tv.id}
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.original_name}
              rating={tv.vote_average}
              year={tv.first_air_date.substring(0, 4)}
            />
          ))}
        </MainSection>
      )}
      {topRated && topRated.length > 0 && (
        <MainSection title={"トップレートフィルム"}>
          {topRated.map(tv => (
            <BigPoster
              key={tv.id}
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.original_name}
              rating={tv.vote_average}
              year={tv.first_air_date.substring(0, 4)}
            />
          ))}
        </MainSection>
      )}
      {popular && popular.length > 0 && (
        <MainSection title={"人気の放送"}>
          {popular.map(tv => (
            <BigPoster
              key={tv.id}
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.original_name}
              rating={tv.vote_average}
              year={tv.first_air_date.substring(0, 4)}
            />
          ))}
        </MainSection>
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
