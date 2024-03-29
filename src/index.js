import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";

//router
import { BrowserRouter } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { getTotals } from "./redux/cartSlice";
//end redux

//import axios from "./api/axiosClient";
//axios();

//redux-persist
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
const persistor = persistStore(store);
//end redux-persist
store.dispatch(getTotals());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
