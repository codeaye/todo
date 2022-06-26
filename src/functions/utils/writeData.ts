import { BaseDirectory, writeFile } from "@tauri-apps/api/fs";

export default async function writeData(json: Object) {
  try {
    await writeFile(
      {
        contents: JSON.stringify(json),
        path: `./todo/store/data.json`,
      },
      {
        dir: BaseDirectory.App,
      }
    );
  } catch (e) {
    console.log(e);
  }
}
