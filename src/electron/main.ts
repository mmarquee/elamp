import { app, BrowserWindow } from "electron";
import path from "path";
import { ipcMainHandle, isDev } from "./utils.js";
import { getPreloadPath, getUIPath } from "./pathResolver.js";
//import { pollResources } from "./resourceManager.js";
import { getFilesList } from "./fs/getFilesList.js";
import { processFilesForMetaData } from "./metadata/processFilesForMetaData.js";
import { files } from "./db/index.js";
import { getAlbums } from "./db/getAlbums.js";

const loadUI = (mainWindow: BrowserWindow): Promise<void> => {
  if (isDev()) {
    return mainWindow.loadURL("http://localhost:5123");
  }

  return mainWindow.loadFile(getUIPath());
};

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: getPreloadPath(),
    },
  });

  loadUI(mainWindow).then(() => {
    getFilesList("C:\\Users\\inpwt\\Music\\Pulp", files);
    processFilesForMetaData(mainWindow, files);
  });
});
