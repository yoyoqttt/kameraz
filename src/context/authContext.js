 
import React, { createContext, useState, useEffect } from 'react';
import {fetchUser} from '../api/auth'

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
const [token, setToken] = useState(localStorage.getItem('token') || null);
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const loadUser = async () => {
      try {
        if (token) {
            const response = await fetchUser(token)
            setUser(response.data);
        }
    } catch (err) {
          console.error(err);
          localStorage.removeItem('token')
          setToken(null)
      } finally {
           setLoading(false)
        }
      };
    loadUser();
   },[token]);

const login = (newToken) => {
  setToken(newToken);
  localStorage.setItem('token', newToken);
};

const logout = () => {
  setToken(null);
  localStorage.removeItem('token');
  setUser(null);
};

  return (
        <authContext.Provider value={{ token, login, logout, user, loading }}>
            {!loading && children}
        </authContext.Provider>
   );
};
 