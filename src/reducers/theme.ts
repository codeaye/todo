import { createSlice } from "@reduxjs/toolkit";
import { getTheme, setTheme } from "../functions/Config";

export const theme = createSlice({
  name: "theme",
  initialState: await getTheme(),
  reducers: {
    toggleTheme: (state) => {
      setTheme(!state);
      return (state = !state);
    },
  },
});

export const { toggleTheme } = theme.actions;
export default theme.reducer;
