import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "./services";

export const all = createAsyncThunk("@users/all", getUsers);
