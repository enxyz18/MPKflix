import Link from "next/link";
import { getTVSeason } from "@/lib/tmdb";
import WatchButton from "@/components/WatchButton";

type SeasonPageProps = {
  params: Promise<{
    id: string;
    seasonNumber: string;
  }>;
};

export default async function SeasonPage({
  params,
}: SeasonPageProps) {
  const { id, seasonNumber } = await params;

  const season = await getTVSeason(
    id,
    seasonNumber
  );

  return (
    <main className="px-6 py-8">

      <Link
        href={`/tv/${id}`}
        className="text-gray-400 hover:text-white"
      >
        ← Back to TV Show
      </Link>

      <h1 className="text-3xl font-bold mt-6">
        {season.name}
      </h1>

      <p className="text-gray-400 mt-2 mb-8">
        {season.episodes?.length || 0} Episodes
      </p>

      <div className="space-y-4">

        {season.episodes?.map((episode: any) => {

          const stillUrl = episode.still_path
            ? `https://image.tmdb.org/t/p/w500${episode.still_path}`
            : null;

          return (
            <article
              key={episode.id}
              className="flex flex-col sm:flex-row gap-4 rounded-lg bg-gray-900 p-4"
            >

              {/* Episode Image */}
              {stillUrl ? (
                <img
                  src={stillUrl}
                  alt={episode.name}
                  loading="lazy"
                  className="w-full sm:w-[250px] aspect-video object-cover rounded-lg"
                />
              ) : (
                <div className="w-full sm:w-[250px] aspect-video rounded-lg bg-gray-800 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}

              {/* Episode Information */}
              <div className="flex-1">

                <p className="text-sm text-gray-400">
                  Episode {episode.episode_number}
                </p>

                <h2 className="text-xl font-bold mt-1">
                  {episode.name}
                </h2>

                <p className="text-sm text-gray-400 mt-2">
                  {episode.air_date || "Unknown air date"}
                  {" • "}
                  ⭐ {episode.vote_average?.toFixed(1) || "N/A"}
                </p>

                <p className="text-gray-300 mt-3 line-clamp-3">
                  {episode.overview ||
                    "No episode description available."}
                </p>

                <div className="mt-4">
					<WatchButton
						href={`/tv/${id}/season/${seasonNumber}/episode/${episode.episode_number}`}
						children="▶ Watch"
					/>
				</div>

              </div>

            </article>
          );
        })}

      </div>

    </main>
  );
}