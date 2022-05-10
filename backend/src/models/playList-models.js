import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const PlaylistSchema = new Schema(
  {
    style: {
      type: String,
      required: [true, 'The name is required'],
      trim: true,
      unique: true
    },
    image: {
      type: String
    },
    likes: {
      type: Number,
      default:0
    },
    songs: {
      type: String,
      // type: [{ type: String, user: 'userName' }],
      // default: []
    },
    // userFollowedSong: {
    //   type: [{ type: String, user: 'userName' }],
    //   default: []
    // }
  },
  { timestamps: true }
);

// esto creo que es para hacer varias listas por nombre
// PlaylistSchema.index({ name: 'text' });

export const PlaylistModel = new model('playlist', PlaylistSchema);

