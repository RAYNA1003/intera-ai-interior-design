// login.js

document.getElementById("loginForm").addEventListener("submit", async function(e) {
  e.preventDefault(); // stop form from reloading page

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please enter both email and password");
    return;
  }

  // For now, simple test Gmail/password check
  // Replace this fetch call with real backend endpoint if ready
  try {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    // Backend returns { success: true } for the test Gmail/password
    if (res.ok && data.success) {
      // Store login info in localStorage
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("username", email);

      // Redirect to dashboard
      window.location.href = "dashboard.html";
    } else {
      alert(data.message || "Login failed. Please check your email and password.");
    }

  } catch (err) {
    console.error("Error connecting to server:", err);
    alert("Server not reachable. Try again later.");
  }
});
