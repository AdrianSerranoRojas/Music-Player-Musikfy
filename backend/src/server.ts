import express from "express";
import helmet from "helmet";
import morgan from "morgan";
// import cors from "cors";

// import { config } from "./config";
// import { errorMiddleware } from "./middlewares";
// import { userRouter } from "./routes";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
// app.use(
//   cors({
//     origin: config.client.url,
//   }),
// );

// app.use(userRouter);

app.get("/", (req, res) => {
  res.status(200).send({
    data: "hello-world",
  });
  console.log(req);
});

// app.use(errorMiddleware);

export default app;