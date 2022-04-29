import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/users`,
    }),
    getUser: builder.query({
      query: (uid) => `/user/${uid}`,
    }),
    updateUser:builder.mutation({
        query:({uid, ...patch})=>({
            url:`user/${uid}`,
            method:"PATCH",
            body:patch
        })
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery, useGetUserQuery, useUpdateUserMutation } = userApi;
