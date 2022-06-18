import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/playlistItems'
});

export default api;
