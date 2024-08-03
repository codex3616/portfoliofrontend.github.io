import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import { PathnameProvider } from "./components/Layout/PageTransition/PathnameContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <PathnameProvider>
        <App />
      </PathnameProvider>
    </Router>
  </React.StrictMode>
);
