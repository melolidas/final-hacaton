import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./users.action";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    error: null,
    loading: false,
    currentUser: "",
  },
  reducers: {
    setError: (state, { payload }) => {
      state.error = payload;
    },
    logout: (state) => {
      localStorage.removeItem("tokens");
      state.currentUser = "";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state) => {
      state.error = null;
    });
  },
});

export const { setError } = usersSlice.actions;
