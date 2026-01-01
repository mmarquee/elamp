import { readdirSync, statSync } from "fs";
import { join } from "path";
import mime from "mime-types";
import { getMetaData } from "../metadata/getMetaData.js";

// Hmm.
export type FileData = {
  path: string;
};

export const files = new Array<FileData>();

const addToFiles = (path: string): number => {
  const mimeType = mime.lookup(path);
  const current = files.length;

  // I think I just have mp3 files, so ho hum
  if (mimeType !== "audio/mpeg") return current;

  console.log({ path, mimeType });

  return files.push({ path });
};

export const getFilesList = (directory: string) => {
  readdirSync(directory).forEach((f) => {
    const absolute = join(directory, f);
    if (statSync(absolute).isDirectory()) return getFilesList(absolute);
    else return addToFiles(absolute);
  });
};
