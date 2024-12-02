import express, { Router } from "express";
import {
  getUser,
  getUsers,
  postNewUser,
  updateUser,
  deleteUser,
} from "../controllers/usersController.js";

const router = Router();

router.get("/:id", getUser);

router.get("/", getUsers);

router.post("/", postNewUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
