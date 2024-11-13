import { createContext, useEffect, useState } from "react";
import { auth } from "./../Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const name = "Fashions";
  const [carts, setCarts] = useState([]);
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
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
    signOutUser
  };

  return (
    <AuthContext.Provider value={allInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
