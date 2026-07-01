import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/common.css";
import "./styles/login.css";
import "./styles/machine.css";
import "./styles/responsive.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);