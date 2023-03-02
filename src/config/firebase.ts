// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNqJtoBvPHDR3vYOtVn9r2N15__6331nU",
  authDomain: "react-course-be3e9.firebaseapp.com",
  projectId: "react-course-be3e9",
  storageBucket: "react-course-be3e9.appspot.com",
  messagingSenderId: "724197498198",
  appId: "1:724197498198:web:02529bb9f27c0653ddcaf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider = new GoogleAuthProvider();