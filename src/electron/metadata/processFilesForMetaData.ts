import { FileData } from "../types.js";
import { Mutex } from "../utils/mutex.js";
import { getMetaData } from "./getMetaData.js";

export const processFilesForMetaDataA = (files: FileData[]) => {
  files.forEach((file) =>
    getMetaData(file.path).then((response) => console.log(response?.common))
  );
};

export const processFilesForMetaData = (files: FileData[]) => {
  const mutex = new Mutex();
  files.forEach(async (file) => {
    const unlock = await mutex.lock();

    getMetaData(file.path).then((response) => {
      unlock();
      //  console.log(response?.common);
    });
  });
};
