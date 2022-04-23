import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

import userRouter from "./routes/user-routes";

import config from "./config/config"

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(userRouter);

export default app;