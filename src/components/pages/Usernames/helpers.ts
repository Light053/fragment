import { Slot } from "../../store/types";

export const filteringBySaleAndPrice = (
  slots: Slot[],
  filterBySold: string,
  filterByPrice: string
) => {
  let filteredSlots = slots.filter((slot) =>
    filterBySold === "on_auction"
      ? slot.auctionEnds !== "Sold"
      : slot.auctionEnds === "Sold"
  );

  if (filterByPrice === "low") {
    filteredSlots = filteredSlots.sort((a, b) => a.minBid - b.minBid);
  } else {
    filteredSlots = filteredSlots.sort((a, b) => b.minBid - a.minBid);
  }

  return filteredSlots;
};
