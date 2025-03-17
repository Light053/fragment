import { Box, ListItem, Typography } from "@mui/material";
import { BidHistory } from "../../../store/types";
import { DiamondOutlined } from "@mui/icons-material";

export const BidHistoryComponent = ({
  bidHistory,
}: {
  bidHistory: BidHistory[];
}) => {
  return (
    <Box>
      {bidHistory.map((bid, index) => (
        <ListItem
          key={index}
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            alignItems: "center",
            bgcolor: (theme) => theme.palette.secondary.dark,
            p: 1,
            paddingX: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <DiamondOutlined sx={{ color: "#1976d2", fontSize: "18px" }} />
            <Typography sx={{ color: "#fff", fontWeight: "bold" }}>
              {bid.bid}
            </Typography>
          </Box>
          <Typography
            sx={{
              textAlign: "left",
              paddingLeft: 2,
              color: (theme) => theme.palette.secondary.main,
              fontSize: "12px",
            }}
          >
            {bid.date}
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              paddingLeft: 2,
              color: (theme) => theme.palette.primary.contrastText,
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              maxWidth: "150px",
            }}
          >
            {bid.from}
          </Typography>
        </ListItem>
      ))}
    </Box>
  );
};
