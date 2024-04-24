import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../helpers/conts";
import axios from "axios";
import { $axios } from "../../helpers/axios";

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (data, { dispatch }) => {
    console.log(data);
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("password_confirm", data.password_confirm);
    try {
      const { data: result } = await axios.post(
        `${API}/account/register/`,
        formData
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async ({ user }, { dispatch }) => {
    console.log(user, "actions hello");
    const formData = new FormData();
    formData.append("email", user.email);
    formData.append("password", user.password);
    console.log(1);
    try {
      const { data } = await axios.post(`${API}/account/login/`, formData);
      console.log("error");
      localStorage.setItem("tokens", JSON.stringify(data));
      dispatch(getProfile());
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getProfile = createAsyncThunk("users/getProfile", async () => {
  try {
    const { data } = await $axios.get(`${API}/account/profile`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});
