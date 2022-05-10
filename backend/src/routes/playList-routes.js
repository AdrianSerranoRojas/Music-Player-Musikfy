import { Router } from "express";

// import { authMiddleware } from "../middleware/auth-middleware.js";
import {
  getPlayList,
  // getUserPlayList,
  // createUser,
  // updateUser,
  // deleteUser,
  // signUp,
} from "../controllers/playList-controllers.js";

const playListRouter = Router();


playListRouter.get("/playlist", getPlayList);
// playListRouter.get("/playlist/:userId", getUserPlayList);


// playListRouter.patch("playlist/:userId", updateUser);
// playListRouter.post("/playlist",  signUp);
// playListRouter.post("/playlist", authMiddleware, signUp);

export default playListRouter;
