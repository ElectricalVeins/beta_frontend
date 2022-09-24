import axios from 'axios';
import instance from './instance';

const formAuthorizationHeader = (token) => `Bearer ${token}`;


instance.interceptors.request.use(
    (config)=>{
        config.headers.Authorization = formAuthorizationHeader(localStorage.getItem('auth-access'));
        console.log(config);
        return config;
    },
    (error)=>{
        console.dir(error);
        if (error.status === 401) {
            error.config.headers.Authorization = formAuthorizationHeader(localStorage.getItem('auth-refresh'));
            return axios.request(error.config);
        }
        throw error;
    },
    {},
);

instance.interceptors.response.use(()=>{},()=>{})

export default instance;