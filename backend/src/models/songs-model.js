import mongoose from "mongoose";

const { Schema, model } = mongoose;

const SongsSchema = new Schema(
  {
    songName: {
      type: String,
      trim: true,
    },
    songFile: {
      url: String,
      public_id: String,
    },
    songUser: {
      userId: String,
      email: String,
    },
  },
  { timestamps: true }
);

export const Songs = new model("songs", SongsSchema);
