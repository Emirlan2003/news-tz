import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import newsSlice from "./slices/news/newsSlice";

const rootReducer = combineReducers({
  news: newsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
