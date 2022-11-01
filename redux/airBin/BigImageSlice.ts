import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface I_initialState {
  bigImgData: [];
  bigImgError: string;
  bigImgLoading: boolean;
}

const initialState: I_initialState = {
  bigImgData: [],
  bigImgError: "",
  bigImgLoading: false,
};

export const getBigAirBinSlice: any = createAsyncThunk(
  "airBnb/getBigAirBnbTasks",
  async (UserID: number, thunkApi) => {
    try {
      const res = await axios.get(`${process.env.API_BASE_URL}/bigImages`);
      console.log("res", res?.data);
      return thunkApi.fulfillWithValue(res?.data);
    } catch (error: any) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const BigImageSlice: any = createSlice({
  name: "bigImg",
  initialState,
  reducers: {},
  extraReducers: {
    [getBigAirBinSlice.pending]: (state, action) => {
      state.bigImgLoading = true;
    },
    [getBigAirBinSlice.fulfilled]: (state, action) => {
      state.bigImgData = action.payload;
      state.bigImgLoading = false;
    },
    [getBigAirBinSlice.rejected]: (state, action) => {
      state.bigImgLoading = false;
      state.bigImgError = action.payload;
    },
  },
});

export default BigImageSlice.reducer;
