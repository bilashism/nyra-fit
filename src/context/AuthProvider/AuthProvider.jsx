import React from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  updateProfile,
  signInWithPopup
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState();
  const [authLoading, setAuthLoading] = useState(true);

  const createUser = (email, password) => {
    setAuthLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogin = (email, password) => {
    setAuthLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userLogOut = () => {
    localStorage.removeItem("nyraFitToken");
    return signOut(auth);
  };

  const updateUserProfile = profile => {
    setAuthLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  const providerLogin = provider => {
    setAuthLoading(true);
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const cleanup = onAuthStateChanged(auth, curUser => {
      setUser(prev => (prev = { ...user, ...curUser }));
      setAuthLoading(false);
    });
    return () => cleanup();
  }, []);

  const authInfo = {
    authLoading,
    setAuthLoading,
    user,
    createUser,
    userLogin,
    userLogOut,
    updateUserProfile,
    providerLogin
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
