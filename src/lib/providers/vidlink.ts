import { VideoProvider } from "./types";

const vidlinkProvider: VideoProvider = {
  id: "vidlink",
  name: "VidLink",

  getMovieSource: (movieId: string) => {
    return {
      url: `https://vidlink.pro/movie/${movieId}$?player=jw`,
	  /*sandbox: `allow-scripts allow-same-origin allow-forms allow-pointer-lock`,*/
      type: "iframe",
    };
  },

  getEpisodeSource: (
    tvId: string,
    seasonNumber: number,
    episodeNumber: number
  ) => {
    return {
      url: `https://vidlink.pro/tv/${tvId}/${seasonNumber}/${episodeNumber}$?player=jw`,
      type: "iframe",
    };
  },
};

export default vidlinkProvider;