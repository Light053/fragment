import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useAppDispatch } from "../../store/hooks";
import { setTelegramUser } from "../../store/MainSlice";

const AuthCallback = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("id");
    const firstName = params.get("first_name");
    const username = params.get("username");
    const authDate = params.get("auth_date");
    const hash = params.get("hash");

    if (userId && authDate && hash) {
      const telegramUser = {
        id: Number(userId),
        first_name: firstName ?? "",
        username: username ?? "",
        auth_date: Number(authDate),
        hash,
      };

      dispatch(setTelegramUser(telegramUser));
      localStorage.setItem("telegram_user", JSON.stringify(telegramUser));
      setTimeout(() => navigate("/"), 1500);
    } else {
      setTimeout(() => navigate("/login"), 1500);
    }
  }, [navigate, dispatch]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <CircularProgress size={60} />
      <Typography mt={2} variant="h6" color="textSecondary">
        Authorization...
      </Typography>
    </Box>
  );
};

export default AuthCallback;
