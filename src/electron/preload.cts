const electron = require("electron");

electron.contextBridge.exposeInMainWorld("electron", {
  subscribeStatistics: (callback) => {
    ipcOn("statistics", (stats) => {
      callback(stats);
    });
  },

  subscribeFileUpdates: (callback) => {
    ipcOn("metadata", (metadata) => {
      callback(metadata);
    });
  },

  getStaticData: () => ipcInvoke("getStaticData"),
  //  getArtists: () => ipcInvoke("getArtists"),
  //  getAlbums: () => ipcInvoke("getAlbums"),
  //  getTracks: () => ipcInvoke("getTracks"),
  //  getGenres: () => ipcInvoke("getGenres"),
} satisfies Window["electron"]);

function ipcInvoke<Key extends keyof EventPayloadMapping>(
  key: Key
): Promise<EventPayloadMapping[Key]> {
  return electron.ipcRenderer.invoke(key);
}

function ipcOn<Key extends keyof EventPayloadMapping>(
  key: Key,
  callback: (payload: EventPayloadMapping[Key]) => void
) {
  // @ts-ignore
  electron.ipcRenderer.on(key, (_, payload) => callback(payload));
}
