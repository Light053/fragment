import {
  ListItem,
  Box,
  Typography,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Slot } from "../../store/types";
import { Sold } from "../../Sold/Sold";

export const UserListItem = ({
  slot,
  navigate,
}: {
  slot: Slot;
  navigate: (slot: Slot) => void;
}) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const { auctionEndDate, auctionEnds, endedAt, minBid, usdEquivalent, user } =
    slot;

  return (
    <ListItem
      onClick={() => navigate(slot)}
      sx={{
        display: "flex",
        px: 2,
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        "&:last-child": {
          borderBottom: "none",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        },
        backgroundColor: (theme) => theme.palette.secondary.dark,
        "&:hover": { backgroundColor: "#293440" },
        cursor: "pointer",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            [theme.breakpoints.down("xs")]: {
              flexDirection: "column",
              alignItems: "flex-start",
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              textTransform: "lowercase",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: "150px",
              [theme.breakpoints.down("md")]: { fontSize: "12px" },
            }}
          >
            @{user.username}
          </Typography>
          {endedAt && <Sold />}
        </Box>
        <Link
          href="#"
          variant="body2"
          sx={{
            textDecoration: "none",
            color: (theme) => theme.palette.primary.contrastText,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth: "100px",
            [theme.breakpoints.down("md")]: { fontSize: "10px" },
          }}
        >
          {`${user.username}.t.me`}
        </Link>
      </Box>
      <Box
        sx={{
          flex: 1,
          paddingLeft: {
            xs: 0,
            sm: "clamp(0px, 5vw, 56px)",
            md: "clamp(0px, calc(10vw - 20px), 56px)",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <DiamondOutlinedIcon
            sx={{ mr: 1 }}
            fontSize="small"
            color="primary"
          />
          <Typography variant="body1">{minBid}</Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: (theme) => theme.palette.secondary.main,
            [theme.breakpoints.down("md")]: { display: "none" },
          }}
        >
          {usdEquivalent}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: (theme) => theme.palette.secondary.main,
            fontSize: "12px",
            [theme.breakpoints.up("md")]: { display: "none" },
          }}
        >
          {endedAt ? endedAt : auctionEndDate}
        </Typography>
      </Box>
      {isMdUp && (
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="body1"
            sx={{
              color: auctionEnds === "Sold" ? "red" : "inherit",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              fontSize: "14px",
            }}
          >
            {auctionEnds === "Sold" ? "Sold" : auctionEnds}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: (theme) => theme.palette.secondary.main,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {endedAt ? endedAt : auctionEndDate}
          </Typography>
        </Box>
      )}
      <Box>
        <ArrowForwardIosIcon fontSize="inherit" color="secondary" />
      </Box>
    </ListItem>
  );
};
