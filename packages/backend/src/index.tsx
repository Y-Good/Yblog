import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@arco-design/web-react/dist/css/arco.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(<BrowserRouter><App /></BrowserRouter>);
