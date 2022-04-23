import { Router } from "express";

import { authMiddleware } from "../middleware/auth-middleware";
import {
  getUsers,
  getUserDetails,
  createUser,
  updateUser,
  deleteUser,
  signUp,
} from "../controllers/user-controller";

const UserRouter = Router();

UserRouter.use("/users", authMiddleware);

UserRouter.get("/users", getUsers);
UserRouter.get("/users/:userId", getUserDetails);
UserRouter.post("/users/", createUser);
UserRouter.patch("/users/:userId", updateUser);
UserRouter.delete("/users/:userId", deleteUser);
UserRouter.post("/sign-up", authMiddleware, signUp);

export default UserRouter;
