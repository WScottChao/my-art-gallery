import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    username: '',
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (token && username) {
      setAuthState({
        isAuthenticated: true,
        username: username,
      });
    }
  }, []);

  const signin = (username) => {
    setAuthState({
      isAuthenticated: true,
      username: username,
    });
    localStorage.setItem('username', username); // Save username in localStorage
  };

  const signout = () => {
    setAuthState({
      isAuthenticated: false,
      username: '',
    });
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  };

  return (
    <AuthContext.Provider value={{ authState, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
