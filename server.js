const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/about", (req, res) => {
  res.send("about");
});

// starts a simple http server locally on port 3000
app.listen(8000, () => {
  console.log("Listening on port 8000");
});

// run with `node server.mjs`
