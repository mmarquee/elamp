import { BrowserWindow } from "electron";
import { data } from "../db/index.js";
import { Files } from "../types.js";
import { ipcWebContentsSend } from "../utils.js";
import { Mutex } from "../utils/mutex.js";
import { getMetaData } from "./getMetaData.js";

export const processFilesForMetaData = (
  mainWindow: BrowserWindow,
  files: Files[]
) => {
  const mutex = new Mutex();
  files.forEach(async (file) => {
    const unlock = await mutex.lock();

    getMetaData(file.path).then((response) => {
      unlock();
      const value = data.push({
        path: file.path,
        metadata: response,
        timestamp: new Date(),
      });

      console.log({
        value,
        path: file.path,
        metadata: response,
        timestamp: new Date(),
      });

      if (value === files.length) {
        console.log("All loaded");

        ipcWebContentsSend("loadComplete", mainWindow.webContents, {
          count: value,
        });
      }
    });
  });
};
