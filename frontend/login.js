// login.js (Firebase version)
console.log("login.js loaded");

import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault(); // stop page reload

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please enter both email and password");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login successful");
      window.location.href = "profileuser.html"; // or dashboard.html
    })
    .catch((error) => {
      alert(error.message);
    });
});
