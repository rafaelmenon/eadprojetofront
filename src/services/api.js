import axios from 'axios';

const api = axios.create({
  baseURL: 'http://phalconead.tk/',
});

export default api;