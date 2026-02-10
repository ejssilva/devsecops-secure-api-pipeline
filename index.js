const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Secure API running");
});

app.get("/user", (req, res) => {
  const user = req.query.user;
  res.send("User: " + user); // vulnerável propositalmente (exemplo educacional)
});

app.listen(3000, () => {
  console.log("API running on port 3000");
});
