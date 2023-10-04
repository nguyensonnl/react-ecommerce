// import { combineReducers, createStore } from "redux";
// import authReducer from "./reducers/authReducer";
// import userReducer from "./reducers/userReducer";

// const rootReducer = combineReducers({
//   auth: authReducer,
//   user: userReducer,
// });

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
//import { authReducer } from "./authSlice";
import persistedAuthReducer from "./authSlice";
//import { customerReducer } from "./customerSlice";
import persistedCustomerReducer from "./customerSlice";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    //auth: authReducer,
    auth: persistedAuthReducer,
    //customer: customerReducer,
    customer: persistedCustomerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
