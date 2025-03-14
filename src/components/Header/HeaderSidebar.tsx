import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Sidebar } from "../Sidebar/Sidebar";
import InfoIcon from "@mui/icons-material/Info";
import PolicyIcon from "@mui/icons-material/Policy";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import TelegramIcon from "@mui/icons-material/Telegram";
import DiamondIcon from "@mui/icons-material/Diamond";

export const HeaderSidebar = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const menuItems = [
    { text: "About", icon: <InfoIcon /> },
    { text: "Terms", icon: <FactCheckIcon /> },
    { text: "Privacy Policy", icon: <PolicyIcon /> },
  ];

  return (
    <Sidebar open={open} onClose={onClose} anchor="right">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          position: "relative",
          padding: 2,
        }}
      >
        <Box sx={{ marginTop: "20px" }}>
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "white",
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box>
          <Typography
            sx={{ fontSize: "10px", fontWeight: "bold", color: "#cbd7e5b3" }}
          >
            PLATFORM
          </Typography>
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} sx={{ paddingLeft: 0 }}>
                <ListItemIcon
                  sx={{ color: "#fff" }}
                  style={{ minWidth: "36px" }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box
          sx={{
            marginTop: "auto",
            textAlign: "center",
          }}
        >
          <Typography>
            Connect TON and Telegram <br /> to view your bids and assets
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 1,
              marginTop: 2,
            }}
          >
            <Button
              variant="contained"
              startIcon={<TelegramIcon />}
              sx={{
                backgroundColor: "#293440",
                color: "white",
                textTransform: "none",
                fontWeight: "bold",
                width: "100%",
                boxShadow: "none",
              }}
            >
              Connect Telegram
            </Button>

            <Button
              variant="contained"
              startIcon={<DiamondIcon />}
              sx={{
                backgroundColor: "#007BFF",
                color: "white",
                textTransform: "none",
                width: "100%",
                fontWeight: "bold",
              }}
            >
              Connect TON
            </Button>
          </Box>
        </Box>
      </Box>
    </Sidebar>
  );
};
