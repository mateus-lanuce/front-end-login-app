import axios from 'axios';
import { getUserLocalStorage } from '../context/AuthProvider/utils';

export const Api = axios.create({
    baseURL: 'https://navedex-api.herokuapp.com/v1/'
})

Api.interceptors.request.use(
    (config) => {
        const user = getUserLocalStorage();

        config.headers.Authorization = user?.token;

        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)