import os from "os";
import { BrowserWindow } from "electron";
import osUtils from "os-utils";
import { ipcWebContentsSend } from "./utils.js";

//const POLLING_INTERVAL = 500;

//export const pollResources = (mainWindow: BrowserWindow) => {
//  setInterval(async () => {
//    const cpuUsage = await getCpuUsage();
//    ipcWebContentsSend("statistics", mainWindow.webContents, { cpuUsage });
//  }, POLLING_INTERVAL);
//};

//export const getCpuUsage = (): Promise<number> => {
//  return new Promise((resolve) => {
//    osUtils.cpuUsage(resolve);
//  });
//};

export const getStaticData = () => {
  console.log("Called getStaticData")
  const cpumodel = os.cpus()[0].model;
  return { cpumodel };
};
