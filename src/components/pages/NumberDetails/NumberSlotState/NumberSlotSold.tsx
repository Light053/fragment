import {
  Box,
  List,
  ListItem,
  ListSubheader,
  Typography,
  useTheme,
} from "@mui/material";
import { useAppSelector } from "../../../store/hooks";
import { DiamondOutlined } from "@mui/icons-material";
import { OwnerShipHistory } from "../../../OwnerShipHistory/OwnerShipHistory";
import { BidHistoryComponent } from "../../UsernameDetails/components/BidHistoryComponent";

export const NumberSlotSold = () => {
  const { selectedNumberSlot } = useAppSelector((state) => state.main);

  const theme = useTheme();

  if (!selectedNumberSlot) return null;

  const { user, slotWinner, ownershipHistory, bidHistory } = selectedNumberSlot;
  const { phone } = user;

  return (
    <Box mt={3}>
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
            color: "#ff5863",
            backgroundColor: "rgba(255, 88, 99, 0.1)",
            padding: "2px 5px",
          }}
        >
          Sold
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            ml: 0,
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
          <Box
            marginTop={3}
            sx={{
              width: "100%",
            }}
          >
            <List
              subheader={
                <ListSubheader
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    alignItems: "center",
                    p: 1,
                    paddingX: 2,
                    backgroundColor: (theme) => theme.palette.primary.dark,
                    color: (theme) => theme.palette.secondary.main,
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "left",
                      paddingLeft: 2,
                      fontWeight: "bold",
                    }}
                  >
                    Sale Price
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "left",
                      paddingLeft: 2,
                      fontWeight: "bold",
                    }}
                  >
                    Owner
                  </Typography>
                </ListSubheader>
              }
            >
              <ListItem
                sx={{
                  p: 1,
                  paddingX: 2,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  alignItems: "center",
                  bgcolor: (theme) => theme.palette.secondary.dark,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <DiamondOutlined
                    sx={{ color: "#1976d2", fontSize: "18px", pl: "15px" }}
                  />
                  <Typography pl={0.5} fontWeight={"bold"}>
                    {slotWinner?.bid}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      textAlign: "left",
                      paddingLeft: 2,
                      color: (theme) => theme.palette.primary.contrastText,
                    }}
                  >
                    {slotWinner?.from}
                  </Typography>
                </Box>
              </ListItem>
              <Box
                sx={{
                  bgcolor: (theme) => theme.palette.secondary.dark,
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
                p={2}
              >
                <Typography
                  sx={{
                    textAlign: "left",
                    fontSize: "12px",
                    color: (theme) => theme.palette.secondary.main,
                  }}
                >
                  Purchased on {slotWinner?.date}
                </Typography>
              </Box>
            </List>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            ml: 3,
            mt: 3,
            [theme.breakpoints.down("md")]: {
              ml: 0,
            },
          }}
        >
          <Box
            sx={{
              backgroundColor: (theme) => theme.palette.secondary.dark,
            }}
            p={2}
            pb={6}
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
        </Box>
      </Box>
      <OwnerShipHistory ownershipHistory={ownershipHistory} transferred />
      <BidHistoryComponent bidHistory={bidHistory} />
    </Box>
  );
};
