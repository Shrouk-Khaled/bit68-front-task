import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../common"

export const getBrands = createAsyncThunk(
  "brands/get",
  async ({
    page = 1
  }, { rejectWithValue }) => {
    try {
      const url = `${BASE_URL}/brands/?page=${page}`;
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

const brandsSlice = createSlice({
  name: "brnads",
  initialState: {
    brands: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    //get brands
    [getBrands.pending]: (state, action) => {
      state.loading = true;
    },
    [getBrands.fulfilled]: (state, action) => {
      state.loading = false;
      if(action.payload.page == 1){
        state.brands = action.payload.data
      }else{
        state.brands ={
          ...action.payload.data,
          results: state?.brands?.results
            ? [...state?.brands?.results, ...action.payload.data.results]
            : [...action.payload.data.results],
        };
      }
    //   state.brands = action.payload;
    },
    [getBrands.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});


export default brandsSlice.reducer;