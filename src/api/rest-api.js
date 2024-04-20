import axios from 'axios';
import queryString from 'query-string';

import { notificateError } from '../services/notification';

const formAuthorizationHeader = (token) => `Bearer ${token}`;

export class RestApi {
    #httpClient = null;

    constructor(url = process.env.REACT_APP_BACKEND_URL) {
        this.#httpClient = axios.create({
            baseURL: url,
            timeout: 30000,
        });
        this.#addRequestInterceptors();
    }

    #addRequestInterceptors() {
        this.httpClient.interceptors.request.use(
            (config) => {
                config.headers.Authorization = formAuthorizationHeader(
                    localStorage.getItem('auth-access')
                );
                console.log(config);
                return config;
            },
            (error) => {
                console.dir(error);
                if (error.status === 401) {
                    error.config.headers.Authorization = formAuthorizationHeader(
                        localStorage.getItem('auth-refresh')
                    );
                    return axios.request(error.config);
                }
                notificateError(error);
                throw error;
            },
            {}
        );
    }

    signup(body) {
        return this.#httpClient.post('/auth/signup', body);
    }

    signin(body) {
        return this.#httpClient.post('/auth/signin', body);
    }

    refresh(params) {
        const stringifiedParams = queryString.stringify({
            auth: params.auth,
        });
        return this.#httpClient.get(`/auth/refresh/${stringifiedParams}`);
    }

    activate(params) {
        const stringifiedParams = queryString.stringify({
            token: params.token,
        });
        return this.#httpClient.get(`/auth/activate/${stringifiedParams}`);
    }

    getBulkUsers(params) {
        const stringifiedParams = queryString.stringify(params);
        return this.#httpClient.get(`/users/${stringifiedParams}`);
    }

    getUserById(id) {
        return this.#httpClient.get(`/users/${id}`);
    }

    getCurrentUser(token) {
        return this.#httpClient.get('/users/currentuser', { headers: { Authorization: `Bearer ${token}` } });
    }

    updateUser(id, body) {
        return this.#httpClient.put(`/users/${id}`, body);
    }
}
