import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(false);


  // Create New User With Email and Password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //Sing In With Email and Password
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  //Sign In With Google
  const googleSignIn = (provider) => {
    return signInWithPopup(auth, provider)
  }

  //Sign In With GitHub
  const githubSignIn = (provider) => {
    return signInWithPopup(auth, provider)
  }

  //Log Out From Registered Account
  const logOut = () => {
    return signOut(auth);
  }

  //useEffect 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
    })
    return () => {
      unsubscribe()
    }
  }, [])


  const authInfo = {
    user,
    createUser,
    signIn,
    googleSignIn,
    githubSignIn,
    logOut
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;