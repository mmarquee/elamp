import { watch } from "fs";

export const watchForFiles = (path: string) => {
  console.log("Watch for file changes");

  watch(path, { recursive: true }, (eventType, filename) => {
    console.log(filename, eventType);
  });
};
