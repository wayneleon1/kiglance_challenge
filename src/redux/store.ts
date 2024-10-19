import { configureStore } from "@reduxjs/toolkit";
import responsibilitiesReducer from "./features/responsibilitiesSlice";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const store = configureStore({
  reducer: {
    responsibilities: responsibilitiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
