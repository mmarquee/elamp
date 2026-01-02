type Statistics = {
  cpuUsage: number;
};

type StaticData = {
  cpumodel: string;
};

type EventPayloadMapping = {
  statistics: Statistics;
  metadata: IAudioMetadata;
  getStaticData: StaticData;
  loadComplete: boolean;
};

type TrackQuery = {
  album: string;
};

interface Window {
  electron: {
    getStaticData: () => Promise<StaticData>;

    subscribeStatistics: (callback: (statistics: Statistics) => void) => void;
    subscribeFileUpdates: (
      callback: (metaData: IAudioMetadata) => void
    ) => void;
  };
}
