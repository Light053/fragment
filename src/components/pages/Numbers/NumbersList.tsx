import {
  Box,
  List,
  ListSubheader,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FilterNumbers from "./components/FilterNumbers";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchUsers } from "../../store/actions";
import { NumberListItem } from "./components/NumberListItem";
import { filteringBySaleAndPrice } from "../Usernames/helpers";
import { setNumberActiveFilters } from "../../store/MainSlice";

export const NumbersList = () => {
  const { status, slots, numberFilter, numberActiveFilters } = useAppSelector(
    (state) => state.main
  );

  const { filterBySold, filterByPrice } = numberActiveFilters;

  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  const filteredSlots = filteringBySaleAndPrice({
    searchType: "phone",
    filterBySearch: numberFilter || "",
    slots,
    filterBySold,
    filterByPrice,
  });

  const handleSetFilterByPrice = (value: "low" | "high") => {
    dispatch(
      setNumberActiveFilters({ ...numberActiveFilters, filterByPrice: value })
    );
  };

  const handleSetFilterBySold = (value: "on_auction" | "sold") => {
    dispatch(
      setNumberActiveFilters({ ...numberActiveFilters, filterBySold: value })
    );
  };

  return (
    <Box mt={3}>
      <FilterNumbers
        setFilterByPrice={handleSetFilterByPrice}
        setFilterBySold={handleSetFilterBySold}
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
              Anonymous number
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
        {filteredSlots.map((slot, index) => (
          <NumberListItem slot={slot} key={index} />
        ))}
      </List>
    </Box>
  );
};
