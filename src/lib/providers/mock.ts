import { VideoProvider } from "./types";

const mockProvider: VideoProvider = {
  id: "mock",
  name: "Mock Provider",

  getMovieSource: () => {
    return null;
  },

  getEpisodeSource: () => {
    return null;
  },
};

export default mockProvider;