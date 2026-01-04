import { data } from "./index.js";
import { unique } from "./utils.js";

export const getArtists = (): AlbumsData => {
  const result = data
    .map((item) => item.metadata?.common.artist)
    .filter(unique);
  return {
    albums: result,
  };
};
