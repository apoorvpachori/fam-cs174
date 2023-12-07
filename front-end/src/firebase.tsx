// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const apiKey = process.env.REACT_APP_API_KEY;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "famapp-4a4ef.firebaseapp.com",
  databaseURL: "https://famapp-4a4ef-default-rtdb.firebaseio.com",
  projectId: "famapp-4a4ef",
  storageBucket: "famapp-4a4ef.appspot.com",
  messagingSenderId: "807506276217",
  appId: "1:807506276217:web:2733d471f9e270f6b589a8",
  measurementId: "G-WSGSV8MZFG",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
