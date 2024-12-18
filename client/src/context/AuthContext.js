// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    username: '',
    token: null
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (token && username) {
      setAuthState({
        isAuthenticated: true,
        username: username,
        token: token
      });
    }
  }, []);

  const signin = (username, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    setAuthState({
      isAuthenticated: true,
      username: username,
      token: token
    });
  };

  const signout = async () => {
    try {
      // 调用登出 API
      await axios.get('http://localhost:8083/api/lowCode/sys/logout', {
        headers: {
          'satoken': authState.token
        }
      });

      // 清除本地存储
      localStorage.removeItem('token');
      localStorage.removeItem('username');

      // 重置状态
      setAuthState({
        isAuthenticated: false,
        username: '',
        token: null
      });

      return true;
    } catch (error) {
      console.error('Logout error:', error);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ authState, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};