import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.init';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const user = { name: 'Mama Sadek' }

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

  const authInfo = {
    user,
    createUser,
    signIn,
    googleSignIn
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;