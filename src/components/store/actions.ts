import { createAsyncThunk } from "@reduxjs/toolkit";
import { MainState, User } from "./types";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json() as Promise<User[]>;
});

export const loadState = (): MainState | null => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    return serializedState ? JSON.parse(serializedState) : null;
  } catch (e) {
    console.error("Ошибка при загрузке состояния:", e);
    return null;
  }
};
