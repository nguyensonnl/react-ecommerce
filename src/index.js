import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./components/GlobalStyles";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import axios from "./api/axiosClient";
import { getTotals } from "./redux/cartSlice";
//axios();

store.dispatch(getTotals());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyles>
          <App />
        </GlobalStyles>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
