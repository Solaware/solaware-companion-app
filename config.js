//export const BASE_URL = 'hi';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; //this doesnt work!!
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7dqxDSO4ZVwIj1G25Fhvv_DZMY7o5tRo",
  authDomain: "solaware-23785.firebaseapp.com",
  projectId: "solaware-23785",
  storageBucket: "solaware-23785.appspot.com",
  messagingSenderId: "714641292327",
  appId: "1:714641292327:web:e0d981acc0d503ad48a202",
  measurementId: "G-EX678J099Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);