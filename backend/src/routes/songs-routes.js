import { Router } from "express";

import { authMiddleware } from "../middleware/auth-middleware.js";

import {
  getSongs,
  getSong,
  getTags,
  createSong,
  getMySongs,
  getSongsFilter,
  likeSong,
} from "../controllers/songs-controller.js";

const songsRouter = Router();

songsRouter.get("/jsmediatags", getTags);
songsRouter.get("/songs", getSongs);
songsRouter.get("/songs/:songId", getSong);

songsRouter.get("/mySongs", authMiddleware, getMySongs);
songsRouter.post("/songs", authMiddleware, createSong);
songsRouter.get("/songs/:filter", getSongsFilter);
songsRouter.patch("/like/:id", authMiddleware, likeSong);

export default songsRouter;
