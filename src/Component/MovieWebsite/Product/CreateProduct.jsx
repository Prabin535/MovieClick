import React,{useState} from 'react';
import { database } from '../../Api/Firebase/FirebaseApi';
import {set,ref} from "firebase/database";
import {toast} from "react-toastify"

export default function CreateProduct() {
    let [productname,setProductName]=useState();
    let [productimage,setProductImage]=useState();
    let [discount,setDiscount]=useState();

    async function uploadProduct(e){
        e.preventDefault();
        console.log(productname,productimage,discount);
        try {
            await set(ref(database,'products/'+ Date.now()),{
                productname,productimage,discount
            })
            toast.success("New Product Added");
            document.getElementsByClassName('inputTag').target.value="";
        } catch (error) {
            toast.error("Check Your Code");
        }
    }

  return (
    <div className='signupForm'>
        <form onSubmit={uploadProduct}>
            <div><input type="text" placeholder='Product Name' name="" id="" className='inputTag' onChange={(e)=>{setProductName(e.target.value)}} autoComplete='true'/></div>
            <div><input type="text" placeholder='Product Image' name="" id="" className='inputTag' onChange={(e)=>{setProductImage(e.target.value)}} autoComplete='true'/></div>
            <div><input type="text" placeholder='Discount' name="" id="" className='inputTag' onChange={(e)=>{setDiscount(e.target.value)}} autoComplete='true'/></div>
            <div className='button'><button className='submitBtn'>Submit</button></div>
             
        </form>
    </div>
  )
}
