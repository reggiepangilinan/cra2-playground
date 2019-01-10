import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const POSTS = '/posts';

export default api;