import express from "express";
const router = express.Router();

///json example
let users = [
  { id: "1", name: "data1" },
  { id: "2", name: "data2" },
  { id: "3", name: "data3" },
];

///get single post // request params
router.get("/:id", (req, res) => {
  const userId = req.params.id;
  const user = users.find((u) => u.id === userId);
  console.log(user);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(400).json({ message: "Post " + userId + " not found" });
  }
});

///limit response // querry string
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(users.slice(0, limit));
  } else {
    res.status(200).json(users);
  }
});

export default router;
