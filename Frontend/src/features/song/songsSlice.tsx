import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useGetSongsQuery } from '../../services/songApi';
import axios from 'axios';

const initialState = {
  currentSong: {
    isPlaying: false,
  }
}
export const fetchSongs = createAsyncThunk("songs/fetchSongs",
() => {
  return axios.get("http://localhost:4000/songs");
})
export const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    // addSong: (state, action) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.songs = [...state.songs, action.payload ]
    // },
    addCurrentSong: (state, action) => {
      state.currentSong.isPlaying = action.payload;
    }

    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
  extraReducers: {
    [fetchSongs.fulfilled]: (state, action) => {
      console.log("payload");
      console.log(state);
    }
  }
})

export const { addCurrentSong} = songsSlice.actions


export const songsSelector = (state) => state.songs