import { readdirSync, statSync } from "fs";
import { join } from "path";
import mime from "mime-types";
import { Files } from "../types.js";

const addToFiles = (path: string, files: Files[]): number => {
  const mimeType = mime.lookup(path);
  const current = files.length;

  // I think I just have mp3 files, so ho hum
  if (mimeType !== "audio/mpeg") return current;

  return files.push({ path });
};

export const getFilesList = (directory: string, files: Files[]) => {
  readdirSync(directory).forEach((f) => {
    const absolute = join(directory, f);
    if (statSync(absolute).isDirectory()) return getFilesList(absolute, files);
    else return addToFiles(absolute, files);
  });
};
