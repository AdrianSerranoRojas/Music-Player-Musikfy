import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const stadisticsApi = createApi({
  reducerPath: "stadisticsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8100",
  }),
  endpoints: (builder) => ({
    getSongsCounter: builder.query({
      query: () => `/api/song`,
    }),
    getSongsCounterByUser: builder.query({
      query: (userId) => `api/songs/${userId}`,
    }),
    getSongCounterByUser: builder.query({
      query: ({ songId, ...patch }) => ({
        url: `api/songUser/${songId}/${patch}`,
      }),
    }),
    // getSongsFiltered: builder.query({
    //   query: (filter) => `/filterSongs/${filter}`,
    // }),
    // getMySongs: builder.query({
    //   query: () => `/mySongs`,
    // }),
    createAction: builder.mutation({
      query: (body) => ({
        url: `/api/song`,
        method: "POST",
        body,
      }),
    }),
    // likeSong: builder.mutation({
    //   query: ({ uid, ...patch }) => ({
    //     url: `/like/${uid}`,
    //     method: "PATCH",
    //     body: patch,
    //   }),
    // }),
    // notLikeSong: builder.mutation({
    //   query: ({ uid, ...patch }) => ({
    //     url: `/notLike/${uid}`,
    //     method: "PATCH",
    //     body: patch,
    //   }),
    // }),
  }),
});
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
useGetSongsCounterQuery,
useGetSongsCounterByUserQuery,
useCreateActionMutation,
useGetSongCounterByUserQuery,
} = stadisticsApi;
