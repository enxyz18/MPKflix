import { VideoProvider } from "./types";

const vidsrcProvider: VideoProvider = {
  id: "vidsrc",
  name: "VidSrc",

  getMovieSource: (movieId: string) => {
    return {
      url: `https://vidsrcme.ru/embed/movie/${movieId}$?player=jw`,
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
      url: `https://vidsrcme.ru/embed/tv/${tvId}/${seasonNumber}/${episodeNumber}$?player=jw`,
      type: "iframe",
    };
  },
};

export default vidsrcProvider;