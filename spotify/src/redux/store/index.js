import { configureStore, combineReducers } from "@reduxjs/toolkit";
import appReducer from "../reducers";
/* import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt"; */

/* const persistConfig = {
  key: "root",
  storage: storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_PERSIST_KEY,
    }),
  ],
}; */

const rootReducers = combineReducers({
  app: appReducer,
});

/* const persistedReducer = persistReducer(persistConfig, rootReducers); */

export const store = configureStore({
  reducer: rootReducers,
});

/* export const persistor = persistStore(store); */
