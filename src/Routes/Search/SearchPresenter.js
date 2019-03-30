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
const Notification = styled.div``;
const Div = styled.div``;
const Form = styled.form`
  width: 100%;
  margin-bottom: 40px;
`;
const Input = styled.input`
  all: unset;
  width: 100%;
  font-size: 24px;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  error,
  loading,
  handleSubmit,
  updateTerm
}) => (
  <Container>
    <Helmet>
      <title>検索 | スゴイ映画</title>
    </Helmet>
    <Notification>
      <Div>일본어 또는 영어로 검색할 수 있습니다.</Div>
      <Div>日本語または英語で検索することができます。</Div>
    </Notification>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="映画や放送を検索してください"
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <MainSection title="映画検索結果">
            {movieResults.map(movie => (
              <BigPoster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </MainSection>
        )}
        {tvResults && tvResults.length > 0 && (
          <MainSection title="放送検索結果">
            {tvResults.map(tv => (
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
        {tvResults &&
          movieResults &&
          tvResults.length === 0 &&
          movieResults.length === 0 && (
            <Error text="検索結果なし" color="#95a5a6" />
          )}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;
