import queryString from 'query-string';
import instance from './interceptors';

export default class API {
  static http = instance;
  /* AUTH */
  static signup(body) {
    return this.http.post('/auth/signup', body);
  }

  static signin(body) {
    return this.http.post('/auth/signin', body);
  }

  static refresh(params) {
    const stringifiedParams = queryString.stringify({
      auth: params.auth,
    });
    return this.http.get(`/auth/refresh/${stringifiedParams}`);
  }

  static activate(params) {
    const stringifiedParams = queryString.stringify({
      token: params.token,
    });
    return this.http.get(`/auth/activate/${stringifiedParams}`);
  }
  /* USER */
  static getBulkUsers(params) {
    const stringifiedParams = queryString.stringify(params);
    return this.http.get(`/users/${stringifiedParams}`);
  }

  static getUserById(id) {
    return this.http.get(`/users/${id}`);
  }

  static getCurrentUser(token) {
    return this.http.get('/users/currentuser', {headers: {Authorization: `Bearer ${token}`}});
  }

  static updateUser(id, body) {
    return this.http.put(`/users/${id}`, body);
  }
}
