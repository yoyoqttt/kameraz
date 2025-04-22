 
import axios from 'axios';
import { API_URL } from '../constants';

const API = axios.create({ baseURL: API_URL });

const registerUser = async (userData) => {
 return await API.post('/auth/register', userData);
};

const loginUser = async (userData) => {
   return await API.post('/auth/login', userData);
};

const fetchUser = async (token) => {
  return await API.get('/auth/user', {
      headers: {
      'x-auth-token': token,
    },
   });
}

export {registerUser, loginUser, fetchUser };
 