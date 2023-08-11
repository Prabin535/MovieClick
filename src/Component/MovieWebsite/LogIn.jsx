import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Api/Firebase/FirebaseApi";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  let navigate = useNavigate();
  let [password, setPassword] = useState();
  let [email, setEmail] = useState();

  async function logInData(e) {
    e.preventDefault();
    try {
      let userData = await signInWithEmailAndPassword(auth, email, password);
      console.log(userData.user);
      if (userData.user.emailVerified === true) {
        signInWithEmailAndPassword(auth, email, password);
        toast.success(`Logged in as ${email}`);
        navigate("/");
        window.location.reload();
      } else {
        toast.error(`Please verify your email address ${userData.user.email}`);
      }
    } catch (error) {
      console.log(error);
      toast.error("Email Id and password doesn't match");
    }
  }

  return (
    <div className="loginContainer">
      <div className="loginForm">
        <form onSubmit={logInData}>
          <div className="loginWrapper">
            <div>
              <input
                type="text"
                placeholder="Email"
                name=""
                id=""
                className="inputTag"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Password"
                name=""
                id=""
                className="inputTag"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="button">
              <button className="submitBtn">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
