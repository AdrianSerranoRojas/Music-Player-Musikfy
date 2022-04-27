import mongoose from "mongoose";

const { Schema, model } = mongoose;


const SongsSchema = new Schema(
  {
    songName: {
      type: String,
      trim: true,
    },
    songUrl: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Songs = new model("songs", SongsSchema);