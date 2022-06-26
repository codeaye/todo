import { createSlice } from "@reduxjs/toolkit";
import { getTodos } from "../functions/Todo";

export const inactive = createSlice({
  name: "inactive",
  initialState: (await getTodos()).done.length,
  reducers: {
    setInactive: (state, pay) => (state = pay.payload),
  },
});

export const { setInactive } = inactive.actions;
export default inactive.reducer;
