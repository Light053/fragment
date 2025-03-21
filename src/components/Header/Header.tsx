import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import LogoIcon from "../../assets/logoIcon.svg";
import {
  Tab,
  Tabs,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeTab } from "../store/MainSlice";
import { useNavigate } from "react-router-dom";
import { HeaderSidebar } from "./HeaderSidebar";
import { TonConnectButton } from "@tonconnect/ui-react";
import TelegramAuthButton from "../TelegramAuthButton/TelegramAuthButton";
import { AuthMenu } from "./AuthMenu";

export const Navbar = () => {
  const { telegramUser, tab } = useAppSelector((state) => state.main);

  const [value, setValue] = React.useState<"usernames" | "numbers">(tab);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const customWidth = useMediaQuery("(max-width: 560px)");

  const handleTabChange = (
    _event: React.SyntheticEvent,
    newValue: "usernames" | "numbers"
  ) => {
    navigation(`/${newValue}`);
    setValue(newValue);
    dispatch(changeTab(newValue));
  };

  const goToMain = () => {
    navigation(`/`);
    setValue("usernames");
    dispatch(changeTab("usernames"));
  };

  React.useEffect(() => {
    if (telegramUser) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [telegramUser]);

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
                marginLeft: `${isMobile ? "-90px" : ""}`,
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

            {isAuth && <AuthMenu openSidebar={open} />}

            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
              }}
            >
              {!isAuth && !customWidth && <TelegramAuthButton />}

              {!open && (
                <Box
                  sx={{
                    [theme.breakpoints.down("md")]: { display: "none" },
                    [theme.breakpoints.up("md")]: { display: "flex" },
                  }}
                >
                  <TonConnectButton />
                </Box>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <HeaderSidebar open={open} onClose={() => setOpen(false)} />
    </>
  );
};
