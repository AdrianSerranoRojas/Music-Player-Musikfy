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
    },
    songImage: {
      imageUrl: String,
      imagePublic_id: String,
    },
    likes: {
      type: Number,
      default: 0,
    },
    played: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Songs = new model("songs", SongsSchema);
