import { DiamondOutlined } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListSubheader,
  Typography,
  useTheme,
} from "@mui/material";
import { OwnershipHistory } from "../store/types";

export const OwnerShipHistory = ({
  ownershipHistory,
  transferred,
}: {
  ownershipHistory: OwnershipHistory[];
  transferred: boolean;
}) => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        sx={{
          [theme.breakpoints.down("xs")]: {
            fontSize: "18px",
            textAlign: "center",
            mb: 1,
          },
        }}
        mt={3}
        variant="h5"
        pl={2}
        fontWeight={"bold"}
      >
        Ownership History
      </Typography>

      <List
        sx={{ mt: 2 }}
        subheader={
          <ListSubheader
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              alignItems: "center",
              p: 1,
              paddingX: 2,
              backgroundColor: theme.palette.primary.dark,
              color: theme.palette.secondary.main,
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            <Typography
              sx={{ textAlign: "left", paddingLeft: 2, fontWeight: "bold" }}
            >
              Sale Price
            </Typography>
            <Typography
              sx={{ textAlign: "left", paddingLeft: 2, fontWeight: "bold" }}
            >
              Date
            </Typography>
            <Typography
              sx={{ textAlign: "left", paddingLeft: 2, fontWeight: "bold" }}
            >
              Buyer
            </Typography>
          </ListSubheader>
        }
      >
        {ownershipHistory.map((history, index) => (
          <ListItem
            key={index}
            sx={{
              bgcolor: theme.palette.secondary.dark,
              borderBottomLeftRadius:
                index === ownershipHistory.length - 1 ? "10px" : "0px",
              borderBottomRightRadius:
                index === ownershipHistory.length - 1 ? "10px" : "0px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              alignItems: "center",
              paddingX: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {!transferred && <DiamondOutlined sx={{ color: "#1976d2" }} />}
              <Typography
                fontWeight={"bold"}
                sx={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  pl: transferred ? 2 : 1,
                }}
              >
                {transferred ? "Transferred" : history.salePrice}
              </Typography>
            </Box>
            <Box
              sx={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              <Typography
                sx={{
                  textAlign: "left",
                  paddingLeft: 2,
                  color: theme.palette.secondary.main,
                  fontSize: "12px",
                }}
              >
                {history.date}
              </Typography>
            </Box>
            <Box
              sx={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              <Typography
                sx={{
                  textAlign: "left",
                  paddingLeft: 2,
                  color: theme.palette.primary.contrastText,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "100px",
                }}
              >
                {history.buyer}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
