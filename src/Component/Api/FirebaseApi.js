// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {getAuth} from "firebase/auth"
// import {getStorage} from "firebase/storage"
// import {getDatabase} from "firebase/database"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDEHrniFIuM34hBwFsb-mvt3i7Gy0t8W_g",
//   authDomain: "shopify-42644.firebaseapp.com",
//   projectId: "shopify-42644",
//   storageBucket: "shopify-42644.appspot.com",
//   messagingSenderId: "456169837851",
//   appId: "1:456169837851:web:7492602360a1cc2911efbe",
//   measurementId: "G-2HEH1RXRCT"
// };

// // Initialize Firebase
// const firebase = initializeApp(firebaseConfig);
// export default firebase;
// export let auth=getAuth(firebase);
// export let storage=getStorage(firebase);
// export let database=getDatabase(firebase);
// const analytics = getAnalytics(firebase);



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN13W7aimcvp-XacX6nnZHVwWQLMfknRA",
  authDomain: "movieclick-2d8e6.firebaseapp.com",
  projectId: "movieclick-2d8e6",
  storageBucket: "movieclick-2d8e6.appspot.com",
  messagingSenderId: "965268890568",
  appId: "1:965268890568:web:72fc60b355c528c7db56fd",
  measurementId: "G-864H68EV5W"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
export let auth=getAuth(firebase);
export let storage=getStorage(firebase);
export let database=getDatabase(firebase);
const analytics = getAnalytics(firebase);