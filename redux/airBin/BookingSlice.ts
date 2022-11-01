import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface I_initialState {
  bookingData: [];
  bookingError: string;
  bookingLoading: boolean;
}

const initialState: I_initialState = {
  bookingData: [],
  bookingError: "",
  bookingLoading: false,
};

export const getBookingSlice: any = createAsyncThunk(
  "airBnb/getBookingTasks",
  async (UserID: number, thunkApi) => {
    try {
      const res = await axios.get(`${process.env.API_BASE_URL}/booking`);
      console.log("res", res?.data);
      return thunkApi.fulfillWithValue(res?.data);
    } catch (error: any) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const bookingSlice: any = createSlice({
  name: "bigImg",
  initialState,
  reducers: {},
  extraReducers: {
    [getBookingSlice.pending]: (state, action) => {
      state.bookingLoading = true;
    },
    [getBookingSlice.fulfilled]: (state, action) => {
      state.bookingData = action.payload;
      state.bookingLoading = false;
    },
    [getBookingSlice.rejected]: (state, action) => {
      state.bookingLoading = false;
      state.bookingError = action.payload;
    },
  },
});

export default bookingSlice.reducer;
