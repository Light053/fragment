import { Button } from "@mui/material";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";

const TELEGRAM_BOT_ID = "7857873692";
const REDIRECT_URI = "https://fragment-six.vercel.app/auth/callback";

const TelegramAuthButton: React.FC = () => {
  const handleLogin = () => {
    window.location.href = `https://oauth.telegram.org/auth?bot_id=${TELEGRAM_BOT_ID}&origin=${encodeURIComponent(
      window.location.origin
    )}&embed=1&request_access=write&return_to=${encodeURIComponent(
      REDIRECT_URI
    )}`;
  };

  return (
    <Button
      variant="contained"
      startIcon={<TelegramIcon />}
      sx={{
        backgroundColor: "#293440",
        color: "white",
        textTransform: "none",
        fontWeight: "bold",
        boxShadow: "none",
      }}
      onClick={handleLogin}
    >
      Connect Telegram
    </Button>
  );
};

export default TelegramAuthButton;
