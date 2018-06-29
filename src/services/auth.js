import fetch from 'isomorphic-fetch';
import { API_URL } from '../config/apiConfig';
import checkStatus from '../utils/requests';

class Auth {
  async login(email, password) {
    const url = `${API_URL}/login`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    return await checkStatus(response);
  }
}

export default new Auth();
