import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useGetSongsQuery } from "../../services/songApi";
import axios from "axios";

const initialState = {
  newSong: {
    songFile: "",
    songImage: "",
    songName: "",
    songArtist: "",
    songAlbum: "",
    songGenre: "",
    userSong: "",
  },
  currentSong: [
    {
      isPlaying: false,
      audio: "",
      songName: "",
      songArtist: "",
      songGenre: ""
    },
  ],
};
export const fetchSongs = createAsyncThunk("songs/fetchSongs", () => {
  return axios.get("http://localhost:4000/songs");
});
export const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    addSongFile: (state, action) => {
      state.newSong.songFile = action.payload;
      return state;
    },
    updateSongFile: (state, action) => {
      state.newSong.push = action.payload;
      return state;
    },
    addFirstCurrentSong: (state, action) => {
      state.currentSong = action.payload;
      return state;
    },
    addCurrentSong: (state, action) => {
      state.currentSong = [...state.currentSong, action.payload];
      return state;
    },
  },
  extraReducers: {
    [fetchSongs.fulfilled]: (state, action) => {
      console.log("payload");
      console.log(state);
    },
  },
});

export const {
  addCurrentSong,
  addSongFile,
  updateSongFile,
  addFirstCurrentSong,
} = songsSlice.actions;

export const songsSelector = (state) => state.songs;
