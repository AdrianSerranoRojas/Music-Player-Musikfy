import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const songApi = createApi({
  reducerPath: "songApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    getSongs: builder.query({
      query: () => `/songs`,
    }),
    createSong: builder.mutation({
      query: (body) => ({
        url: `/songs`,
        method: "POST",
        body,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSongsQuery, useCreateSongMutation } = songApi;
