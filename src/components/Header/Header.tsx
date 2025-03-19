import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DiamondIcon from "@mui/icons-material/Diamond";
import MenuIcon from "@mui/icons-material/Menu";
import LogoIcon from "../../assets/logoIcon.svg";
import {
  Tab,
  Tabs,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeTab, setTelegramUser } from "../store/MainSlice";
import { useNavigate } from "react-router-dom";
import { HeaderSidebar } from "./HeaderSidebar";

export const Navbar = () => {
  const { telegramUser, tab } = useAppSelector((state) => state.main);

  const [value, setValue] = React.useState<"usernames" | "numbers">(tab);
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const handleTabChange = (
    _event: React.SyntheticEvent,
    newValue: "usernames" | "numbers"
  ) => {
    navigation(`/${newValue}`);
    setValue(newValue);
    dispatch(changeTab(newValue));
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("telegram_user");
    dispatch(setTelegramUser(null));
    navigation("/auth");
    handleClose();
  };

  const goToMain = () => {
    navigation(`/`);
    setValue("usernames");
    dispatch(changeTab("usernames"));
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#212a33e6", boxShadow: "none" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: `${isMobile ? "flex-start" : "center"}`,
            minHeight: "46px",
            paddingTop: `${isMobile ? "8px" : "0"}`,
            marginBottom: isMobile ? 0 : -1,
            gap: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: `${isMobile ? "center" : "flex-start"}`,
              flexDirection: `${isMobile ? "column" : "row"}`,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                justifyContent: "flex-start",
                minWidth: "calc((100vw - 760px) / 2)",
                marginLeft: `${isMobile ? "-100px" : "0"}`,
              }}
            >
              <img
                src={LogoIcon}
                width={`${isMobile ? "34px" : "44px"}`}
                height={`${isMobile ? "34px" : "44px"}`}
                alt="logoIcon"
              />
              <Typography
                sx={{
                  fontSize: `${isMobile ? "16px" : "20px"}`,
                  color: "#fff",
                }}
                component="div"
              >
                <Typography
                  variant="h6"
                  sx={{ cursor: "pointer" }}
                  onClick={goToMain}
                >
                  FRAGMENT
                </Typography>
              </Typography>
            </Box>

            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Tabs
                value={value}
                onChange={handleTabChange}
                sx={{ minHeight: 40 }}
              >
                <Tab
                  label="Usernames"
                  value="usernames"
                  sx={{
                    fontWeight: "bold",
                    color: (theme) => theme.palette.secondary.main,
                    textTransform: "none",
                    "&.Mui-selected": { color: "#fff" },
                    transition: "color 0.3s ease-in-out",
                    "&:hover": { color: "rgba(255, 255, 255, 0.8)" },
                  }}
                />
                <Tab
                  label="Numbers"
                  value="numbers"
                  sx={{
                    fontWeight: "bold",
                    color: "#cbd7e5b3",
                    textTransform: "none",
                    "&.Mui-selected": { color: "#fff" },
                    transition: "color 0.3s ease-in-out",
                    "&:hover": { color: "rgba(255, 255, 255, 0.8)" },
                  }}
                />
              </Tabs>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexDirection: `${isMobile ? "row-reverse" : "row"}`,
            }}
          >
            {isMobile && (
              <IconButton onClick={() => setOpen(true)} sx={{ color: "white" }}>
                <MenuIcon />
              </IconButton>
            )}

            <Box display="flex" alignItems="center">
              <Avatar
                alt="avatar"
                src={telegramUser?.photo_url}
                onClick={handleClick}
              />
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{
                  "& .MuiPaper-root": {
                    backgroundColor: theme.palette.primary.dark,
                    borderRadius: 1,
                    boxShadow: `0 4px 8px ${theme.palette.primary.dark}`,
                    mt: 1,
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

            <Button
              variant="contained"
              startIcon={<DiamondIcon />}
              sx={{
                backgroundColor: "#007BFF",
                color: "white",
                textTransform: "none",
                fontWeight: "bold",
                display: `${isSmall ? "none" : "flex"}`,
              }}
            >
              Connect TON
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <HeaderSidebar open={open} onClose={() => setOpen(false)} />
    </>
  );
};
