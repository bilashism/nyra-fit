import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

export const APP_SERVER = import.meta.env.VITE_APP_SERVER;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
