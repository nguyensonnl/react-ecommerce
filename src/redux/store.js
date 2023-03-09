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
import { productReducer } from "./reducers/productSlice";
import { categoryReducer } from "./categorySlice";
import { brandReducer } from "./brandSlice";
import { authReducer } from "./authSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    cart: cartReducer,
    brand: brandReducer,
    auth: authReducer,
  },
});

export default store;
