import express from "express";
import {
  deleteUser,
  getUsers,
  getUsersByID,
  saveUser,
  updateUser,
} from "../controller/UserController.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUsersByID);
router.post("/users", saveUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
