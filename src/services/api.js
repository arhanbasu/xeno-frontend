//Api.js


import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000', // Backend URL
});

// Add Authorization Header for requests (JWT)
API.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = token;            //---> old
        //config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export default API;

