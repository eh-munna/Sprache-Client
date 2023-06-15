import { createContext, useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import app from '../firebase/firebase.config';
import axios from 'axios';

// auth context for authentication

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [handleInput, setHandleInput] = useState(true);

  // creating user with email and password

  // email password user creation method
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email and password

  const userSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // sign in with google provider

  const googlePopUp = () => {
    setLoading(true);
    return signInWithPopup(auth, new GoogleAuthProvider());
  };

  // user sign out

  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authentication = {
    user,
    createUser,
    googlePopUp,
    userSignIn,
    userLogOut,
    loading,
    handleInput,
    setHandleInput,
  };

  // managing auth state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      if (loggedUser) {
        axios
          .post(`https://sprache-server.vercel.app/jwt`, {
            email: loggedUser.email,
          })
          .then((response) => {
            localStorage.setItem('user-access-token', response.data.token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem('user-access-token');
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
