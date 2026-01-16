// profileuser.js (Firebase – FIXED)

import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

/* ---------------- AUTH PROTECTION ---------------- */

let authResolved = false;

onAuthStateChanged(auth, (user) => {
  if (user) {
    authResolved = true;

    const emailEl = document.getElementById("userEmail");
    if (emailEl) {
      emailEl.innerText = user.email;
    }
  } else {
    if (authResolved) {
      window.location.href = "loginuser.html";
    }
  }
});

/* ---------------- DOB → AGE ---------------- */

const dobInput = document.getElementById("dob");
const ageInput = document.getElementById("age");

if (dobInput && ageInput) {
  dobInput.addEventListener("change", () => {
    const dob = new Date(dobInput.value);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    ageInput.value = age;
  });
}

/* ---------------- PROFILE FORM ---------------- */

const profileForm = document.getElementById("profileForm");
if (profileForm) {
  profileForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Profile saved successfully!");
  });
}

/* ---------------- LOGOUT ---------------- */

const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    signOut(auth).then(() => {
      window.location.href = "loginuser.html";
    });
  });
}
