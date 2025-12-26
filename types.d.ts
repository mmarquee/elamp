type Statistics = {
    cpuUsage: never;
}

type StaticData = {
    cpumodel: string;
}

interface Window {
    electron: {
        getStaticData: () => Promise<StaticData>;
        subscribeStatistics: (callback: (statistics: Statistics) => void) => void;        
    }
}