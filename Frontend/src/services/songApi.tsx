import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCurrentUserToken } from "../firebase/firebase";

// Define a service using a base URL and expected endpoints
export const songApi = createApi({
  reducerPath: "songApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    prepareHeaders: async (headers, { getState }) => {
      const userToken = await getCurrentUserToken();
      // If we have a token set in state, let's assume that we should be passing it.
      if (userToken) {
        headers.set("authorization", `Bearer ${userToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSongs: builder.query({
      query: () => `/songs`,
    }),
    getSong: builder.query({
      query: (id) => `/songs/${id}`,
    }),
    getSongsFiltered: builder.query({
      query: (filter) => `/filterSongs/${filter}`,
    }),
    getMySongs: builder.query({
      query: () => `/mySongs`,
    }),
    createSong: builder.mutation({
      query: (body) => ({
        url: `/songs`,
        method: "POST",
        body,
      }),
    }),
    likeSong: builder.mutation({
      query: ({ uid, ...patch }) => ({
        url: `/like/${uid}`,
        method: "PATCH",
        body: patch,
      }),
    }),
    notLikeSong: builder.mutation({
      query: ({ uid, ...patch }) => ({
        url: `/notLike/${uid}`,
        method: "PATCH",
        body: patch,
      }),
    }),
  }),
});
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetSongsQuery,
  useCreateSongMutation,
  useGetMySongsQuery,
  useGetSongsFilteredQuery,
  useLikeSongMutation,
  useGetSongQuery,
  useNotLikeSongMutation,
} = songApi;
