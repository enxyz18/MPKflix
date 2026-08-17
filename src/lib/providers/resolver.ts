import { getProvider } from "./index";
import type { VideoSourceResult } from "./types";

const PROVIDER_ORDER = [
  process.env.MPK_VIDEO_PROVIDER || "mock",
];

export function getMovieVideoSource(
  movieId: string
): VideoSourceResult {
  for (const providerId of PROVIDER_ORDER) {
  const provider = getProvider(providerId);

  if (!provider) {
    continue;
  }

  const source = provider.getMovieSource(movieId);

  if (source) {
    return {
      status: "available",
      source,
      provider: provider.name,
    };
  }
}

return {
  status: "unavailable",
  source: null,
  provider: null,
};
}

export function getEpisodeVideoSource(
  tvId: string,
  seasonNumber: number,
  episodeNumber: number
): VideoSourceResult {
  for (const providerId of PROVIDER_ORDER) {
  const provider = getProvider(providerId);

  if (!provider) {
    continue;
  }

  const source = provider.getEpisodeSource(
    tvId,
    seasonNumber,
    episodeNumber
  );

  if (source) {
    return {
      status: "available",
      source,
      provider: provider.name,
    };
  }
}

return {
  status: "unavailable",
  source: null,
  provider: null,
};
}