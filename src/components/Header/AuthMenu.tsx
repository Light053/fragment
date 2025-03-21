import {
  Avatar,
  Box,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useState } from "react";
import { setTelegramUser } from "../store/MainSlice";

export const AuthMenu = ({ openSidebar }: { openSidebar: boolean }) => {
  const { telegramUser } = useAppSelector((state) => state.main);
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("telegram_user");
    dispatch(setTelegramUser(null));
    handleClose();
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      position="relative"
      sx={{ justifyContent: isMobile ? "center" : "normal" }}
    >
      <Avatar
        alt="avatar"
        src={telegramUser?.photo_url}
        onClick={handleClick}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={
          openSidebar
            ? { vertical: "top", horizontal: "center" }
            : { vertical: "bottom", horizontal: "center" }
        }
        transformOrigin={
          openSidebar
            ? { vertical: "bottom", horizontal: "center" }
            : { vertical: "top", horizontal: "center" }
        }
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: theme.palette.primary.dark,
            borderRadius: 1,
            boxShadow: `0 4px 8px ${theme.palette.primary.dark}`,
            px: 3,
          },
        }}
      >
        <MenuItem
          onClick={handleLogout}
          sx={{
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
            height: "40px",
          }}
        >
          <Typography
            variant="body1"
            color={theme.palette.primary.contrastText}
            sx={{ fontWeight: 600 }}
          >
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
