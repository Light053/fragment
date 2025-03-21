import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { store } from "./components/store/store.ts";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Header/Header.tsx";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      contrastText: "#4db2ff",
      dark: "#293440",
    },
    secondary: {
      main: "#cbd7e5b3",
      dark: "#212a33",
    },
  },
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: 380,
      sm: 480,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <TonConnectUIProvider manifestUrl="https://80bb-45-134-219-18.ngrok-free.app/tonconnect-manifest.json">
          <BrowserRouter>
            <Navbar />
            <App />
          </BrowserRouter>
        </TonConnectUIProvider>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
