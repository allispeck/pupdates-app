import axios from 'axios';

const apiAxios = axios.create({
    baseURL: 'http://localhost:8080/',
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
});

export const MOBILE_SCREEN_SIZE = 480;

export default apiAxios;

