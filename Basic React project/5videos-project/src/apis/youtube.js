import axios from "axios";

const KEY = "should add a key here, to use the project from youtube api"

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params:{
      part: "snippet",
      maxResults: 5,
      key: KEY
  }
}); 