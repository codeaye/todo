import { createSlice } from "@reduxjs/toolkit";
import { getFilter, setFilter } from "../functions/Config";

export const filter = createSlice({
  name: "filter",
  initialState: await getFilter(),
  reducers: {
    toggleFilter: (state) => {
      setFilter(!state);
      return (state = !state);
    },
  },
});

export const { toggleFilter } = filter.actions;
export default filter.reducer;
