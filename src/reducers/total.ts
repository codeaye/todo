import { createSlice } from "@reduxjs/toolkit";
import { getTodos } from "../functions/Todo";

export const total = createSlice({
  name: "total",
  initialState: (await getTodos()).todos.length,
  reducers: {
    setTotal: (state, pay) => (state = pay.payload),
  },
});

export const { setTotal } = total.actions;
export default total.reducer;
