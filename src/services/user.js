import fetch from 'isomorphic-fetch';
import { API_URL } from '../config/apiConfig';
import checkStatus from '../utils/requests';

class User {
  getToken() {
    return sessionStorage.getItem('jwt');
  }

  async getCurrentUser(token = this.getToken()) {
    const currentUserUrl = `${API_URL}/users/me`;
    const response = await fetch(currentUserUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        jwt: token,
      },
    });

    return await checkStatus(response);
  }
}

export default new User();
