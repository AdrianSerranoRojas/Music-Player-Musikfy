import mongoose from "mongoose";

const { Schema, model } = mongoose;

const SongsSchema = new Schema(
  {
    songFile: {
      url: String,
      public_id: String,
    },
    songUser: {
      userId: String,
      email: String,
    },
    songData: {
      title: String,
      artist: String,
      album: String,
      picture: {
        pictureUrl: String,
        picturePublic_id: String,
      },
    },
  },
  { timestamps: true }
);

export const Songs = new model("songs", SongsSchema);
