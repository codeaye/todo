import { filter } from "./../reducers/filter";
import TodoTypeRaw from "./TodoTypeRaw";

export default interface StoreType {
  theme: boolean;
  filter: boolean;
  todos: TodoTypeRaw[];
  done: string[];
}
