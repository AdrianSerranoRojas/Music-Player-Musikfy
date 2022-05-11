import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const PlaylistsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'The name is required'],
      trim: true,
      unique: true
    },
    playListImg: {
      type: String
    },
    users: {
      type: Number,
      default:[]
    },
    songs: {
      type: String,
      type: [{ type: String, user: 'userName' }],
      default: []
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

export const Playlists = new model('playlists', PlaylistsSchema);

