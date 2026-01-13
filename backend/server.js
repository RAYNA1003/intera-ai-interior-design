const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});


app.post("/login", (req, res) => {
    
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ message: "Missing fields" });
  }

  // TEMPORARY AUTH
  if (email === "test@gmail.com" && password === "1234") {
    return res.json({ success: true });
  }

  res.status(401).json({ message: "Invalid credentials" });
});
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});