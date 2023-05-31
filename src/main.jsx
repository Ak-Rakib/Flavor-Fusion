import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import ContextProvider from "./Layout/ContextProvider/ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-6xl mx-auto">
    <React.StrictMode>
      <ContextProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ContextProvider>
    </React.StrictMode>
  </div>
);
