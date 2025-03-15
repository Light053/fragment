import { ListItem, Box, Typography, Link, useTheme } from "@mui/material";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { User } from "../../store/types";

export const UserListItem = ({
  user,
  minBid,
  usdEquivalent,
  auctionEnds,
  endedAt,
}: {
  user: User;
  minBid: number;
  usdEquivalent: string;
  auctionEnds: string;
  endedAt: string | null;
}) => {
  const theme = useTheme();

  return (
    <ListItem
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
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", textTransform: "lowercase" }}
        >
          @{user.username}
        </Typography>
        <Link
          href="#"
          variant="body2"
          color="text.secondary"
          sx={{
            textDecoration: "none",
            color: (theme) => theme.palette.primary.contrastText,
          }}
        >
          {`${user.username}.t.me`}
        </Link>
      </Box>
      <Box
        sx={{ flex: 1, [theme.breakpoints.down("md")]: { display: "none" } }}
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
          color="text.secondary"
          sx={{ color: (theme) => theme.palette.secondary.main }}
        >
          {usdEquivalent}
        </Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="body1"
          sx={{ color: auctionEnds === "Sold" ? "red" : "" }}
        >
          {auctionEnds}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: (theme) => theme.palette.secondary.main }}
        >
          {endedAt ? endedAt.toLocaleString() : auctionEnds}
        </Typography>
      </Box>
      <Box>
        <ArrowForwardIosIcon fontSize="inherit" color="secondary" />
      </Box>
    </ListItem>
  );
};
