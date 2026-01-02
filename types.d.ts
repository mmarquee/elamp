type Statistics = {
  cpuUsage: number;
};

type StaticData = {
  cpumodel: string;
};

type LoadComplete = {
  count: number;
};

type EventPayloadMapping = {
  statistics: Statistics;
  metadata: IAudioMetadata;
  getStaticData: StaticData;
  loadComplete: LoadComplete;
};

type TrackQuery = {
  album: string;
};

interface Window {
  electron: {
    getStaticData: () => Promise<StaticData>;
    loadComplete: (callback: (loadComplete: LoadComplete) => void) => void;
    subscribeStatistics: (callback: (statistics: Statistics) => void) => void;
    subscribeFileUpdates: (
      callback: (metaData: IAudioMetadata) => void
    ) => void;
  };
}
