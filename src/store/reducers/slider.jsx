import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../common"

export const getSliderData = createAsyncThunk(
  "slider/get",
  async (_, { rejectWithValue }) => {
    try {
      const url = `${BASE_URL}/slider_image/`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const sliderSlice = createSlice({
  name: "categories",
  initialState: {
    sliderData: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    //get brands
    [getSliderData.pending]: (state, action) => {
      state.loading = true;
    },
    [getSliderData.fulfilled]: (state, action) => {
      state.loading = false;
      state.sliderData = action.payload;
    },
    [getSliderData.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});


export default sliderSlice.reducer;