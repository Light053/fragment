import { Box } from "@mui/material";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Usernames from "./components/pages/Usernames/Usernames";
import { UsernameDetails } from "./components/pages/UsernameDetails/UsernameDetails";
import { Numbers } from "./components/pages/Numbers/Numbers";
import { NumberDetails } from "./components/pages/NumberDetails/NumberDetails";

import { AuthPage } from "./components/pages/Auth/Auth";
import AuthCallback from "./components/pages/AuthCallback/AuthCallback";

function App() {
  const isAuthenticated = localStorage.getItem("telegram_user") != null;

  return (
    <Box sx={{ maxWidth: "720px", width: "100%", margin: "0 auto" }}>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Usernames /> : <Navigate to="/auth" />}
        />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <Routes>
                <Route path="/usernames" element={<Usernames />} />
                <Route path="/numbers" element={<Numbers />} />
                <Route
                  path="/usernames/:username"
                  element={<UsernameDetails />}
                />
                <Route path="/numbers/:number" element={<NumberDetails />} />
              </Routes>
            ) : (
              <Navigate to="/auth" />
            )
          }
        />
      </Routes>
    </Box>
  );
}

export default App;
