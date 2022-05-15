import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PlaylistSchema = new Schema(
  {
    title: {
      type: String,
    },
    fans: {
      type: [{ type: Schema.Types.ObjectId, ref: "users" }],
      default: [],
    },
    songs: {
      type: [{ type: Schema.Types.ObjectId, ref: "song" }],
      default: [],
    },
  },
  { timestamps: true }
);

export const Playlists = new model("Playlists", PlaylistSchema);
