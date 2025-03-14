import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  tab: "usernames" | "numbers";
}

const initialState: CounterState = {
  tab: "usernames",
};

export const MainSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeTab: (state, action: PayloadAction<"usernames" | "numbers">) => {
      state.tab = action.payload;
    },
  },
});

export const { changeTab } = MainSlice.actions;
export default MainSlice.reducer;
