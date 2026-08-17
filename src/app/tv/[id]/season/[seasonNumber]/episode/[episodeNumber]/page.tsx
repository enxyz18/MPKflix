import Link from "next/link";
import { getTVSeason } from "@/lib/tmdb";
import VideoPlayer from "@/components/VideoPlayer";
import { getEpisodeVideoSource } from "@/lib/providers/resolver";

type EpisodePageProps = {
  params: Promise<{
    id: string;
    seasonNumber: string;
    episodeNumber: string;
  }>;
};

export default async function EpisodePage({
  params,
}: EpisodePageProps) {
  const {
    id,
    seasonNumber,
    episodeNumber,
  } = await params;

  const season = await getTVSeason(
    id,
    seasonNumber
  );

  const episode = season.episodes?.find(
    (item: any) =>
      String(item.episode_number) === episodeNumber
  );
  
  const videoResult = getEpisodeVideoSource(
	id,
	Number(seasonNumber),
	Number(episodeNumber)
  );

  if (!episode) {
    return (
      <main className="px-6 py-8">
        <h1 className="text-2xl font-bold">
          Episode not found
        </h1>

        <Link
          href={`/tv/${id}/season/${seasonNumber}`}
          className="inline-block mt-4 text-gray-400"
        >
          ← Back to Season
        </Link>
      </main>
    );
  }

  const stillUrl = episode.still_path
    ? `https://image.tmdb.org/t/p/w1280${episode.still_path}`
    : null;

  return (
    <main className="px-6 py-8">

      <Link
        href={`/tv/${id}/season/${seasonNumber}`}
        className="text-gray-400 hover:text-white"
      >
        ← Back to Season
      </Link>

      <div className="mt-6">

        <h1 className="text-3xl font-bold">
          {episode.name}
        </h1>

        <p className="text-gray-400 mt-2">
          Season {seasonNumber} • Episode{" "}
          {episodeNumber}
        </p>

        {/* Player Placeholder */}
        <div className="mt-8">
{videoResult.status === "available" ? (
  <>
  <VideoPlayer
    title={episode.name}
    source={videoResult.source}
  />
  <p className="mt-3 text-sm text-gray-500">
      Playing via {videoResult.provider}
    </p>
	</>
) : (
  <div className="w-full aspect-video rounded-lg overflow-hidden bg-black border border-gray-800">
    <div className="w-full h-full flex items-center justify-center px-6">
      <div className="text-center">

        <div className="text-5xl mb-4">
          ▶
        </div>

        <h2 className="text-xl font-bold">
          Video Unavailable
        </h2>

        <p className="text-gray-500 mt-2">
          This episode is currently unavailable for playback.
        </p>

      </div>
    </div>
  </div>
)}
		</div>

        {/* Episode Information */}
        <div className="mt-6 max-w-4xl">

          <p className="text-gray-400">
            {episode.air_date || "Unknown air date"}
            {" • "}
            ⭐ {episode.vote_average?.toFixed(1) || "N/A"}
          </p>

          <p className="mt-4 leading-7">
            {episode.overview ||
              "No episode description available."}
          </p>

        </div>

      </div>

    </main>
  );
}