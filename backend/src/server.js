import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import fileUpload from "express-fileupload";

import userRouter from "./routes/user-routes.js";
import songsRouter from "./routes/songs-routes.js";
import playlistRouter from "./routes/playList-routes.js";
import list40pricipalesRouter from "./routes/list40pricipales.router.js";

import config from "./config/config.js";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "2500mb" }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);
app.use(userRouter);
app.use(songsRouter);
app.use(playlistRouter);
app.use(list40pricipalesRouter);

export default app;
