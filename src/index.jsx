import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import App from "./App";
import "./styles/App.css";

console.log("React is rendering..."); // Debugging line

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
