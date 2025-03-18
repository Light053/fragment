import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  initialState,
  NumberActiveFilters,
  Slot,
  TelegramUser,
  User,
} from "./types";
import { generateAuctionData } from "./genearionData";
import { fetchUsers } from "./actions";
import { formatPhoneNumber } from "../pages/Numbers/components/helpers/helpers";

export const MainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    changeTab: (state, action: PayloadAction<"usernames" | "numbers">) => {
      state.tab = action.payload;
    },
    changeNameFilter: (state, action: PayloadAction<string>) => {
      state.nameFilter = action.payload;
    },
    changeSelectedUsernameSlot: (state, action: PayloadAction<Slot>) => {
      state.selectedUsernameSlot = action.payload;
    },
    changeNumberFilter: (state, action: PayloadAction<string>) => {
      state.numberFilter = action.payload;
    },
    changeSelectedNumberSlot: (state, action: PayloadAction<Slot>) => {
      state.selectedNumberSlot = action.payload;
    },
    setNumberActiveFilters: (
      state,
      action: PayloadAction<NumberActiveFilters>
    ) => {
      state.numberActiveFilters = action.payload;
    },

    setTelegramUser: (state, action: PayloadAction<TelegramUser>) => {
      state.telegramUser = action.payload;
      state.authStatus = "authenticated";
      localStorage.setItem("telegram_user", JSON.stringify(action.payload));
    },

    logout: (state) => {
      state.telegramUser = null;
      state.authStatus = "idle";
      localStorage.removeItem("telegram_user");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.status = "succeeded";
        state.users = action.payload.map((user) => ({
          ...user,
          phone: formatPhoneNumber(user.phone),
        }));
        state.slots = action.payload.map(generateAuctionData);

        state.slots = state.slots.map((slot) => ({
          ...slot,
          user: {
            ...slot.user,
            phone: formatPhoneNumber(slot.user.phone),
          },
        }));
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const {
  changeTab,
  changeNameFilter,
  changeSelectedUsernameSlot,
  changeNumberFilter,
  changeSelectedNumberSlot,
  setNumberActiveFilters,
  setTelegramUser,
  logout,
} = MainSlice.actions;

export default MainSlice.reducer;
