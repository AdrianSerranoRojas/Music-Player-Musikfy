import { Router } from "express";

import { authMiddleware } from "../middleware/auth-middleware.js";
import {
  getPlayList,
  getPlayLists,
  createPlaylist,
  removePlaylistById,
  updatePlaylistById,
  // bestListSongs,
  // fetchPlaylists,
  // removeSongFromPlaylist,
  // fetchPublicPlaylists,
  // getSongsByPlaylistId,
  // orderPlaylistsSongs,
  // orderMyPlaylists,
  // fetchMyPlaylists,
  // sortPlaylistsByLikes,
  // getPlaylistById,
  // updatePlaylist,
  // getMyFavoritePlaylists,
  // followPlaylist,
  // cancelFollowPlaylist,
  // addSongToPlaylist,
  // getUserPlayList,

} from "../controllers/playList-controllers.js";

const playlistRouter = Router();

playlistRouter.get("/playlists", authMiddleware, getPlayLists);

playlistRouter.get("/test",  ((req,res)=>{
  res.sendStatus(200);
}))
playlistRouter.get("/playlist/:id", authMiddleware, getPlayList);
playlistRouter.post("/playlists", authMiddleware, createPlaylist);
playlistRouter.delete("/playlists/:id", authMiddleware, removePlaylistById);
playlistRouter.patch("/playlists/:id", authMiddleware, updatePlaylistById);

export default playlistRouter;

// playListRouter.get("/playlist/:userId", getUserPlayList);
// playListRouter.patch("playlist/:userId", updateUser);
// playListRouter.post("/playlist", authMiddleware, createPlaylist);
// playListRouter.post("/playlist", authMiddleware, signUp);
// playlistRouter.put("/top", authMiddleware, bestListSongs);
// playlistRouter.get("/all", authMiddleware, fetchPlaylists);
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

