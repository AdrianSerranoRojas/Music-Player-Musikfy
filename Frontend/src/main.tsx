import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { StyledEngineProvider } from "@mui/material/styles";
import ThemeProvider from "./config/ThemeProvider";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </StyledEngineProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
