import axios from 'axios';

export function getEvents() {
  return axios.get(`http://www.mocky.io/v2/59f08692310000b4130e9f71`);
};

