import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const port = process.env.PORT || 8000;
import users from "./routes/users.js";

const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
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

app.use("/api/users", users);

///listen server
app.listen(port, () => {
  console.log("Listening on port 8000");
});
