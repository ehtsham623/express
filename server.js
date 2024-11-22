const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;

//serves static file ,eg: localhost:8000/main.html
app.use(express.static(path.join(__dirname, "public")));

///default
app.get("/", (req, res) => {
  res.send("hello world");
});

///send file
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "aboutPage.html"));
});

///json example
let users = [
  { id: "1", name: "data1" },
  { id: "2", name: "data2" },
  { id: "3", name: "data3" },
];

app.get("/api/users", (req, res) => {
  res.json(users);
});

///listen server
app.listen(port, () => {
  console.log("Listening on port 8000");
});
