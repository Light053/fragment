import {
  Box,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Slot } from "../../../store/types";
import { ArrowForwardIos, DiamondOutlined } from "@mui/icons-material";
import { Sold } from "../../../Sold/Sold";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { changeSelectedNumberSlot } from "../../../store/MainSlice";

export const NumberListItem = ({ slot }: { slot: Slot }) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (!slot) return null;

  const handleNavigate = () => {
    navigate(`/numbers/${slot.user.phone}`);
    dispatch(changeSelectedNumberSlot(slot));
  };

  const { endedAt, auctionEndDate, auctionEnds, minBid, usdEquivalent, user } =
    slot;

  return (
    <ListItem
      onClick={handleNavigate}
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
              fontSize: "14px",
              [theme.breakpoints.down("md")]: { fontSize: "12px" },
            }}
          >
            {user.phone}
          </Typography>

          {endedAt ? (
            <Sold />
          ) : (
            <Box
              sx={{
                width: "fit-content",
                borderRadius: "5px",
                fontWeight: "bold",
                marginLeft: "5px",
                fontSize: "12px",
                color: (theme) => theme.palette.secondary.main,
                backgroundColor: (theme) => theme.palette.primary.dark,
                padding: "2px 5px",
                mx: 1,
                [theme.breakpoints.down("xs")]: {
                  ml: 0,
                },
              }}
            >
              Resale
            </Box>
          )}
        </Box>
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
          <DiamondOutlined
            sx={{ mr: "5px", fontSize: "18px" }}
            color="primary"
          />
          <Typography variant="body1" fontWeight={700} fontSize={"14px"}>
            {minBid}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: (theme) => theme.palette.secondary.main,
            [theme.breakpoints.down("md")]: { display: "none" },
            fontSize: "12px",
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
        <ArrowForwardIos fontSize="inherit" color="secondary" />
      </Box>
    </ListItem>
  );
};
