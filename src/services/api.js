import axios from 'axios';

const api = axios.create({
  baseURL: 'http://18.220.189.101/',
});

export default api;
