import React, { createContext, useEffect, useState } from "react";
import { auth } from "./FirebaseApi";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";

export let userContext = createContext();

function AuthContext({ children }) {
  let [user, setUser] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (userInfo) => {
      if (userInfo && userInfo.emailVerified && userInfo.accessToken) {
        sessionStorage.setItem("user", userInfo.accessToken);
        sessionStorage.setItem("userName", userInfo.displayName);
        setUser(userInfo);
      } else {
        sessionStorage.removeItem("user");
        setUser(null);
      }
    });
  }, [user]);

  async function GoogleSignIn(){
    const provider=new GoogleAuthProvider();
    try {
        await signInWithPopup(auth,provider);
        setUser(auth.currentUser);
        sessionStorage.setItem("user",user.accessToken);
        sessionStorage.setItem("userName",user.displayName);
        await sessionStorage.setItem("userPic",user.photoURL);
        console.log(user);
    } catch (error) {
       console.log(user); 
    }
  }
  return <userContext.Provider value={{user,GoogleSignIn}}>{children}</userContext.Provider>;
}

export default AuthContext;
