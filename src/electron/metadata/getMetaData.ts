import { parseFile, IAudioMetadata } from "music-metadata";
import { setTimeout } from "timers/promises";

export const getMetaData = async (
  filePath: string
): Promise<IAudioMetadata | undefined> => {
  try {    
    return await parseFile(filePath);
  } catch (error: any) {
    console.error("Error parsing metadata:", error.message);
    return undefined;
  }
};
