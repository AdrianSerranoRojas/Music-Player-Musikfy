import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  songs: [],
}
export const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    createSong: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.songs = [...state.songs, action.payload ]
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

export const { createSong} = songsSlice.actions

export default songsSlice.reducer

export const usersSelector = (state) => state.users