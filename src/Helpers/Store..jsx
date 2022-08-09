import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import videoReducer from "./VideoSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    video: videoReducer,
  },
});
