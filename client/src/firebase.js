// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "home-estate-7e23c.firebaseapp.com",
  projectId: "home-estate-7e23c",
  storageBucket: "home-estate-7e23c.appspot.com",
  messagingSenderId: "1093181150523",
  appId: "1:1093181150523:web:ca067100759a0473e4931e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);