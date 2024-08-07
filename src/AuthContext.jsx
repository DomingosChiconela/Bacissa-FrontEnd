import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); 
  };

  const updateUser = (updatedData) => {
    setUser((prevUser) => {
      const newUser = {
        ...prevUser,
        ...updatedData, // Atualiza os dados do usuário
      };
      localStorage.setItem('user', JSON.stringify(newUser)); // Salva no localStorage
      return newUser; // Retorna o novo estado do usuário
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); 
  };

  return (
    <AuthContext.Provider value={{ user, login, updateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
