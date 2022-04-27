import { Router } from "express";

import {
  getSongs
} from "../controllers/songs-controller.js";

const songsRouter = Router();

// UserRouter.use("/users", authMiddleware);

// UserRouter.get("/users", getUsers);
// UserRouter.get("/users/:userId", getUserDetails);
// UserRouter.post("/users/", createUser);
// UserRouter.patch("/users/:userId", updateUser);
// UserRouter.delete("/users/:userId", deleteUser);



songsRouter.get("/songs",  getSongs);

export default songsRouter;
