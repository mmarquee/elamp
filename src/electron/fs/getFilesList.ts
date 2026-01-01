import { readdirSync, statSync } from "fs";
import { join } from "path";
import mime from "mime-types";
import { getMetaData } from "../metadata/getMetaData.js";

const files = [];

const addToFiles = (path: string): number => {
  const mimeType = mime.lookup(path);
  const current = files.length;

  if (mimeType !== "audio/mpeg") return current;

  getMetaData(path).then((response) => console.log(response?.common));

  console.log({ path, mimeType });

  return files.push(path);
};

export const getFilesList = (directory: string) => {
  readdirSync(directory).forEach((f) => {
    const absolute = join(directory, f);
    if (statSync(absolute).isDirectory()) return getFilesList(absolute);
    else return addToFiles(absolute);
  });
};
