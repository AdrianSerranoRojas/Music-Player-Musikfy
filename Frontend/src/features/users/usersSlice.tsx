import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { createUser } = usersSlice.actions;

export const usersSelector = (state) => state.users;
