import DiamondOutlined from "@mui/icons-material/DiamondOutlined";
import { Box, ListItem, Typography } from "@mui/material";
import { Slot } from "../../../store/types";

export const ListItems = ({
  selectedUsernameSlot,
}: {
  selectedUsernameSlot: Slot;
}) => {
  const { bidHistory } = selectedUsernameSlot;

  const HighestBid = Math.max(...bidHistory.map((bid) => bid.bid));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          backgroundColor: (theme) => theme.palette.secondary.dark,
          fontWeight: "bold",
          fontSize: "14px",
          width: "100%",
        }}
      >
        <ListItem
          sx={{
            width: "33%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingLeft: "16px !important",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <DiamondOutlined
              sx={{
                color: "#1976d2",
                fontSize: "18px",
                marginRight: "4px",
              }}
            />
            <Box sx={{ flex: 1 }}>{HighestBid}</Box>
          </Box>
          <Typography
            sx={{
              color: (theme) => theme.palette.secondary.main,
              fontSize: "12px",
            }}
          >
            ~$21,276
          </Typography>
        </ListItem>
        <ListItem
          sx={{
            width: "33%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <DiamondOutlined
              sx={{
                color: "#1976d2",
                fontSize: "18px",
                marginRight: "4px",
              }}
            />
            <Box sx={{ flex: 1 }}>315</Box>
          </Box>
          <Typography
            sx={{
              color: (theme) => theme.palette.secondary.main,
              fontSize: "12px",
            }}
          >
            5%
          </Typography>
        </ListItem>
        <ListItem
          sx={{
            width: "33%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingLeft: "0px !important",
            paddingRight: "46px !important",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <DiamondOutlined
              sx={{
                color: "#1976d2",
                fontSize: "18px",
                marginRight: "4px",
              }}
            />
            <Box sx={{ flex: 1 }}>6,615</Box>
          </Box>
          <Typography
            sx={{
              color: (theme) => theme.palette.secondary.main,
              fontSize: "12px",
            }}
          >
            ~$22,340
          </Typography>
        </ListItem>
      </Box>
      <ListItem
        sx={{
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          backgroundColor: (theme) => theme.palette.secondary.dark,

          cursor: "pointer",
          "&:hover": {
            textDecoration: "underline",
            color: "#1976d2",
          },
        }}
      ></ListItem>
    </>
  );
};
