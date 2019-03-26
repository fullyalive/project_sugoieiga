import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "f5e65cc3b06a046a12a6290c3cf8e7a4",
    language: "ja-JP"
  }
});

api.get("tv/popular") // /tv/popular라고 쓰면 안된다. 여기는 상대경로를 사용한다.

export default api;