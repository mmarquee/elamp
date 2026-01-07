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
  getStaticData: StaticData;
  loadComplete: LoadComplete;

  getAlbums: AlbumsData;
  getArtists: ArtistsData;
};

type TrackQuery = {
  album?: string;
};

type ArtistData = {
  artist: string;
};

type ArtistsData = {
  artists: Array<ArtistData | undefined>;
};

type AlbumQuery = {
  artist?: string;
};

type AlbumData = {
  artist: string;
  album: string;
  year: string;
};

type AlbumData = {
  artist: string | undefined;
  album: string | undefined;
  year: number | undefined;
};

type AlbumsData = {
  albums: Array<AlbumData | undefined>;
};

interface Window {
  electron: {
    getAlbums: () => Promise<AlbumsData>;
    getArtists: () => Promise<ArtistsData>;
    getStaticData: () => Promise<StaticData>;

    loadComplete: (callback: (loadComplete: LoadComplete) => void) => void;
    //    subscribeStatistics: (callback: (statistics: Statistics) => void) => void;
    //    subscribeFileUpdates: (
    //      callback: (metaData: IAudioMetadata) => void
    //    ) => void;
  };
}
