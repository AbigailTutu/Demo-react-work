/* eslint-disable no-undef */
import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./slice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const localStorageConfig = {
  key: "Comments",
  storage,
};

const commentReducer = combineReducers({ comments: commentSlice });

const persistedReducer = persistReducer(localStorageConfig, commentReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
