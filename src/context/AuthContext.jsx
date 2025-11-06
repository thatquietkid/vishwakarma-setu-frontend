import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Create the Context
const AuthContext = createContext(null);

// 2. Create the Provider Component
// This component will wrap your entire app
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // 3. Check localStorage on app load
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []); // Empty array means this runs once on mount

  // 4. Login Function
  const login = (token, user) => {
    // Save to state
    setToken(token);
    setUser(user);

    // Save to localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  };

  // 5. Logout Function
  const logout = () => {
    // Clear state
    setToken(null);
    setUser(null);

    // Clear localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  // 6. Value to be passed to consuming components
  const value = {
    user,
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// 7. Create a custom hook to use the context
// This is a shortcut so components don't have to import useContext and AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};