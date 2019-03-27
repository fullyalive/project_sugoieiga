import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "f5e65cc3b06a046a12a6290c3cf8e7a4",
    language: "ja-JP"
  }
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  topRated: () => api.get("movie/top_rated"),
  popular: () => api.get("movie/popular"),
  getDetails: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  similar: id => api.get(`movie/${id}/similar`),
  recommendations: id => api.get(`movie/${id}/recommendations`),
  reviews: id => api.get(`movie/${id}/reviews`),
  search: term =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term) // 특수문자 처리를 위한 인코딩
      }
    })
};

export const tvApi = {
  airingToday: () => api.get("tv/airing_today"),
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  getDetails: id =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  similar: id => api.get(`tv/${id}/similar`),
  recommendations: id => api.get(`tv/${id}/recommendations`),
  reviews: id => api.get(`tv/${id}/reviews`),
  search: term =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term) // 특수문자 처리를 위한 인코딩
      }
    })
};
