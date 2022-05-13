import { configureStore } from "@reduxjs/toolkit";

import usersSlice from "../features/users/usersSlice";
import {songsSlice} from "../features/song/songsSlice";

import { songApi } from "../services/songApi";
import { userApi } from "../services/userApi";
import {playlistApi } from "../services/playlistApi";

import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    usersState: usersSlice,
    songs: songsSlice.reducer,
    [songApi.reducerPath]: songApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [playlistApi.reducerPath]: playlistApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(songApi.middleware, userApi.middleware, playlistApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
