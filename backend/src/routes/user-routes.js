import { Router } from "express";

import { authMiddleware } from "../middleware/auth-middleware.js";
import {
  getUsers,
  getUserDetails,
  createUser,
  updateUser,
  deleteUser,
  signUp,
} from "../controllers/user-controller.js";

const UserRouter = Router();

// UserRouter.use("/users", authMiddleware);

// UserRouter.get("/users", getUsers);
UserRouter.get("/user/:userId", getUserDetails);
// UserRouter.post("/users/", createUser);
// UserRouter.patch("/users/:userId", updateUser);
// UserRouter.delete("/users/:userId", deleteUser);

UserRouter.post("/sign-up", authMiddleware, signUp);
UserRouter.patch("/user/:userId", updateUser);
// UserRouter.post("/sign-up",  signUp);

export default UserRouter;
