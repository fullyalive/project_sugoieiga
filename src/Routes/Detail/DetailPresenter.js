import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import { SubSection } from "Components/Section";
import { ThumbPoster } from "Components/Poster";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  border-radius: 5px;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const DetailPresenter = ({
  details,
  similar,
  recommendations,
  loading,
  error
}) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Helmet>
        <title>
          {details.original_title
            ? details.original_title
            : details.original_name}{" "}
          | スゴイ映画
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            details.poster_path
              ? `https://image.tmdb.org/t/p/original${details.poster_path}`
              : require("../../Images/noPosterSmall.png")
          }
        />
        <Data>
          <Title>
            {details.original_title
              ? details.original_title
              : details.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {details.release_date
                ? details.release_date.substring(0, 4)
                : details.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>
              {details.runtime ? details.runtime : details.episode_run_time[0]}{" "}
              min
            </Item>
            <Divider>•</Divider>
            <Item>
              {details.genres &&
                details.genres.map((genre, index) =>
                  index === details.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
          </ItemContainer>
          <Overview>{details.overview}</Overview>
        </Data>
      </Content>
      {similar && similar.length > 0 && (
        <SubSection title="似たような映画">
          {similar.slice(0, 10).map(item => (
            <ThumbPoster
              key={item.id}
              id={item.id}
              imageUrl={item.poster_path}
              title={
                item.original_title ? item.original_title : item.original_name
              }
              rating={item.vote_average}
              year={
                item.release_date
                  ? item.release_date.substring(0, 4)
                  : item.first_air_date.substring(0, 4)
              }
              movieType={item.release_date ? true : false}
            />
          ))}
        </SubSection>
      )}
      {recommendations && recommendations.length > 0 && (
        <SubSection title="推薦作品">
          {recommendations.slice(0, 10).map(item => (
            <ThumbPoster
              key={item.id}
              id={item.id}
              imageUrl={item.poster_path}
              title={
                item.original_title ? item.original_title : item.original_name
              }
              rating={item.vote_average}
              year={
                item.release_date
                  ? item.release_date.substring(0, 4)
                  : item.first_air_date.substring(0, 4)
              }
              movieType={item.release_date ? true : false}
            />
          ))}
        </SubSection>
      )}
    </Container>
  );

DetailPresenter.propTypes = {
  details: PropTypes.object,
  similar: PropTypes.array,
  recommendations: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DetailPresenter;
