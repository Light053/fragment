import { configureStore } from "@reduxjs/toolkit";
import MainReducer from "./MainSlice";

export const store = configureStore({
  reducer: {
    main: MainReducer,
  },
});

store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem("reduxState", JSON.stringify(state.main));
  } catch (e) {
    console.error("Ошибка при сохранении состояния:", e);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
