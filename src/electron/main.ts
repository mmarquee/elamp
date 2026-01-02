import { app, BrowserWindow } from "electron";
import path from "path";
import { isDev } from "./utils.js";
import { getPreloadPath } from "./pathResolver.js";
import { pollResources } from "./resourceManager.js";
import { getFilesList } from "./fs/getFilesList.js";
import { processFilesForMetaData } from "./metadata/processFilesForMetaData.js";
import { files } from "./db/index.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: getPreloadPath(),
    },
  });

  if (isDev()) {
    mainWindow.loadURL("http://localhost:5123");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "dist-react/index.html"));
  }

  pollResources(mainWindow);

  getFilesList("C:\\Users\\inpwt\\Music\\Various", files);

  processFilesForMetaData(mainWindow, files);
});
