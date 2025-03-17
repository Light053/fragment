import {
  Box,
  Button,
  List,
  ListItem,
  ListSubheader,
  Typography,
  useTheme,
} from "@mui/material";
import { useAppSelector } from "../../../store/hooks";
import { ListItems } from "../components/ListItems";
import { UserInfo } from "../components/UserInfo";
import { BidHistoryComponent } from "../components/BidHistory";
import { Timer } from "../components/Timer";

export const SlotNotSold = () => {
  const { selectedUsernameSlot } = useAppSelector((state) => state.main);
  const theme = useTheme();

  if (!selectedUsernameSlot) return null;

  const {
    user: { username },
    endedAt,
    auctionEnds,
    bidHistory,
  } = selectedUsernameSlot;

  return (
    <Box marginTop={3} sx={{ paddingLeft: "10px", paddingRight: "10px" }}>
      <Box>
        <Box
          sx={{
            display: "flex",
            [theme.breakpoints.down("xs")]: {
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            },
            alignItems: "center",
            paddingLeft: 2,
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
          >{`${username}.t.me`}</Typography>

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
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
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
                    <Box sx={{ width: "33%", textAlign: "center" }}>
                      Bid Step
                    </Box>
                    <Box sx={{ width: "33%", textAlign: "center" }}>
                      Minimum Bid
                    </Box>
                  </ListSubheader>
                }
              >
                <ListItems selectedUsernameSlot={selectedUsernameSlot} />
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
            }}
          >
            <UserInfo username={username} />
            <Box ml={1}>
              <Timer remainingTime={auctionEnds} />
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography variant="h5" fontWeight={"bold"} p={2} mt={2}>
            Bid History
          </Typography>
          <List
            sx={{
              width: "100%",
            }}
          >
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
              <Typography sx={{ textAlign: "left", paddingLeft: 2 }}>
                Price
              </Typography>
              <Typography sx={{ textAlign: "left", paddingLeft: 2 }}>
                Date
              </Typography>
              <Typography sx={{ textAlign: "left", paddingLeft: 2 }}>
                From
              </Typography>
            </ListSubheader>

            <BidHistoryComponent bidHistory={bidHistory} />
          </List>
        </Box>
      </Box>
    </Box>
  );
};
