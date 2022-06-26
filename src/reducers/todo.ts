import { AppDispatch } from "./../Store";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import {
  changeDone,
  getTodos,
  removeAllTodos,
  removeTodo,
  setTodos,
} from "../functions/Todo";
import StoreType from "../types/StoreType";
import TodoTypeRaw from "../types/TodoTypeRaw";
import { setInactive } from "./inactive";
import { setTotal } from "./total";

export const todo = createSlice({
  name: "todo",
  initialState: await getTodos(),
  reducers: {
    updateTodos: (state, rq) => {
      return (state = rq.payload);
    },
  },
});

function updateAll(newTodo: StoreType, dispatch: any) {
  dispatch(updateTodos(newTodo));
  dispatch(setTotal(newTodo.todos.length));
  dispatch(setInactive(newTodo.done.length));
}

export function add(text: string) {
  return function (dispatch: AppDispatch) {
    return setTodos({
      id: uuidv4(),
      title: text,
    }).then(
      (newTodo) => {
        updateAll(newTodo, dispatch);
      },
      (error) => {}
    );
  };
}

export function toggleDone(todo: TodoTypeRaw) {
  return function (dispatch: AppDispatch) {
    return changeDone(todo).then(
      (newTodo) => {
        updateAll(newTodo, dispatch);
      },
      (error) => {}
    );
  };
}

export function removeAll() {
  return function (dispatch: AppDispatch) {
    return removeAllTodos().then(
      (newTodo) => {
        updateAll(newTodo, dispatch);
      },
      (error) => {}
    );
  };
}

export function remove(todo: TodoTypeRaw) {
  return function (dispatch: AppDispatch) {
    return removeTodo(todo).then(
      (newTodo) => {
        updateAll(newTodo, dispatch);
      },
      (error) => {}
    );
  };
}

export const { updateTodos } = todo.actions;
export default todo.reducer;
