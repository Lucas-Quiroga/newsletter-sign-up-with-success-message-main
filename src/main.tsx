import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../src/index.css";
import { ServicesContextProvider } from "./context/ServicesContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ServicesContextProvider>
      <App />
    </ServicesContextProvider>
  </React.StrictMode>
);
