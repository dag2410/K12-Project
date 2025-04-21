// import { thunk } from "redux-thunk";
// import { logger } from "redux-logger";
// const initState = {};

import authReducer from "@/features/auth/authSlice";
import { configureStore, Tuple } from "@reduxjs/toolkit";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";

// const rootReducer = combineReducers({
//   product: productReducer,
//   auth: authReducer,
// });

// const store = legacy_createStore(
//   rootReducer,
//   initState,
//   applyMiddleware(thunk, logger)
// );
// window.store = store;

const store = configureStore({
  reducer: {
    auth: authReducer,
    // product: productReducer,
  },
  // middleware: () => new Tuple(thunk, logger),
});


// const persistConfig = {
//   key: "root",
//   storage,
// };

export default store;
