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
import { User } from "../../store/types";
import { useNavigate } from "react-router-dom";

export const UserListItem = ({
  user,
  minBid,
  usdEquivalent,
  auctionEnds,
  endedAt,
  auctionEndDate,
}: {
  user: User;
  minBid: number;
  usdEquivalent: string;
  auctionEnds: string;
  endedAt: string | null;
  auctionEndDate: string;
}) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();

  return (
    <ListItem
      onClick={() => navigate(`/usernames/${user.username}`)}
      sx={{
        display: "flex",
        px: 2,
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        "&:last-child": {
          borderBottom: "none",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        },
        backgroundColor: "#212a33",
        "&:hover": { backgroundColor: "#293440" },
        cursor: "pointer",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
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
          <Box
            sx={{
              width: "fit-content",
              borderRadius: "5px",
              fontWeight: "bold",
              marginLeft: "5px",
              fontSize: "10px",
              color: "#ff5863",
              backgroundColor: "rgba(255, 88, 99, 0.1)",
              padding: "2px 5px",
              [theme.breakpoints.up("md")]: { display: "none" },
            }}
          >
            Sold
          </Box>
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
          sx={{ color: (theme) => theme.palette.secondary.main }}
        >
          {usdEquivalent}
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
