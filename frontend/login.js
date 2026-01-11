document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // TEMPORARY behavior (for UI testing)
  if (email === "" || password === "") {
    alert("Please fill in all fields");
    return;
  }

  alert("Login button clicked!\n\n(Authentication will be connected later)");

  // window.location.href = "dashboard.html";
});

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    // simulate login
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", username);

    window.location.href = "dashboard.html";
}
