// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk6Y3_31FmPIcio1CVU6V0sHfgnBf-v-Y",
  authDomain: "pokedex-4cf7f.firebaseapp.com",
  projectId: "pokedex-4cf7f",
  storageBucket: "pokedex-4cf7f.appspot.com",
  messagingSenderId: "971251148226",
  appId: "1:971251148226:web:abf1b7ae77e7856ce3a25b",
  measurementId: "G-NYKYD9Q668"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);