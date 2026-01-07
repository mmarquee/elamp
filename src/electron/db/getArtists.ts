import { data } from "./index.js";

export const getArtists = (): ArtistsData => {
  const result = Array.from(
    new Set(
      data
        .map((item) => {
          return {
            artist: item.metadata?.common.artist,
          };
        })
        .map((obj) => JSON.stringify(obj))
    )
  ).map((e) => JSON.parse(e));

  return {
    artists: result,
  };
};
