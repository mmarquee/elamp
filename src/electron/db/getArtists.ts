import { data } from "./index.js"
import { unique } from "./utils.js"

export const getArtists = (): ArtistsData => {
    const result = data.map((item) => item.metadata?.common.artist).filter(unique)
    return {
        artists: result
    }
}