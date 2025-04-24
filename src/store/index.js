import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import authReducer from "@/features/auth/authSlice";
import persistStore from "redux-persist/es/persistStore";
import { profileApi } from "@/features/profile/profileSlice";
import persistReducer from "redux-persist/es/persistReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  [profileApi.reducerPath]: profileApi.reducer,
});

export const store = configureStore({
  reducer: persistReducer(rootConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger, profileApi.middleware),
});

export const persistor = persistStore(store);
