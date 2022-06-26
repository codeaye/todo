import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/theme";
import filterReducer from "./reducers/filter";
import totalReducer from "./reducers/total";
import inactiveReducer from "./reducers/inactive";
import todoReducer from "./reducers/todo";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    filter: filterReducer,
    total: totalReducer,
    inactive: inactiveReducer,
    todos: todoReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
