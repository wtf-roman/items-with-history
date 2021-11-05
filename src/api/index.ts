import axios, { Axios } from 'axios';

export default (): Axios => {
  return axios.create({
    baseURL: 'http://universities.hipolabs.com/',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
