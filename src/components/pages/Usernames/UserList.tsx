import { Box, List, ListSubheader, useTheme } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import { UserListItem } from "./UserListItem";
import { fetchUsers } from "../../store/actions";
import Filters from "./Filters";
import { filteringBySaleAndPrice } from "./helpers";

export const UserList = () => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.main);
  const theme = useTheme();
  const slots = useAppSelector((state) => state.main.slots);

  const [filterBySold, setFilterBySold] = useState<string>("on_auction");
  const [filterByPrice, setFilterByPrice] = useState<string>("low");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  const filteredSlots = filteringBySaleAndPrice(
    slots,
    filterBySold,
    filterByPrice
  );

  return (
    <Box sx={{ mt: 4, borderRadius: "10px", overflow: "hidden" }}>
      <Filters
        setFilterBySold={setFilterBySold}
        setFilterByPrice={setFilterByPrice}
      />
      <List
        subheader={
          <ListSubheader
            sx={{
              display: "flex",
              fontWeight: "bold",
              px: 2,
              backgroundColor: "#293440",
            }}
          >
            <Box
              sx={{ flex: 1, color: (theme) => theme.palette.secondary.main }}
            >
              Username
            </Box>
            <Box
              sx={{
                flex: 1,
                color: (theme) => theme.palette.secondary.main,
                [theme.breakpoints.down("md")]: { display: "none" },
              }}
            >
              Minimum bid
            </Box>
            <Box
              sx={{ flex: 1, color: (theme) => theme.palette.secondary.main }}
            >
              Auction ends in
            </Box>
          </ListSubheader>
        }
      >
        {filteredSlots.map((slot) => (
          <UserListItem
            user={slot.user}
            key={slot.user.id}
            minBid={slot.minBid}
            usdEquivalent={slot.usdEquivalent}
            auctionEnds={slot.auctionEnds}
            endedAt={slot.endedAt}
          />
        ))}
      </List>
    </Box>
  );
};
