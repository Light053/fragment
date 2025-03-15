import { Slot, User } from "./types";

export const generateAuctionData = (user: User): Slot => {
  const minBid = Math.floor(Math.random() * 1000) + 5000;
  const usdEquivalent = `~$${(minBid * 2.87).toLocaleString()}`;

  const isEnded = Math.random() < 0.2;

  let auctionEnds;
  let endedAt: string | null = null;

  if (isEnded) {
    auctionEnds = "Sold";

    const pastDays = Math.floor(Math.random() * 30) + 1;
    const date = new Date();
    date.setDate(date.getDate() - pastDays);

    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    endedAt = date
      .toLocaleDateString("en-GB", options)
      .replace(",", "")
      .replace(" ", " ")
      .replace(" at", " at");
  } else {
    const days = Math.floor(Math.random() * 5);
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    auctionEnds =
      days > 0
        ? `${days} days ${hours} hours ${minutes} minutes`
        : `${hours} hours ${minutes} minutes`;
  }

  return {
    user,
    minBid,
    usdEquivalent,
    auctionEnds,
    endedAt,
  };
};
