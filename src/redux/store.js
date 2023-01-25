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
import { productReducer } from "./reducers/productSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
