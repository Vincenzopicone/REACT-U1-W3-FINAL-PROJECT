import { configureStore, combineReducers } from "@reduxjs/toolkit";
import appReducer from "../reducers";

const rootReducers = combineReducers({
  app: appReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});
