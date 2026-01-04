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
  //statistics: Statistics;
  //metadata: IAudioMetadata;
  getStaticData: StaticData;
  loadComplete: LoadComplete;

  getAlbums: AlbumData;
  getArtists: ArtistsData;
};

type TrackQuery = {
  album: string;
};

type ArtistsData = {
  artists: Array<string | undefined>;
};

type AlbumsData = {
  albums: Array<string | undefined>;
};

interface Window {
  electron: {
    getAlbums: () => Promise<AlbumData>;
    getArtists: () => Promise<ArtistsData>;
    getStaticData: () => Promise<StaticData>;

    loadComplete: (callback: (loadComplete: LoadComplete) => void) => void;
//    subscribeStatistics: (callback: (statistics: Statistics) => void) => void;
//    subscribeFileUpdates: (
//      callback: (metaData: IAudioMetadata) => void
//    ) => void;
  };
}
