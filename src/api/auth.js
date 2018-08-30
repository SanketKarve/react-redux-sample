import axios from './base';

export function login(username, password) {
  return axios.request({
    url: '',
    method: 'POST',
    data: {
      'username': username,
      'password': password
    }
  })
};
