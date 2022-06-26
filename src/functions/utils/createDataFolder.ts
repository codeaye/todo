import { BaseDirectory, createDir } from "@tauri-apps/api/fs";

export default async function () {
  try {
    await createDir("todo/store", {
      dir: BaseDirectory.App,
      recursive: true,
    });
  } catch (e) {
    console.error(e);
  }
}
