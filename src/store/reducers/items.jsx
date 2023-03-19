import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../common"

export const getItems = createAsyncThunk(
  "items/get",
  async ({
    page = 1
  }, { rejectWithValue }) => {
    try {
      const url = `${BASE_URL}/items/?page=${page}`;
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

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    //get brands
    [getItems.pending]: (state, action) => {
      state.loading = true;
    },
    [getItems.fulfilled]: (state, action) => {
      state.loading = false;
      if(action.payload.page == 1){
        state.items = action.payload.data
      }else{
        state.items ={
          ...action.payload.data,
          results: state?.items?.results
            ? [...state?.items?.results, ...action.payload.data.results]
            : [...action.payload.data.results],
        };
      }
    //   console.log(action.payload)
    //   state.items = action.payload.data;
    },
    [getItems.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});


export default itemsSlice.reducer;