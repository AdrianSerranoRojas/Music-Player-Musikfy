import { Router } from "express";

import {
  getSongs,
  getTags,
  createSong,
} from "../controllers/songs-controller.js";

const songsRouter = Router();

songsRouter.get("/jsmediatags", getTags);
songsRouter.get("/songs", getSongs);
songsRouter.post("/songs", createSong);

// UserRouter.use("/users", authMiddleware);
// UserRouter.get("/users", getUsers);
// UserRouter.get("/users/:userId", getUserDetails);
// UserRouter.post("/users/", createUser);
// UserRouter.patch("/users/:userId", updateUser);
// UserRouter.delete("/users/:userId", deleteUser);

export default songsRouter;
