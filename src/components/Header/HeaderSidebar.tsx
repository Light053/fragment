import {
  Box,
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
import { TonConnectButton } from "@tonconnect/ui-react";

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
            Connect TON <br /> to view your bids and assets
          </Typography>

          <Box
            sx={{
              width: "100%",
              display: "flex !important",
              height: "50px",
              justifyContent: "center",
            }}
          >
            <TonConnectButton
              style={{ width: "100%", display: "flex !important" }}
            />
          </Box>
        </Box>
      </Box>
    </Sidebar>
  );
};
