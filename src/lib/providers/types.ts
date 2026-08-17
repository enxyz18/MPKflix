export type ContentType = "movie" | "tv";

export type VideoSource = {
  url: string;
  type: "iframe" | "video";
};

export type VideoSourceResult = {
  status: "available" | "unavailable";
  source: VideoSource | null;
  provider: string | null;
};

export type VideoProvider = {
  id: string;
  name: string;

  getMovieSource: (
    movieId: string
  ) => VideoSource | null;

  getEpisodeSource: (
    tvId: string,
    seasonNumber: number,
    episodeNumber: number
  ) => VideoSource | null;
};