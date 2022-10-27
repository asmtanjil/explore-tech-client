import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  // Create New User With Email and Password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //Update Name And photoURL
  const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL
    });
  }

  //Sing In With Email and Password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  //Sign In With Google
  const googleSignIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider)
  }

  //Sign In With GitHub
  const githubSignIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider)
  }

  //Log Out From Registered Account
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  //useEffect 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('user on state changed', currentUser);
      setUser(currentUser)
      setLoading(false)
    });

    return () => {
      unsubscribe();
    }

  }, [])

  //Auth Provider Value
  const authInfo = {
    user,
    loading,
    createUser,
    updateUserProfile,
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