type Statistics = {
  cpuUsage: number;
};

type StaticData = {
  cpumodel: string;
};

type EventPayloadMapping = {
  statistics: Statistics;
  getStaticData: StaticData;
};

interface Window {
  electron: {
    getStaticData: () => Promise<StaticData>;
    subscribeStatistics: (callback: (statistics: Statistics) => void) => void;
  };
}
