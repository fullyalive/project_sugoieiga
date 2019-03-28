// HomeContainer는 state를 가진 모든 리액트 컴포넌트가 된다.
import React from "react";
import HomePresenter from "./HomePresenter";
import { movieApi } from "api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    topRated: null,
    popular: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying }
      } = await movieApi.nowPlaying();
      const {
        data: { results: upcoming }
      } = await movieApi.upcoming();
      const {
        data: { results: topRated }
      } = await movieApi.topRated();
      const {
        data: { results: popular }
      } = await movieApi.popular();
      this.setState({
        nowPlaying,
        upcoming,
        topRated,
        popular
      });
    } catch {
      this.setState({
        error: "映画情報の読み込みに失敗しました 😢"
      });
    } finally {
      this.setState({
        loading: false // data를 보여주든 error를 보여주든 일단 로딩 상태를 걷어낸다.
      });
    }
  }

  render() {
    const {
      nowPlaying,
      upcoming,
      topRated,
      popular,
      error,
      loading
    } = this.state;
    // console.log(this.state);
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
