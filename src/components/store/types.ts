export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface BidHistory {
  bid: number;
  date: string;
  from: string;
}

export interface Slot {
  user: User;
  minBid: number;
  usdEquivalent: string;
  auctionEnds: string;
  endedAt: string | null;
  auctionEndDate: string;
  bidHistory: BidHistory[];
  slotWinner: BidHistory | null;
}

export interface MainState {
  tab: "usernames" | "numbers";
  users: User[];
  slots: Slot[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  nameFilter: string;
  selectedUsernameSlot: Slot | null;
}

export const initialState: MainState = {
  tab: "usernames",
  users: [],
  slots: [],
  status: "idle",
  error: null,
  nameFilter: "",
  selectedUsernameSlot: null,
};
