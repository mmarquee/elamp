import { FileData } from "../fs/getFilesList.js";
import { getMetaData } from "./getMetaData.js";

export const processFilesForMetaData = (files: FileData[]) => {
  files.forEach((file) =>
    getMetaData(file.path).then((response) => console.log(response?.common))
  );
};
