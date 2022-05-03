import { Router } from "express";
import cloudinary from "cloudinary";

import { authMiddleware } from "../middleware/auth-middleware.js";
import {
  getUsers,
  getUserDetails,
  createUser,
  updateUser,
  deleteUser,
  signUp,
} from "../controllers/user-controller.js";

import { uploadImageCloud } from "../libs/cloudinary.js";

const UserRouter = Router();

// UserRouter.use("/users", authMiddleware);

// UserRouter.get("/users", getUsers);
UserRouter.get("/user/:userId", getUserDetails);
// UserRouter.post("/users/", createUser);
// UserRouter.patch("/users/:userId", updateUser);
// UserRouter.delete("/users/:userId", deleteUser);

UserRouter.post("/sign-up", authMiddleware, signUp);
// UserRouter.post("/sign-up", signUp);
UserRouter.patch("/user/:userId", updateUser);

UserRouter.post("/uploadimage", async (req, res) => {
  try {
    const { images } = req.body;
    const image = images[0];
    const respon = await cloudinary.v2.uploader.upload(image, {
      folder: "usersPictures",
    });
    res.send(respon);
  } catch (error) {
    next(error);
  }
});
// UserRouter.post("/sign-up",  signUp);

export default UserRouter;
