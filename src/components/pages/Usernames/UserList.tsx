import {
  Box,
  List,
  ListSubheader,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import { UserListItem } from "./UserListItem";
import { fetchUsers } from "../../store/actions";
import Filters from "./Filters";
import { filteringBySaleAndPrice } from "./helpers";
import { Slot } from "../../store/types";
import { useNavigate } from "react-router-dom";
import { changeSelectedUsernameSlot } from "../../store/MainSlice";

export const UserList = () => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.main);
  const theme = useTheme();
  const { slots, nameFilter } = useAppSelector((state) => state.main);
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [filterBySold, setFilterBySold] = useState<string>("on_auction");
  const [filterByPrice, setFilterByPrice] = useState<string>("low");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);
  const navigate = useNavigate();

  const filteredSlots = filteringBySaleAndPrice(
    slots,
    filterBySold,
    filterByPrice,
    nameFilter
  );

  const navigateToUsername = (slot: Slot) => {
    dispatch(changeSelectedUsernameSlot(slot));
    navigate(`/usernames/${slot.user.username}`);
  };

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
              backgroundColor: (theme) => theme.palette.primary.dark,
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
            }}
          >
            <Box
              sx={{
                flex: 1,
                color: (theme) => theme.palette.secondary.main,
              }}
            >
              Username
            </Box>
            <Box
              sx={{
                flex: 1,
                color: (theme) => theme.palette.secondary.main,
                paddingLeft: {
                  xs: 0,
                  sm: "clamp(0px, 5vw, 56px)",
                  md: "clamp(0px, calc(10vw - 20px), 56px)",
                },
              }}
            >
              Minimum bid
            </Box>
            {isMdUp && (
              <Box
                sx={{ flex: 1, color: (theme) => theme.palette.secondary.main }}
              >
                Auction ends in
              </Box>
            )}
          </ListSubheader>
        }
      >
        {filteredSlots.map((slot) => (
          <div onClick={() => navigateToUsername(slot)} key={slot.user.id}>
            <UserListItem
              user={slot.user}
              minBid={slot.minBid}
              usdEquivalent={slot.usdEquivalent}
              auctionEnds={slot.auctionEnds}
              endedAt={slot.endedAt}
              auctionEndDate={slot.auctionEndDate}
            />
          </div>
        ))}
      </List>
    </Box>
  );
};
