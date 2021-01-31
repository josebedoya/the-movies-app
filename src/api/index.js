import axios from 'axios';

const MockyAPI = axios.create({
  baseURL: 'http://www.mocky.io/v2',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'X-Frame-Options': 'DENY',
  }
});

export const fetchTop5Movies = async () => {
  try {
    const response = await MockyAPI.get('/5dc3c053300000540034757b');
    return response.data.movies;
  } catch (err) {
    return err;
  }
};