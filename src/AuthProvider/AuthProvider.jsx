import { createContext, useEffect, useState } from "react";
import { auth } from "./../Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const name = "Fashions";
  const [carts, setCarts] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true)
    return signOut(auth);
  };

  const emailVerification = () =>{
    return sendEmailVerification(auth.currentUser)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(true)
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const allInfo = {
    name,
    user,
    carts,
    setCarts,
    createUser,
    signInUser,
    signOutUser,
    loading,
    emailVerification
  };

  return (
    <AuthContext.Provider value={allInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
