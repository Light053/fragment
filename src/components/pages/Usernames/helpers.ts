import { Slot } from "../../store/types";
export const filteringBySaleAndPrice = ({
  slots,
  filterBySold,
  filterByPrice,
  filterBySearch,
  searchType,
}: {
  slots: Slot[];
  filterBySold: string;
  filterByPrice: string;
  filterBySearch: string;
  searchType: "username" | "phone";
}) => {
  let filteredSlots = slots.filter((slot) =>
    filterBySold === "on_auction"
      ? slot.auctionEnds !== "Sold"
      : slot.auctionEnds === "Sold"
  );

  if (filterBySearch.trim() !== "") {
    const searchTerm = filterBySearch.toLowerCase();
    filteredSlots = filteredSlots.filter((slot) => {
      if (searchType === "username") {
        return slot.user.username.toLowerCase().includes(searchTerm);
      } else {
        return slot.user.phone.toLowerCase().includes(searchTerm);
      }
    });
  }

  if (filterByPrice === "high") {
    filteredSlots = filteredSlots.sort((a, b) => a.minBid - b.minBid);
  } else {
    filteredSlots = filteredSlots.sort((a, b) => b.minBid - a.minBid);
  }

  return filteredSlots;
};
