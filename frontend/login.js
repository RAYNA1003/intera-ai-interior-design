document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Please fill in all fields");
    return;
  }

  // ✅ SET SESSION (THIS WAS MISSING)
  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("username", email);

  // redirect
  window.location.href = "dashboard.html";
});
