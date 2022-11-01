import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface I_initialState {
  airBinData: [];
  airBinError: string;
  airBinLoading: boolean;
}

const initialState: I_initialState = {
  airBinData: [],
  airBinError: "",
  airBinLoading: false,
};

export const getAirBinSlice: any = createAsyncThunk(
  "airBnb/getAirBnbTasks",
  async (UserID: number, thunkApi) => {
    try {
      const res = await axios.get(`${process.env.API_BASE_URL}/smallImages`);
      console.log("res", res?.data);
      return thunkApi.fulfillWithValue(res?.data);
    } catch (error: any) {
      return thunkApi.rejectWithValue(error);
    }
  }
);


const AirBinSlice: any = createSlice({
  name: "airBin",
  initialState,
  reducers: {},
  extraReducers: {
    [getAirBinSlice.pending]: (state, action) => {
      state.airBinLoading = true;
    },
    [getAirBinSlice.fulfilled]: (state, action) => {
      state.airBinData = action.payload;
      state.airBinLoading = false;
    },
    [getAirBinSlice.rejected]: (state, action) => {
      state.airBinLoading = false;
      state.airBinError = action.payload;
    },
  },
});

export default AirBinSlice.reducer;
