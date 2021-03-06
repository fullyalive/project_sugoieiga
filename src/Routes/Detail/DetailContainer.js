import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      details: null,
      similar: null,
      recommendations: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }

  showInformation = async () => {
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
      this.setState({
        error: "情報の読み込みに失敗しました 😢"
      });
    } finally {
      this.setState({
        details,
        similar,
        recommendations,
        loading: false
      });
    }
  };


  async componentDidUpdate() {
    // if (prevProps.match.params.id !== this.props.match.params.id) {
    //   this.setState({ loading: true });
    // }
    this.showInformation();
  }

  async componentDidMount() {
    this.showInformation();
  }


  render() {
    const { details, similar, recommendations, error, loading } = this.state;
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
