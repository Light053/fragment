import { Slot, User, BidHistory } from "./types";

export const generateAuctionData = (user: User): Slot => {
  const minBid = Math.floor(Math.random() * 1000) + 5000;
  const usdEquivalent = `~$${(minBid * 2.87).toLocaleString()}`;
  const isEnded = Math.random() < 0.2;

  let auctionEnds: string;
  let endedAt: string | null = null;
  let auctionEndDate: string;

  const formatDate = (date: Date): string => {
    return date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      .replace(",", "")
      .replace(" ", " ")
      .replace(" at", " at")
      .replace(/(\d{2}:\d{2})$/, "at $1");
  };

  if (isEnded) {
    auctionEnds = "Sold";

    const pastDays = Math.floor(Math.random() * 30) + 1;
    const date = new Date();
    date.setDate(date.getDate() - pastDays);

    endedAt = formatDate(date);
    auctionEndDate = endedAt;
  } else {
    const days = Math.floor(Math.random() * 5);
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    const parts = [];
    if (days > 0) parts.push(`${days} days`);
    if (hours > 0 || days > 0) parts.push(`${hours} hours`);
    parts.push(`${minutes} minutes`);

    auctionEnds = parts.join(" ");

    const now = new Date();
    const totalMinutes = days * 24 * 60 + hours * 60 + minutes;
    const endDate = new Date(now.getTime() + totalMinutes * 60 * 1000);

    auctionEndDate = formatDate(endDate);
  }

  const generateBidHistory = (minBid: number): BidHistory[] => {
    const historyLength = Math.floor(Math.random() * 5) + 1;
    const history: BidHistory[] = [];
    let bidAmount = minBid;

    for (let i = 0; i < historyLength; i++) {
      bidAmount += Math.floor(Math.random() * 500) + 100;
      const from = "User" + Math.floor(Math.random() * 10);

      const bidDate = new Date();
      bidDate.setMinutes(
        bidDate.getMinutes() - Math.floor(Math.random() * 1440)
      );

      history.push({
        bid: bidAmount,
        date: formatDate(bidDate),
        from,
      });
    }

    return history.reverse();
  };

  const bidHistory = generateBidHistory(minBid);

  return {
    user,
    minBid,
    usdEquivalent,
    auctionEnds,
    endedAt,
    auctionEndDate,
    bidHistory,
  };
};
