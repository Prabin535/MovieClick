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
import {loginSuccess} from '../../../Redux/Action';
import { useDispatch } from "react-redux";

export let userContext = createContext();

function AuthContext({ children }) {
  const dispatch=useDispatch();
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
        console.log(auth,"GoogleSignIn")
        setUser(auth?.currentUser);
        sessionStorage.setItem("user",user?.accessToken);
        sessionStorage.setItem("userName",auth?.currentUser?.displayName);
        await sessionStorage.setItem("userPic",user?.photoURL);
        // console.log(user);
        dispatch(loginSuccess(auth?.currentUser?.displayName));
    } catch (error) {
       console.log(error); 
    }
  }
  return <userContext.Provider value={{user,GoogleSignIn}}>{children}</userContext.Provider>;
}

export default AuthContext;
