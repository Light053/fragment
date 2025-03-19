import React, { useEffect } from "react";

const TelegramAuthButton: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;
    script.setAttribute("data-telegram-login", "AuthBot_3232_bot");
    script.setAttribute("data-size", "large");
    script.setAttribute("data-radius", "14");
    script.setAttribute(
      "data-auth-url",
      "https://fragment-six.vercel.app/auth/callback"
    );
    script.setAttribute("data-request-access", "write");
    document.getElementById("telegram-button-container")?.appendChild(script);
  }, []);

  return <div id="telegram-button-container"></div>;
};

export default TelegramAuthButton;
