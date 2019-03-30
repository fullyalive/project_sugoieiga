import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    console.log(props);
    this.state = {
      details: null,
      similar: null,
      recommendations: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    const { isMovie } = this.state;
    let details,
      similar,
      recommendations = null;
    try {
      ({ data: details } = isMovie
        ? await movieApi.getDetails(id)
        : await tvApi.getDetails(id));
      ({
        data: { results: similar }
      } = isMovie ? await movieApi.similar(id) : await tvApi.similar(id));
      ({
        data: { results: recommendations }
      } = isMovie
        ? await movieApi.recommendations(id)
        : await tvApi.recommendations(id));
    } catch {
      this.setState({ error: "情報の読み込みに失敗しました 😢" });
    } finally {
      this.setState({
        loading: false,
        details,
        similar,
        recommendations
      });
    }
  }

  render() {
    const { details, similar, recommendations, error, loading } = this.state;
    console.log(similar);
    console.log(recommendations);
    return (
      <DetailPresenter
        details={details}
        similar={similar}
        recommendations={recommendations}
        error={error}
        loading={loading}
      />
    );
  }
}
