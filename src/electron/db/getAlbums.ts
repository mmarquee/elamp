import { data } from "./index.js";
import { unique } from "./utils.js";

export const getAlbums = (): AlbumsData => {
  console.log(data.length);

  const dd = data.map((item) => ({
    key: `${item.metadata?.common.artist}-${item.metadata?.common.album}-${item.metadata?.common.year}`,
    artist: item.metadata?.common.artist,
    album: item.metadata?.common.album,
    year: item.metadata?.common.year,
  }));

  const result = dd.filter(unique);

  const uniqueArr = Array.from(new Set(dd));

  console.log({
    //result,
    uniqueArr
  });
  

  return {
    albums: uniqueArr,
  };
};
