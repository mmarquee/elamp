import { data } from "./index.js";
import { unique } from "./utils.js";

export const getAlbums = (): AlbumsData => {
  console.log(data.length);
  const result = data.map((item) => `${item.metadata?.common.artist}|${item.metadata?.common.album}|${item.metadata?.common.year}`).filter(unique);

  console.log({
    albums: result,
  });

  return {
    albums: result,
  };
};
