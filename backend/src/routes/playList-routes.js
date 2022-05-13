import { Router } from "express";

import { authMiddleware } from "../middleware/auth-middleware.js";
import {
  getPlayList,
  createPlaylist2,
  bestListSongs,
  fetchPlaylists,
  removeSongFromPlaylist,
  fetchPublicPlaylists,
  getSongsByPlaylistId,
  orderPlaylistsSongs,
  orderMyPlaylists,
  fetchMyPlaylists,
  sortPlaylistsByLikes,
  getPlaylistById,
  updatePlaylist,
  removePlaylistById,
  getMyFavoritePlaylists,
  followPlaylist,
  cancelFollowPlaylist,
  addSongToPlaylist,
  updatePlaylistById
  // getUserPlayList,
  // createUser,
  // updateUser,
  // deleteUser,
  // signUp,
} from "../controllers/playList-controllers.js";

const playlistRouter = Router();

// playListRouter.get("/playlist", getPlayList);
// playListRouter.get("/playlist/:userId", getUserPlayList);

// playListRouter.patch("playlist/:userId", updateUser);
// playListRouter.post("/playlist", authMiddleware, createPlaylist);
// playListRouter.post("/playlist", authMiddleware, signUp);
playlistRouter.put("/top", authMiddleware, bestListSongs);
// playlistRouter.get("/all", authMiddleware, fetchPlaylists);
playlistRouter.get("/playlists/all", getPlayList);
playlistRouter.post("/playlists", authMiddleware, createPlaylist2);
playlistRouter.delete("/playlists/:id", authMiddleware, removePlaylistById);
playlistRouter.put("/playlists/:id", authMiddleware, updatePlaylistById);

// playlistRouter.get("/",  createPlaylist2);
// playlistRouter.patch("/songs/:id", authMiddleware, removeSongFromPlaylist);
// playlistRouter.get("/public/:id", authMiddleware, fetchPublicPlaylists);
// playlistRouter.get("/playlist/:id", authMiddleware, getSongsByPlaylistId);
// playlistRouter.patch("/order-songs/:id", authMiddleware, orderPlaylistsSongs);
// playlistRouter.patch("/order/:id", authMiddleware, orderMyPlaylists);
// playlistRouter.get("/my-lists/:id", authMiddleware, fetchMyPlaylists);
// playlistRouter.get("/sort-playlists", authMiddleware, sortPlaylistsByLikes);
// playlistRouter.get(
//   "/my-favorite-lists/:id",
//   authMiddleware,
//   getMyFavoritePlaylists
// );
// playlistRouter.patch("/follow/:id", authMiddleware, followPlaylist);
// playlistRouter.patch(
//   "/cancel-follow/:id",
//   authMiddleware,
//   cancelFollowPlaylist
// );
// playlistRouter.patch("/add/:id", authMiddleware, addSongToPlaylist);
// playlistRouter.get("/:id", authMiddleware, getPlaylistById);
// playlistRouter.patch("/:id", authMiddleware, updatePlaylist);
// playlistRouter.put("/:id", authMiddleware, removePlaylistById);

export default playlistRouter;
