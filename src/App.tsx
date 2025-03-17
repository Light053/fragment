import { Box } from "@mui/material";
import "./App.css";
import { useAppSelector } from "./components/store/hooks";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Usernames from "./components/pages/Usernames/Usernames";
import { UsernameDetails } from "./components/pages/UsernameDetails/UsernameDetails";

function App() {
  const { tab } = useAppSelector((state) => state.main);

  return (
    <Box sx={{ maxWidth: "720px", width: "100%", margin: "0 auto" }}>
      <Routes>
        <Route
          path="/"
          element={tab === "usernames" ? <Usernames /> : <h1>numbers</h1>}
        />
        <Route path="/usernames" element={<Usernames />} />
        <Route path="/numbers" element={<h1>numbers</h1>} />
        <Route path="/usernames/:username" element={<UsernameDetails />} />
      </Routes>
    </Box>
  );
}
export default App;
