// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrlRlTv4RSmRHuZ27gV6V6tRzYwTw2D6k",
  authDomain: "email-auth-5028a.firebaseapp.com",
  projectId: "email-auth-5028a",
  storageBucket: "email-auth-5028a.firebasestorage.app",
  messagingSenderId: "107702248007",
  appId: "1:107702248007:web:68311ef3079b0bef3a8762",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
