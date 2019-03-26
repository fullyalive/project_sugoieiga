// HomeContainer는 state를 가진 모든 리액트 컴포넌트가 된다.
import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    topRated: null,
    popular: null,
    error: null,
    loading: true
  };

  render() {
    const {
      nowPlaying,
      upcoming,
      topRated,
      popular,
      error,
      loading
    } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        topRated={topRated}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
