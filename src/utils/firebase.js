// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "tech-blog-412119.firebaseapp.com",
  projectId: "tech-blog-412119",
  storageBucket: "tech-blog-412119.appspot.com",
  messagingSenderId: "418194287074",
  appId: "1:418194287074:web:72adb15ad79d18139ef1bb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);