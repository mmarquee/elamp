import { parseFile, IAudioMetadata } from "music-metadata";

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
