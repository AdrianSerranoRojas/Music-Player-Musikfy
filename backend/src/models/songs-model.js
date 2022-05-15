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
    likes: {
      type: Number,
      default: 0,
    },
    played: {
      type: Number,
      default: 0,
    },
    songImage: {
      type: String,
      default:
        "https://res.cloudinary.com/oasismusic/image/upload/v1634289407/wmscaabwab6zggp4xilj.png",
    },
  },
  { timestamps: true }
);

export const Songs = new model("songs", SongsSchema);
