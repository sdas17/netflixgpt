// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL3Qp59jlkAo09X47YheV5D75Dkf3H44M",
  authDomain: "netflixgptdemo.firebaseapp.com",
  projectId: "netflixgptdemo",
  storageBucket: "netflixgptdemo.appspot.com",
  messagingSenderId: "826818638132",
  appId: "1:826818638132:web:bbe37cb882ffeac0aa7561",
  measurementId: "G-P32LDSQNDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
