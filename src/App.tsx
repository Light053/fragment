import { Box } from "@mui/material";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Usernames from "./components/pages/Usernames/Usernames";
import { UsernameDetails } from "./components/pages/UsernameDetails/UsernameDetails";
import { Numbers } from "./components/pages/Numbers/Numbers";
import { NumberDetails } from "./components/pages/NumberDetails/NumberDetails";
import AuthCallback from "./components/pages/AuthCallback/AuthCallback";

function App() {
  return (
    <Box sx={{ maxWidth: "720px", width: "100%", margin: "0 auto" }}>
      <Routes>
        <Route path="/" element={<Usernames />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route
          path="/*"
          element={
            <Routes>
              <Route path="/usernames" element={<Usernames />} />
              <Route path="/numbers" element={<Numbers />} />
              <Route
                path="/usernames/:username"
                element={<UsernameDetails />}
              />
              <Route path="/numbers/:number" element={<NumberDetails />} />
            </Routes>
          }
        />
      </Routes>
    </Box>
  );
}

export default App;
