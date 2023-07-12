import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import {Prodvider} from "react-redux"
import store from "./store"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store} >
    <App />
  </Provider>
);
