// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV5swfLCmGUL1G38EcGK42z4NZsyXVPYk",
  authDomain: "react-authentication-34db0.firebaseapp.com",
  projectId: "react-authentication-34db0",
  storageBucket: "react-authentication-34db0.appspot.com",
  messagingSenderId: "320337264514",
  appId: "1:320337264514:web:5049bfef69f5f50daf599b",
  measurementId: "G-3NWTZGLFH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;