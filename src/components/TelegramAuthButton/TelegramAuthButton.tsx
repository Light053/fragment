import { LoginButton } from "@telegram-auth/react";
import React, { useEffect } from "react";

const TelegramAuthButton: React.FC = () => {
  return (
    <LoginButton
      botUsername="AuthBot_3232_bot"
      authCallbackUrl="https://fragment-six.vercel.app/auth/callback"
      buttonSize="large"
      cornerRadius={20}
      showAvatar
      lang="en"
    />
  );
};

export default TelegramAuthButton;
