import React from "react";
import ReactDOM from "react-dom/client";
import App from "./core/App.tsx";
import { GlobalStyle } from "./core/GlobalStyles.ts";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyle />
    <App />
    </ThemeProvider>
  </React.StrictMode>
);
