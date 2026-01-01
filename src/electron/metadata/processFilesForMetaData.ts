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

      data.push({ path: file.path, metadata: response, timestamp: new Date() });

      ipcWebContentsSend("metadata", mainWindow.webContents, {
        path: file.path,
        metadata: response,
        timestamp: new Date(),
      });

      //    console.log({ path: file.path, metadata: response, timestamp:new Date() })
      //console.log("All done! ", new Date());
    });
  });
};
