"use client";
import { auth } from "../firebase/firebase-config";
import { onAuthStateChanged, signOut as authSignOut } from "firebase/auth";

import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const clear = async () => {
    try {
      setCurrentUser(null);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const authStateChanged = async (user) => {
    setIsLoading(true);

    if (!user) {
      clear();
      return;
    }

    setCurrentUser(user.uid);
    setIsLoading(false);
  };

  const signOut = () => {
    authSignOut(auth).then(() => clear());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, isLoading, setIsLoading, signOut }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);
