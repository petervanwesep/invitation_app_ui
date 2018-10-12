import axios from 'axios';
var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'secrettoken');

export function get(url) {
  return axios({
    method: 'get',
    url: url,
    headers: { Authorization: "Bearer " + token }
  });
}

export function post(url, params) {
  return axios({
    method: 'post',
    url: url,
    headers: { Authorization: "Bearer " + token }
  });
}
