import { Router } from "express";

import { authMiddleware } from "../middleware/auth-middleware.js";

import {
  getSongs,
  getTags,
  createSong,
  getMySongs,
  getSongsFilter,
} from "../controllers/songs-controller.js";

const songsRouter = Router();

songsRouter.get("/jsmediatags", getTags);
songsRouter.get("/songs", getSongs);
songsRouter.get("/mySongs", authMiddleware, getMySongs);
songsRouter.post("/songs", authMiddleware, createSong);
songsRouter.get("/songs/:filter", getSongsFilter);

// UserRouter.use("/users", authMiddleware);
// UserRouter.get("/users", getUsers);
// UserRouter.get("/users/:userId", getUserDetails);
// UserRouter.post("/users/", createUser);
// UserRouter.patch("/users/:userId", updateUser);
// UserRouter.delete("/users/:userId", deleteUser);

export default songsRouter;
