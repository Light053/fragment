import { Box, List, ListItem, ListSubheader, Typography } from "@mui/material";
import { BidHistory } from "../../../store/types";
import { DiamondOutlined } from "@mui/icons-material";

export const BidHistoryComponent = ({
  bidHistory,
}: {
  bidHistory: BidHistory[];
}) => {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" p={2} mt={2}>
        Bid History
      </Typography>
      <List sx={{ width: "100%" }}>
        <ListSubheader
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            alignItems: "center",
            height: "40px",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            fontWeight: "bold",
            backgroundColor: (theme) => theme.palette.primary.dark,
            color: (theme) => theme.palette.secondary.main,
            paddingX: 2,
          }}
        >
          <Typography
            sx={{
              textAlign: "left",
              paddingLeft: 2,
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            Price
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              paddingLeft: 2,
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            Date
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              paddingLeft: 2,
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            From
          </Typography>
        </ListSubheader>

        {bidHistory.map((bid, index) => (
          <ListItem
            key={index}
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              alignItems: "center",
              bgcolor: (theme) => theme.palette.secondary.dark,
              p: 1,
              "&:last-child": {
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
              },
              paddingX: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              <DiamondOutlined sx={{ color: "#1976d2", fontSize: "18px" }} />
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {bid.bid}
              </Typography>
            </Box>
            <Typography
              sx={{
                textAlign: "left",
                paddingLeft: 2,
                color: (theme) => theme.palette.secondary.main,
                fontSize: "12px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
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
      </List>
    </Box>
  );
};
