import { Router } from "express";

import { authMiddleware } from "../middleware/auth-middleware.js";
import {
  getPlayList,
  getPlayLists,
  createPlaylist,
  removePlaylistById,
  updatePlaylistById,

} from "../controllers/playList-controllers.js";

const playlistRouter = Router();

playlistRouter.get("/playlists", authMiddleware, getPlayLists);
playlistRouter.get("/playlist/:id", authMiddleware, getPlayList);
playlistRouter.post("/playlists", authMiddleware, createPlaylist);
playlistRouter.delete("/playlists/:id", authMiddleware, removePlaylistById);
playlistRouter.patch("/playlists/:id", authMiddleware, updatePlaylistById);

export default playlistRouter;
