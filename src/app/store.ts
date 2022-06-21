import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import HeaderHeadingSlice from "../features/HeaderHeading/HeaderHeadingSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    headerHeading: HeaderHeadingSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
