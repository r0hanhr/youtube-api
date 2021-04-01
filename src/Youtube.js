import axios from "axios";
const KEY = "AIzaSyDcA47gHmZi0gbnanAuZFGNsfdP7BuCGr0";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});
