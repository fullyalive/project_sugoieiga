import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

// BigPoster styled-components
const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 3px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

// ThumbPoster styled-components

const Thumb = styled.div`
  background-image: url(${props => props.bgUrl});
  width: 60px;
  height: 90px;
  background-size: cover;
  border-radius: 3px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

// export default withRouter(({ location: { pathname } })

export const BigPoster = ({
  id,
  imageUrl,
  title,
  rating,
  year,
  movieType = false
}) => (
  <Link to={movieType ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : require("../Images/noPosterSmall.png")
          }
        />
        <Rating>
          <span role="img" aria-label="rating">
            ✧
          </span>{" "}
          {rating} / 10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 18 ? `${title.substring(0, 18)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

export const ThumbPoster = ({
  id,
  imageUrl,
  title,
  rating,
  year,
  movieType = false
}) => (
  <Link to={movieType ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImageContainer>
        <Thumb
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : require("../Images/noPosterSmall.png")
          }
        />
        <Rating>
          <span role="img" aria-label="rating">
            ✧
          </span>{" "}
          {rating} / 10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 18 ? `${title.substring(0, 18)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

BigPoster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  movieType: PropTypes.bool
};

ThumbPoster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  movieType: PropTypes.bool
};
