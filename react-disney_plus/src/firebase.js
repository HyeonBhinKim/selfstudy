// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARNL2NK_99HmQNIgg_6y7vbybS8EuGXz8",
  authDomain: "react-disney-plus-app-ca554.firebaseapp.com",
  projectId: "react-disney-plus-app-ca554",
  storageBucket: "react-disney-plus-app-ca554.appspot.com",
  messagingSenderId: "110017898514",
  appId: "1:110017898514:web:707d3f9d6a846a0a9890cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app; // 밖에서 쓰려면 export default app로 보내야함
// src의 index.js 파일에서 import app from './firebase'; 