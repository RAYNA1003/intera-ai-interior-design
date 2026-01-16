// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5s1c5Zj4vZHXunEnxjSIiZlg58tM7OEs",
  authDomain: "intera-87db0.firebaseapp.com",
  projectId: "intera-87db0",
  storageBucket: "intera-87db0.firebasestorage.app",
  messagingSenderId: "1002472258996",
  appId: "1:1002472258996:web:541ab8d48a5e02e927c6e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
