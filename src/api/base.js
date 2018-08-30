import axios from 'axios';

const HOST_URL = "";


// configure an axios instance
const instance = axios.create({
  baseURL: HOST_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance;
