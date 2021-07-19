import React from "react";
import ReactDOM from "react-dom";
import { ModelManager } from "@adobe/aem-spa-page-model-manager";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Initialize the ModelManager before invoking ReactDOM.render(...).
ModelManager.initializeAsync();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
