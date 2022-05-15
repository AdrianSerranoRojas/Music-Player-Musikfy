import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCurrentUserToken } from "../firebase/firebase";

// Define a service using a base URL and expected endpoints
export const playlistApi = createApi({
  reducerPath: "playlistApi",
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
    getPlaylists: builder.query({
      query: () => `/playlists/all`,
    }),
    createPlaylist: builder.mutation({
      query: (body) => ({
        url: `/playlists`,
        method: "POST",
        body,
      }),
    }),
    updatePlaylist: builder.mutation({
      query: (id,...patch) => ({
        url: `/playlists/${id}`,
        method: "PUT",
        body: patch,
      }),
    }),
    deletePlaylist: builder.mutation({
      query: (id) => ({
        url: `/playlists/${id}`,
        method: "DELETE",
        // body: id,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPlaylistsQuery,
  useCreatePlaylistMutation,
  useDeletePlaylistMutation,
  useUpdatePlaylistMutation,
} = playlistApi;
