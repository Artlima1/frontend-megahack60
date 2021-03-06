import axios from 'axios';

const url = __DEV__ ? 'http://192.168.0.111:3333' : 'http://192.168.0.111:3333';

let api = axios.create({
  baseURL: url,
  timeout: 10000,
});

export default api;
