import Link from "next/link";
import { getTVDetails } from "@/lib/tmdb";

type TVPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function TVDetailPage({
  params,
}: TVPageProps) {
  const { id } = await params;

  const show = await getTVDetails(id);

  const backdropUrl = show.backdrop_path
    ? `https://image.tmdb.org/t/p/w1280${show.backdrop_path}`
    : null;

  const posterUrl = show.poster_path
    ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
    : null;

  const year = show.first_air_date
    ? show.first_air_date.substring(0, 4)
    : "N/A";

  return (
    <main className="min-h-screen">

      {/* Backdrop */}
      {backdropUrl && (
        <div className="w-full">
          <img
            src={backdropUrl}
            alt={show.name}
            className="w-full max-h-[500px] object-cover"
          />
        </div>
      )}

      {/* Details */}
      <section className="p-6">

        <div className="flex flex-col md:flex-row gap-6">

          {/* Poster */}
          {posterUrl && (
            <img
              src={posterUrl}
              alt={show.name}
              className="w-[200px] rounded-lg"
            />
          )}

          {/* Information */}
          <div>

            <h1 className="text-4xl font-bold mb-3">
              {show.name}
            </h1>

            <p className="mb-2">
              {year} • ⭐ {show.vote_average.toFixed(1)}
            </p>

            <p className="mb-2">
              {show.number_of_seasons} Seasons •{" "}
              {show.number_of_episodes} Episodes
            </p>

            <p className="mb-4">
              {show.genres
                ?.map((genre: { name: string }) => genre.name)
                .join(" • ")}
            </p>

            <p className="max-w-3xl leading-7">
              {show.overview}
            </p>

          </div>

        </div>

      </section>

      {/* Seasons */}
      <section className="px-6 pb-10">

        <h2 className="text-2xl font-bold mb-4">
          Seasons
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-5">

          {show.seasons
            ?.filter(
              (season: any) =>
                season.season_number > 0
            )
            .map((season: any) => {

              const seasonPoster = season.poster_path
                ? `https://image.tmdb.org/t/p/w342${season.poster_path}`
                : null;

              return (
                <Link
                  key={season.id}
                  href={`/tv/${id}/season/${season.season_number}`}
                  className="group"
                >

                  {seasonPoster ? (
                    <img
                      src={seasonPoster}
                      alt={season.name}
                      loading="lazy"
                      className="w-full aspect-[2/3] object-cover rounded-lg transition-transform duration-200 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full aspect-[2/3] rounded-lg bg-gray-800 flex items-center justify-center text-gray-500">
                      No Poster
                    </div>
                  )}

                  <h3 className="mt-2 font-medium">
                    {season.name}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {season.episode_count} Episodes
                  </p>

                </Link>
              );
            })}

        </div>

      </section>

    </main>
  );
}