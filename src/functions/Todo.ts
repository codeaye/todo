import { readTextFile, BaseDirectory } from "@tauri-apps/api/fs";
import StoreType from "../types/StoreType";
import TodoTypeRaw from "../types/TodoTypeRaw";
import createDataFolder from "./utils/createDataFolder";
import createSaveFile from "./utils/createSaveFile";
import readData from "./utils/readData";
import writeData from "./utils/writeData";

export async function setTodos(todo: TodoTypeRaw): Promise<StoreType> {
  createDataFolder();
  try {
    const existing = await readData();
    existing.todos.push(todo);
    writeData(existing);
    return existing;
  } catch (e) {
    const json = { theme: true, filter: true, todos: [todo], done: [] };
    await createSaveFile(JSON.stringify(json));
    return json;
  }
}

export async function removeTodo(todo: TodoTypeRaw): Promise<StoreType> {
  createDataFolder();
  try {
    const existing = await readData();
    try {
      existing.todos = existing.todos.filter((t) => t.id !== todo.id) || [];
      existing.done = existing.done.filter((id) => id !== todo.id) || [];
    } catch (error) {
      console.log(error);
    }
    await writeData(existing);

    return existing;
  } catch (e) {
    const json = { theme: true, filter: true, todos: [], done: [] };
    await createSaveFile(JSON.stringify(json));
    return json;
  }
}

export async function removeAllTodos(): Promise<StoreType> {
  createDataFolder();
  try {
    const existing = await readData();
    try {
      existing.todos = [];
      existing.done = [];
    } catch (error) {
      console.log(error);
    }
    writeData(existing);
    return existing;
  } catch (e) {
    const json = { theme: true, filter: true, todos: [], done: [] };
    await createSaveFile(JSON.stringify(json));
    return json;
  }
}

export async function getTodos(): Promise<StoreType> {
  createDataFolder();
  try {
    return JSON.parse(
      await readTextFile(`./todo/store/data.json`, {
        dir: BaseDirectory.App,
      })
    ) as StoreType;
  } catch (e) {
    const json = { theme: true, filter: true, todos: [], done: [] };
    await createSaveFile(JSON.stringify(json));
    return json;
  }
}

export async function changeDone(todo: TodoTypeRaw): Promise<StoreType> {
  createDataFolder();
  try {
    let existing = JSON.parse(
      await readTextFile(`./todo/store/data.json`, {
        dir: BaseDirectory.App,
      })
    ) as StoreType;
    if (existing.done.includes(todo.id)) {
      existing.done = existing.done.filter((id) => id !== todo.id) || [];
    } else {
      existing.done.push(todo.id);
    }
    writeData(existing);
    return existing;
  } catch (e) {
    const json = {
      theme: true,
      filter: true,
      todos: [todo],
      done: [todo.id],
    };
    await createSaveFile(JSON.stringify(json));
    return json;
  }
}
