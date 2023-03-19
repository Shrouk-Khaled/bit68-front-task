import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../common"

export const getCategories = createAsyncThunk(
  "categories/get",
  async ({
    page = 1
  }, { rejectWithValue }) => {
    try {
      const url = `${BASE_URL}/categories/?page=${page}`;
      const response = await axios.get(url);
      return {data: response.data, page: page};
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    //get brands
    [getCategories.pending]: (state, action) => {
      state.loading = true;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.loading = false;
      if(action.payload.page == 1){
        state.categories = action.payload.data
      }else{
        state.categories ={
          ...action.payload.data,
          results: state?.categories?.results
            ? [...state?.categories?.results, ...action.payload.data.results]
            : [...action.payload.data.results],
        };
      }
    },
    [getCategories.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});


export default categoriesSlice.reducer;