import { IAudioMetadata } from "music-metadata";

// Hmm.
export type Files = {
  path: string;
};

export type FileData = {
  path: string;
  metadata: IAudioMetadata | undefined;
  timestamp: Date;
};
