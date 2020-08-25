import axios from "axios";

const KEY = "AIzaSyD2KwikEB7UBhWoFnAnLbCXqlNcH1epTlA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params:{
      part: "snippet",
      maxResults: 5,
      key: KEY
  }
}); 