import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import users from "./routes/users.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFoundHandler from "./middleware/notFound.js";

const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "aboutPage.html"));
});

app.use("/api/users", users);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log("Listening on port 8000");
});
