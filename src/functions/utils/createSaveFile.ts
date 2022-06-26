import { BaseDirectory, writeFile } from "@tauri-apps/api/fs";

export default async function (json: string) {
  try {
    await writeFile(
      {
        contents: json,
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
