import os from 'os';
import { BrowserWindow } from 'electron';
import osUtils from  'os-utils';

const POLLING_INTERVAL = 500;

export const pollResources = (mainWindow: BrowserWindow) => {
    setInterval (async () => {
        const cpuUsage = await getCpuUsage();
        mainWindow.webContents.send("statistics", {cpuUsage})
    },
    POLLING_INTERVAL)
}

export const getCpuUsage = () => {
    return new Promise(resolve => {
        osUtils.cpuUsage(resolve)
    })
}

export const getStaticData = () => {
    const cpumodel = os.cpus()[0].model;
    return ({ cpumodel })
}