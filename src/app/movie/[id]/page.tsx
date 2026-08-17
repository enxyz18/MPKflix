import { getMovieDetails } from "@/lib/tmdb";
import Link from "next/link";
import WatchButton from "@/components/WatchButton";

type MoviePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MoviePage({
  params,
}: MoviePageProps) {
  const { id } = await params;

  const movie = await getMovieDetails(id);

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
    : null;

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  const year = movie.release_date
    ? movie.release_date.substring(0, 4)
    : "N/A";

  return (
    <main className="min-h-screen">

      {/* Backdrop */}
      {backdropUrl && (
        <div className="w-full">
          <img
            src={backdropUrl}
            alt={movie.title}
            className="w-full max-h-[500px] object-cover"
          />
        </div>
      )}

      {/* Movie Information */}
      <section className="p-6">

        <div className="flex flex-col md:flex-row gap-6">

          {/* Poster */}
          {posterUrl && (
            <img
              src={posterUrl}
              alt={movie.title}
              className="w-[200px] rounded-lg"
            />
          )}

          {/* Details */}
          <div>

            <h1 className="text-4xl font-bold mb-3">
              {movie.title}
            </h1>

            <p className="mb-2">
              {year} • ⭐ {movie.vote_average.toFixed(1)}
            </p>

            <p className="mb-4">
              {movie.genres
                ?.map((genre: { name: string }) => genre.name)
                .join(" • ")}
            </p>

            <p className="max-w-3xl leading-7">
              {movie.overview}
            </p>

            <WatchButton href={`/watch/movie/${id}`} />

          </div>

        </div>

      </section>

    </main>
  );
}