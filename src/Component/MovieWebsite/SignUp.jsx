import React from 'react'
import { useState } from 'react'
import {createUserWithEmailAndPassword,sendEmailVerification, updateProfile} from "firebase/auth"
import {toast} from "react-toastify"
import { auth } from '../Api/Firebase/FirebaseApi'
import {useNavigate} from "react-router-dom"


const SignUp = () => {
  let navigate=useNavigate();
  let [name,setName]=useState();
  let [email,setEmail]=useState();
  let [mobile,setMobile]=useState();
  let [password,setPassword]=useState();
  let [confirmPassword,setConfirmPassword]=useState();
  // console.log(name,email,mobile,password,confirmPassword);
  async function signUpData(e){
    e.preventDefault();
    try {
      if(password!==confirmPassword){
        toast.error("Password and Confirm Password Should Match")
      }
      else{
        let data= await createUserWithEmailAndPassword(auth,email,password);
        toast.success("Signup Successfully");
        toast.warning(`Please verify your email address link sended to ${email}`)
        let user=data.user;
        sendEmailVerification(user);
        updateProfile(user,{displayName:name})
        navigate("/LogIn")
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='signupForm'>
        <form onSubmit={signUpData} id="formSignup" style={{backgroundColor:"yellow" }}>
            <div>
              <input type="text" placeholder='UserName' name="" id="" className='inputTag' onChange={(e)=>{setName(e.target.value)}} autoComplete='true'/>
              </div>
            <div>
              <input type="text" placeholder='Email' name="" id="" className='inputTag' onChange={(e)=>{setEmail(e.target.value)}} autoComplete='true'/>
              </div>
            <div>
              <input type="text" placeholder='Phone Number' name="" id="" className='inputTag' onChange={(e)=>{setMobile(e.target.value)}} autoComplete='true'/>
              </div>
            <div>
              <input type="text" placeholder='New Password' name="" id=""  className='inputTag' onChange={(e)=>{setPassword(e.target.value)}} autoComplete='true'/>
              </div>
            <div>
              <input type="text" placeholder='Confirm Password' name="" id="" className='inputTag' onChange={(e)=>{setConfirmPassword(e.target.value)}} autoComplete='true'/>
              </div>
            <div className='button'>
              <button className='submitBtn'>Submit</button>
              </div>
             
        </form>
    </div>
  )
}

export default SignUp