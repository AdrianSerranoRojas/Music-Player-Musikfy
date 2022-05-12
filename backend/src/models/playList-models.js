import mongoose from 'mongoose';
const { Schema, model } = mongoose;
// const PlaylistsSchema = new Schema(
//   {
//     playlistName: {
//       type: String,
//       trim: true,
//     },
//     playListImg: {
//       type: String
//     },
//     author: {
//       type: String,
//       ref: 'users'
//     },
    // songs: [{
    //   type: Schema.Types.ObjectId,
    //   ref: 'songs'
    // }],
    // userFollowedSong: {
    //   type: [{ type: String, user: 'userName' }],
    //   default: []
    // }
//   },
//   { timestamps: true }
// );

// esto creo que es para hacer varias listas por nombre
// PlaylistSchema.index({ name: 'text' });



const PlaylistSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter title to the playlist"],
      trim: true,
      minLength: [2, "Playlist title needs to have at least 2 characters"],
      maxLength: [50, "Playlist title cannot exceed 50 characters"],
    },
  //   description: {
  //     type: String,
  //     required: [true, "Please enter description to the playlist"],
  //     trim: true,
  //     minLength: [
  //       2,
  //       "Playlist description needs to have at least 2 characters",
  //     ],
  //     maxLength: [200, "Playlist description cannot exceed 200 characters"],
  //   },
  //   songs: {
  //     type: [{ type: Schema.Types.ObjectId, ref: "Song" }],
  //     default: [],
  //   },
  //   genre: {
  //     type: String,
  //     enum: {
  //       values: [
  //         "",
  //         "Country",
  //         "Electronic dance music (EDM)",
  //         "Hip-hop",
  //         "Indie rock",
  //         "Jazz",
  //         "K-pop",
  //         "Metal",
  //         "Oldies",
  //         "Pop",
  //         "Rap",
  //         "Rhythm & blues (R&B)",
  //         "Rock",
  //         "Techno",
  //         "Folk",
  //         "Ska",
  //         "Reggae",
  //         "Punk",
  //       ],
  //     },
  //   },
  //   private: {
  //     type: Boolean,
  //     required: true,
  //   },
  //   owner: {
  //     type: String,
  //     // ref: "User",
  //     ref: "users",
  //     required: true,
  //   },
  //   playlistImage: {
  //     type: String,
  //     default:
  //       "https://res.cloudinary.com/carapolla/image/upload/v1652290253/playlistsPicture/estilos_f8zdsl.jpg",
  //   },
  //   likes: {
  //     type: Number,
  //     default: 0,
  //   },
  },
  { timestamps: true }
);
//cuiadado con las s de PlayList s  que no estaba antes

export const Playlists = new model("Playlists", PlaylistSchema);