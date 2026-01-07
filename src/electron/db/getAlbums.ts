import { data } from "./index.js";

export const getAlbums = (): AlbumsData => {
  const result = Array.from(
    new Set(
      data
        .map((item) => {
          return {
            artist: item.metadata?.common.artist,
            album: item.metadata?.common.album,
            year: item.metadata?.common.year,
          };
        })
        .map((obj) => JSON.stringify(obj))
    )
  ).map((e) => JSON.parse(e));

  return {
    albums: result,
  };
};
