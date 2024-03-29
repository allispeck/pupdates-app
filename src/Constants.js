import axios from 'axios';

export const apiAxios = axios.create({
    baseURL: 'http://localhost:8080/',
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
});

export default apiAxios;

