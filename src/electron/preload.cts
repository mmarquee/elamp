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

  loadComplete: (callback) => {
    ipcOn("loadComplete", (metadata) => {
      callback(metadata);
    });
  },

  getAlbums: () => ipcInvoke("getAlbums"),
  getArtists: () => ipcInvoke("getArtists"),

  getStaticData: () => ipcInvoke("getStaticData"),
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
