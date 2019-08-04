import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-18-220-189-101.us-east-2.compute.amazonaws.com',
});

export default api;
