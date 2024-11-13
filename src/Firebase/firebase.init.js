// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAzjvjRxsDHt3V8YHcH7LPyJIr9TIePL0",
  authDomain: "fashion-shop-dd03d.firebaseapp.com",
  projectId: "fashion-shop-dd03d",
  storageBucket: "fashion-shop-dd03d.firebasestorage.app",
  messagingSenderId: "722852858622",
  appId: "1:722852858622:web:5faa4662624363cf4ff3af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)