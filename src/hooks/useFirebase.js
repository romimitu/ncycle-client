import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

import { useState, useEffect } from "react";
import initializeAuthentication from "../Pages/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError("Password Must be at least 6 characters long.");
      return;
    }

    registerNewUser(email, password, name);
    

  };

  const processLogin = (e) => {
    // e.preventDefault();
    return signInWithEmailAndPassword(auth, email, password);
  };

  const registerNewUser = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        verifyEmail();
        setUserName();
        const newUser = { email, displayName: name };
        setUser(newUser);
        //save user to the database
        saveUser(email, name, "POST");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email).then((result) => {});
  };

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);
  const logOut = () => {
    setIsLoading(true);
    localStorage.removeItem("AdminLogIn")
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  //
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://calm-tundra-53009.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  //admin check
  useEffect(() => {
    fetch(`https://calm-tundra-53009.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAdmin(data.admin);
        if(data.admin){
          localStorage.setItem("AdminLogIn", true);
        }
        
      });
  }, [user.email]);

  return {
    user,
    admin,
    isLoading,
    handleResetPassword,
    signInUsingGoogle,
    handleRegistration,
    handlePasswordChange,
    handleEmailChange,
    handleNameChange,
    error,
    processLogin,
    logOut,
    setUser,
    setIsLoading,
    saveUser,
    setError,
  };
};

export default useFirebase;
