import { readTextFile } from "@tauri-apps/api/fs";
import { BaseDirectory } from "@tauri-apps/api/fs";
import StoreType from "../types/StoreType";
import createDataFolder from "./utils/createDataFolder";
import createSaveFile from "./utils/createSaveFile";
import readData from "./utils/readData";
import writeData from "./utils/writeData";

export async function getTheme(): Promise<boolean> {
  createDataFolder();
  try {
    return (
      JSON.parse(
        await readTextFile(`./todo/store/data.json`, {
          dir: BaseDirectory.App,
        })
      ) as StoreType
    ).theme;
  } catch (e) {
    await createSaveFile(JSON.stringify({ theme: true, todos: [], done: [] }));
    return true;
  }
}

export async function setTheme(theme: boolean) {
  createDataFolder();
  try {
    const existing = await readData();
    existing.theme = theme;
    writeData(existing);
  } catch (e) {
    const json = { theme: theme, todos: [], done: [] };
    await createSaveFile(JSON.stringify(json));
    return json;
  }
}

export async function getFilter(): Promise<boolean> {
  createDataFolder();
  try {
    return (
      JSON.parse(
        await readTextFile(`./todo/store/data.json`, {
          dir: BaseDirectory.App,
        })
      ) as StoreType
    ).filter;
  } catch (e) {
    await createSaveFile(
      JSON.stringify({ theme: true, filter: true, todos: [], done: [] })
    );
    return true;
  }
}

export async function setFilter(filter: boolean) {
  createDataFolder();
  try {
    const existing = await readData();
    existing.filter = filter;
    writeData(existing);
  } catch (e) {
    const json = { theme: true, filter: filter, todos: [], done: [] };
    await createSaveFile(JSON.stringify(json));
    return json;
  }
}
