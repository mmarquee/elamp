import { app, BrowserWindow } from "electron";
import path from "path";
import { ipcMainHandle, isDev } from "./utils.js";
import { getPreloadPath } from "./pathResolver.js";
import { getStaticData, pollResources } from "./resourceManager.js";
import { files, getFilesList } from "./fs/getFilesList.js";
import { processFilesForMetaData } from "./metadata/processFilesForMetaData.js";

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

  ipcMainHandle("getStaticData", () => {
    return getStaticData();
  });

  // Doing it all at once is too much!
  // getFilesList("c:\\Users\\inpwt\\Music");
  getFilesList(
    "c:\\Users\\inpwt\\Music\\Zodiac Youth\\Fast Forward The Future"
  );

  processFilesForMetaData(files);
});
