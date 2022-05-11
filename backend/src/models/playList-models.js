import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const PlaylistsSchema = new Schema(
  {
    playlistName: {
      type: String,
      trim: true,
    },
    playListImg: {
      type: String
    },
    author: {
      type: String,
      ref: 'users'
    },
    // songs: [{
    //   type: Schema.Types.ObjectId,
    //   ref: 'songs'
    // }],
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

