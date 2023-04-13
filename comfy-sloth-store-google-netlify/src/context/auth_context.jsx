import React, { createContext, useContext, useEffect, useState, useReducer } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { collection, doc, getDocs, addDoc, setDoc, updateDoc, deleteDoc, query, onSnapshot } from "firebase/firestore";
import { auth, db, provider } from "../config/firebase";
import { IS_LOADING } from "../actions";
import reducer from "../reducers/auth_reducer";

const initialState = {
  isLoading: false,
};
const AuthContext = createContext();
// make sure use
const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [user, setUser] = useState({});

  // on auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log("CURRENT USER OR USER...", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  // create user
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log out
  const logout = () => {
    return signOut(auth);
  };

  // google sign in
  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };
  return (
    <AuthContext.Provider value={{ ...state, user, signup, login, logout, googleSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider, useAuthContext };
