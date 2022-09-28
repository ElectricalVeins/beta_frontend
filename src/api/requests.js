import queryString from 'query-string';
import instance from './interceptors';

export default class API {
  http = instance;
  /* AUTH */
  signup(body) {
    return this.http.post('/auth/signup', body);
  }

  signin(body) {
    return this.http.post('/auth/signin', body);
  }

  refresh(params) {
    const stringifiedParams = queryString.stringify({
      auth: params.auth,
    });
    return this.http.get(`/auth/refresh/${stringifiedParams}`);
  }

  activate(params) {
    const stringifiedParams = queryString.stringify({
      token: params.token,
    });
    return this.http.get(`/auth/activate/${stringifiedParams}`);
  }
  /* USER */
  getBulkUsers(params) {
    const stringifiedParams = queryString.stringify(params);
    return this.http.get(`/users/${stringifiedParams}`);
  }

  getUserById(id) {
    return this.http.get(`/users/${id}`);
  }

  getCurrentUser() {
    return this.http.get('/users/currentuser');
  }

  updateUser(id, body) {
    return this.http.put(`/users/${id}`, body);
  }
}
