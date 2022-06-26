import { BaseDirectory, readTextFile } from "@tauri-apps/api/fs";
import StoreType from "../../types/StoreType";

export default async function () {
  return JSON.parse(
    await readTextFile(`./todo/store/data.json`, {
      dir: BaseDirectory.App,
    })
  ) as StoreType;
}
