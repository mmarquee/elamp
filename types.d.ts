type Statistics = {
  cpuUsage: number;
};

type StaticData = {
  cpumodel: string;
};

type ArtistsData = {
  artists: Array<string | undefined>
}

type AlbumsData = {
  albums: Array<string | undefined>
}

type EventPayloadMapping = {
  statistics: Statistics;
  getStaticData: StaticData;
  getArtists: ArtistsData;
  getAlbums: AlbumsData;
};

interface Window {
  electron: {
    getStaticData: () => Promise<StaticData>;
    getArtists: () => Promise<ArtistsData>;
    getAlbums: () => Promise<AlbumsData>;    

    subscribeStatistics: (callback: (statistics: Statistics) => void) => void;
  };
}
