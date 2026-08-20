import Link from "next/link";
import {
  searchMulti,
  searchPerson,
  getPersonMovieCredits,
} from "@/lib/tmdb";

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const params = await searchParams;
  const query = params.q?.trim() || "";

  if (!query) {
    return (
      <main className="px-6 py-8">
        <h1 className="text-3xl font-bold">
          Search MPKflix
        </h1>

        <p className="mt-3 text-gray-400">
          Enter a movie, TV show, or actor name to search.
        </p>
      </main>
    );
  }

  const [multiData, personData] = await Promise.all([
    searchMulti(query),
    searchPerson(query),
  ]);

  const mediaResults = multiData.results.filter(
    (item: any) =>
      item.media_type === "movie" ||
      item.media_type === "tv"
  );

  const person = personData.results?.[0];

  let actorMovies: any[] = [];

  if (person) {
    const credits = await getPersonMovieCredits(
      String(person.id)
    );

    actorMovies = (credits.cast || [])
      .filter((item: any) => item.poster_path)
      .sort(
        (a: any, b: any) =>
          (b.popularity || 0) - (a.popularity || 0)
      );
  }

  return (
    <main className="px-6 py-8">

      <h1 className="text-2xl font-bold mb-6">
        Search results for "{query}"
      </h1>

      {/* Actor Results */}
      {person && actorMovies.length > 0 && (
        <section className="mb-10">

          <h2 className="text-xl font-bold mb-4">
            🎭 {person.name}
          </h2>

          <p className="text-gray-400 mb-5">
            Movies featuring {person.name}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5">

            {actorMovies.map((item: any) => {

              const title = item.title;

              const date = item.release_date;

              const posterUrl = item.poster_path
                ? `https://image.tmdb.org/t/p/w342${item.poster_path}`
                : null;

              return (
                <Link
                  key={`actor-${item.id}`}
                  href={`/movie/${item.id}`}
                  className="group"
                >

                  {posterUrl ? (
                    <img
                      src={posterUrl}
                      alt={title}
                      loading="lazy"
                      className="w-full aspect-[2/3] object-cover rounded-lg transition-transform duration-200 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full aspect-[2/3] rounded-lg bg-gray-800 flex items-center justify-center text-gray-500">
                      No Poster
                    </div>
                  )}

                  <h3 className="mt-2 text-sm font-medium line-clamp-2">
                    {title}
                  </h3>

                  <p className="text-sm text-gray-400">
                    ⭐ {item.vote_average?.toFixed(1) || "N/A"}
                    {" • "}
                    {date
                      ? date.substring(0, 4)
                      : "N/A"}
                  </p>

                </Link>
              );
            })}

          </div>

        </section>
      )}

      {/* Normal Movie / TV Results */}
      {mediaResults.length > 0 && (
        <section>

          <h2 className="text-xl font-bold mb-4">
            Movies & TV Shows
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5">

            {mediaResults.map((item: any) => {

              const title =
                item.media_type === "movie"
                  ? item.title
                  : item.name;

              const date =
                item.media_type === "movie"
                  ? item.release_date
                  : item.first_air_date;

              const posterUrl = item.poster_path
                ? `https://image.tmdb.org/t/p/w342${item.poster_path}`
                : null;

              const href =
                item.media_type === "movie"
                  ? `/movie/${item.id}`
                  : `/tv/${item.id}`;

              return (
                <Link
                  key={`${item.media_type}-${item.id}`}
                  href={href}
                  className="group"
                >

                  {posterUrl ? (
                    <img
                      src={posterUrl}
                      alt={title}
                      loading="lazy"
                      className="w-full aspect-[2/3] object-cover rounded-lg transition-transform duration-200 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full aspect-[2/3] rounded-lg bg-gray-800 flex items-center justify-center text-gray-500">
                      No Poster
                    </div>
                  )}

                  <h2 className="mt-2 text-sm font-medium line-clamp-2">
                    {title}
                  </h2>

                  <p className="text-sm text-gray-400">
                    ⭐ {item.vote_average?.toFixed(1) || "N/A"}
                    {" • "}
                    {date
                      ? date.substring(0, 4)
                      : "N/A"}
                  </p>

                </Link>
              );
            })}

          </div>

        </section>
      )}

      {mediaResults.length === 0 &&
        actorMovies.length === 0 && (
          <p className="text-gray-400">
            No results found.
          </p>
        )}

    </main>
  );
}