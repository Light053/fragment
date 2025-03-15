import { Slot } from "../../store/types";

export const filteringBySaleAndPrice = (
  slots: Slot[],
  filterBySold: string,
  filterByPrice: string,
  filterByName: string // Строка для поиска по имени
) => {
  let filteredSlots = slots.filter((slot) =>
    filterBySold === "on_auction"
      ? slot.auctionEnds !== "Sold"
      : slot.auctionEnds === "Sold"
  );

  // Фильтрация по имени
  if (filterByName.trim() !== "") {
    const nameLower = filterByName.toLowerCase();
    filteredSlots = filteredSlots.filter((slot) =>
      slot.user.username.toLowerCase().includes(nameLower)
    );
  }

  // Сортировка по цене
  if (filterByPrice === "high") {
    filteredSlots = filteredSlots.sort((a, b) => a.minBid - b.minBid);
  } else {
    filteredSlots = filteredSlots.sort((a, b) => b.minBid - a.minBid);
  }

  return filteredSlots;
};
