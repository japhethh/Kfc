import express from "express";
import {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getSpecificId,
} from "../controllers/userController.js";

const userRouter = express.Router();

// Routing
userRouter.get("/", getAllUser);
userRouter.post("/", createUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.get("/:id", getSpecificId);

// Exporting
export default userRouter;
