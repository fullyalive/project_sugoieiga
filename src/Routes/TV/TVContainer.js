import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "api";

export default class extends React.Component {
  state = {
    airingToday: null,
    topRated: null,
    popular: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {
        data: { results: airingToday }
      } = await tvApi.airingToday();
      const {
        data: { results: topRated }
      } = await tvApi.topRated();
      const {
        data: { results: popular }
      } = await tvApi.popular();
      this.setState({ airingToday, topRated, popular });
    } catch {
      this.setState({
        error: "放送情報の読み込みに失敗しました　😢"
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { airingToday, topRated, popular, error, loading } = this.state;
    return (
      <TVPresenter
        airingToday={airingToday}
        topRated={topRated}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
