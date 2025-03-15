import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { initialState, User } from "./types";
import { generateAuctionData } from "./genearionData";
import { fetchUsers } from "./actions";

export const MainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    changeTab: (state, action: PayloadAction<"usernames" | "numbers">) => {
      state.tab = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.status = "succeeded";
        state.users = action.payload;
        state.slots = action.payload.map(generateAuctionData);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const { changeTab } = MainSlice.actions;
export default MainSlice.reducer;
