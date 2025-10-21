// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjfsfInx2lF98joyA5b5I9NCvrtChbm94",
  authDomain: "react-firebase-auth-e28ec.firebaseapp.com",
  projectId: "react-firebase-auth-e28ec",
  storageBucket: "react-firebase-auth-e28ec.firebasestorage.app",
  messagingSenderId: "353116047521",
  appId: "1:353116047521:web:20af83c5aef613168108e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
