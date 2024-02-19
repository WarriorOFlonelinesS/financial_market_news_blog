// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "financial-blog-61c66.firebaseapp.com",
  projectId: "financial-blog-61c66",
  storageBucket: "financial-blog-61c66.appspot.com",
  messagingSenderId: "844177809784",
  appId: "1:844177809784:web:d3e98acc7152e19ce5288d",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
