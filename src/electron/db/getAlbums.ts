import { data } from "./index.js";
import { unique } from "./utils.js";

export const getAlbums = (): AlbumsData => {
    const result = data.map((item) => item.metadata?.common.album).filter(unique)
    return {
        albums: result
    }
}