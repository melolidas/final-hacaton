import { createAsyncThunk } from "@reduxjs/toolkit";
import { $axios } from "../../helpers/axios";
import { API } from "../../helpers/conts";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      // console.log("hello");
      const { data } = await $axios.get(
        `${API}/products/${window.location.search}`
      );
      return data;
    } catch (error) {
      // console.log(error);
    }
  }
);
