import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

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
              <Section title="映画検索結果">
                {movieResults.map(movie => (
                  <span key={movie.id}>{movie.title}</span>
                ))}
              </Section>
            )}
            {tvResults && tvResults.length > 0 && (
              <Section title="放送検索結果">
                {tvResults.map(tv => (
                  <span key={tv.id}>{tv.name}</span>
                ))}
              </Section>
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
