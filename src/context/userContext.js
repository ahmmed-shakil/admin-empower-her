import React, { createContext, useContext, useState, useEffect } from "react";
// Create a context with default value undefined
const UserContext = createContext(undefined);

// Create a provider component
export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(() => {
    // Initialize state from sessionStorage if available
    return sessionStorage.getItem("userId") || null;
  });
  const [userName, setUserName] = useState(() => {
    // Initialize state from sessionStorage if available
    return sessionStorage.getItem("fullName") || null;
  });

  useEffect(() => {
    // Update sessionStorage whenever userId changes
    if (userId) {
      sessionStorage.setItem("userId", userId);
    } else {
      sessionStorage.removeItem("userId");
    }
  }, [userId]);

  const login = (newUserId, newUserName) => {
    console.log("🚀 ~ login ~ newUserId:", newUserId);
    sessionStorage.setItem("userId", newUserId);
    sessionStorage.setItem("fullName", newUserName);
    setUserName(newUserName);
    setUserId(newUserId);
  };

  const logout = () => {
    setUserId(null);
  };

  return (
    <UserContext.Provider value={{ userId, login, logout, userName }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
