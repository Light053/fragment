import { Button } from "@mui/material";
import React, { useEffect } from "react";
import TelegramIcon from "@mui/icons-material/Telegram";

declare global {
  interface Window {
    TelegramLoginWidget?: {
      dataOnauth: (user: TelegramUser) => void;
    };
  }
}

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
}

const TelegramAuthButton: React.FC = () => {
  useEffect(() => {
    window.TelegramLoginWidget = {
      dataOnauth: (user) => {
        console.log(user);
      },
    };

    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.setAttribute("data-telegram-login", "AuthBot_3232_bot");
    script.setAttribute("data-size", "large");
    script.setAttribute("data-onauth", "TelegramLoginWidget.dataOnauth(user)");
    script.async = true;

    document.getElementById("telegram-button")?.appendChild(script);
  }, []);

  return (
    <Button
      id="telegram-button"
      variant="contained"
      startIcon={<TelegramIcon />}
      sx={{
        backgroundColor: "#293440",
        color: "white",
        textTransform: "none",
        fontWeight: "bold",
        boxShadow: "none",
      }}
    >
      Connect Telegram
    </Button>
  );
};

export default TelegramAuthButton;
