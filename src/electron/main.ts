import { app, BrowserWindow } from "electron";
import path from "path";
import { ipcMainHandle, isDev } from "./utils.js";
import { getPreloadPath } from "./pathResolver.js";
import { pollResources } from "./resourceManager.js";
import { getFilesList } from "./fs/getFilesList.js";
import { processFilesForMetaData } from "./metadata/processFilesForMetaData.js";
import { files } from "./db/index.js";
import { getAlbums } from "./db/getAlbums.js";

const loadUI = (mainWindow: BrowserWindow): Promise<void> => {
  if (isDev()) {
    return mainWindow.loadURL("http://localhost:5123");
  }

  return mainWindow.loadFile(
    path.join(app.getAppPath(), "dist-react/index.html")
  );
};

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: getPreloadPath(),
    },
  });

  loadUI(mainWindow).then(() => {
    pollResources(mainWindow);
    getFilesList("C:\\Users\\inpwt\\Music\\Pulp", files);
    processFilesForMetaData(mainWindow, files);

    ipcMainHandle("getAlbums", () => {
      return getAlbums();
    });
  });
});
