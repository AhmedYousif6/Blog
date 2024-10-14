// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "max-blog-28c8c.firebaseapp.com",
  projectId: "max-blog-28c8c",
  storageBucket: "max-blog-28c8c.appspot.com",
  messagingSenderId: "745113824928",
  appId: "1:745113824928:web:f3d6527df6282c25aa23c5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);