import {
  Box,
  Button,
  List,
  ListSubheader,
  Typography,
  useTheme,
} from "@mui/material";
import { useAppSelector } from "../../../store/hooks";
import { ListItems } from "../../UsernameDetails/components/ListItems";
import { Timer } from "../../UsernameDetails/components/Timer";
import { BidHistoryComponent } from "../../UsernameDetails/components/BidHistoryComponent";
import { OwnerShipHistory } from "../../../OwnerShipHistory/OwnerShipHistory";

export const NumberSlotNotSold = () => {
  const { selectedNumberSlot } = useAppSelector((state) => state.main);

  const theme = useTheme();

  if (!selectedNumberSlot) return null;

  const { user, auctionEnds, bidHistory, ownershipHistory } =
    selectedNumberSlot;
  const { phone } = user;

  return (
    <Box mt={3} px={"10px"}>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingLeft: 2,
            [theme.breakpoints.down("xs")]: {
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              paddingLeft: 0,
            },
          }}
        >
          <Typography
            sx={{
              [theme.breakpoints.down("xs")]: {
                fontSize: "18px",
                textAlign: "center",
                mb: 1,
              },
            }}
            variant="h5"
            fontWeight={"bold"}
          >{`${phone}`}</Typography>

          <Box
            sx={{
              width: "fit-content",
              borderRadius: "5px",
              fontWeight: "bold",
              marginLeft: "10px",
              [theme.breakpoints.down("xs")]: {
                marginLeft: "0px",
              },
              fontSize: "12px",
              color: "rgba(90, 236, 140, 1)",
              backgroundColor: "rgba(90, 236, 140, 0.1)",
              padding: "2px 5px",
            }}
          >
            On auction
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "stretch",
          width: "100%",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            maxWidth: "50%",
            width: "100%",
            [theme.breakpoints.down("md")]: {
              maxWidth: "100%",
            },
            flexGrow: 1,
          }}
        >
          <Box marginTop={3} sx={{ width: "100%" }}>
            <List
              subheader={
                <ListSubheader
                  sx={{
                    display: "flex",
                    width: "100%",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    height: "40px",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    backgroundColor: (theme) => theme.palette.primary.dark,
                    color: (theme) => theme.palette.secondary.main,
                  }}
                >
                  <Box sx={{ width: "33%", textAlign: "center" }}>
                    Highest Bid
                  </Box>
                  <Box sx={{ width: "33%", textAlign: "center" }}>Bid Step</Box>
                  <Box sx={{ width: "33%", textAlign: "center" }}>
                    Minimum Bid
                  </Box>
                </ListSubheader>
              }
            >
              <ListItems selectedUsernameSlot={selectedNumberSlot} />
            </List>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Button
              sx={{
                paddingTop: "10px",
                paddingBottom: "10px",
                marginTop: "10px",
                width: "100%",
                bgcolor: "#248bda",
                color: "#fff",
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              Place Bid
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            ml: 3,

            mt: 3,
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
              alignItems: "center",
              ml: 0,
            },
            flexGrow: 1,
          }}
        >
          <Box
            sx={{
              backgroundColor: (theme) => theme.palette.secondary.dark,
            }}
            p={2}
            pb={"28px"}
            borderRadius={"10px"}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
                Anonymous number
              </Typography>
              <Typography
                fontSize={"13px"}
                sx={{ color: (theme) => theme.palette.primary.contrastText }}
              >
                {phone}
              </Typography>
            </Box>
            <Typography
              sx={{
                mt: 1,
                fontSize: "12px",
                color: (theme) => theme.palette.secondary.main,
              }}
            >
              This anonymous number can be used to create a Telegram account not
              tied to a SIM card.
            </Typography>
          </Box>
          <Box ml={1}>
            <Timer remainingTime={auctionEnds} />
          </Box>
        </Box>
      </Box>
      <BidHistoryComponent bidHistory={bidHistory} />
      <OwnerShipHistory ownershipHistory={ownershipHistory} transferred />
    </Box>
  );
};
