import React from "react";
import ReactDOM from "react-dom/client";  // Import from 'react-dom/client' for React 18+
import "./styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// For React 18 and above, use createRoot
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
