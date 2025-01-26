// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aneeshblog-a7494.firebaseapp.com",
  projectId: "aneeshblog-a7494",
  storageBucket: "aneeshblog-a7494.firebasestorage.app",
  messagingSenderId: "666031214513",
  appId: "1:666031214513:web:8d2b65a34ea4f5be30b790"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);