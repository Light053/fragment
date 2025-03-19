import { Box } from "@mui/material";
import TelegramAuthButton from "../../TelegramAuthButton/TelegramAuthButton";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("auth") === "true") {
      navigate("/usernames");
    }
  }, [navigate]);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#1a2026",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TelegramAuthButton />
    </Box>
  );
};
