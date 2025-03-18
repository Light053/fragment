import { loadState } from "./actions";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface BidHistory {
  bid: number;
  date: string;
  from: string;
}

export interface OwnershipHistory {
  date: string;
  buyer: string;
  salePrice: string;
}

export interface Slot {
  user: User;
  minBid: number;
  usdEquivalent: string;
  auctionEnds: string;
  endedAt: string | null;
  auctionEndDate: string;
  bidHistory: BidHistory[];
  ownershipHistory: OwnershipHistory[];
  slotWinner: BidHistory | null;
}

export interface NumberActiveFilters {
  filterBySold: "on_auction" | "sold";
  filterByPrice: "low" | "high";
}

export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
}

export interface MainState {
  tab: "usernames" | "numbers";
  users: User[];
  slots: Slot[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  nameFilter: string;
  selectedUsernameSlot: Slot | null;
  selectedNumberSlot: Slot | null;
  numberFilter: string | null;
  numberActiveFilters: NumberActiveFilters;
  telegramUser: TelegramUser | null;
  authStatus: "idle" | "authenticated" | "unauthenticated";
}

export const initialState: MainState = loadState() || {
  tab: "usernames",
  users: [],
  slots: [],
  status: "idle",
  error: null,
  nameFilter: "",
  selectedUsernameSlot: null,
  selectedNumberSlot: null,
  numberFilter: null,
  numberActiveFilters: { filterBySold: "on_auction", filterByPrice: "low" },
  telegramUser: null,
  authStatus: "idle",
};
