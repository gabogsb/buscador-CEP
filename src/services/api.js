import axios from 'axios';

//96055410/json

const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

export default api;
