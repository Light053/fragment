import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "./types";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json() as Promise<User[]>;
});
