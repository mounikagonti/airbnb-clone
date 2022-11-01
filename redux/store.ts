import { configureStore } from "@reduxjs/toolkit";
import airBinReducer from "../redux/airBin/AirBinSlice";
import bigImgReducer from "../redux/airBin/BigImageSlice";
import roomBookReducer from "../redux/airBin/BookingSlice";

export const store = configureStore({
  reducer: {
    airBin: airBinReducer,
    bigImg: bigImgReducer,
    room: roomBookReducer,
  },
});
