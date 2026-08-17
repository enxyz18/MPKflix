import Link from "next/link";

type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
  release_date: string;
};

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({
  movie,
}: MovieCardProps) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : "/no-poster.png";

  const releaseYear = movie.release_date
    ? movie.release_date.substring(0, 4)
    : "N/A";

  return (
    <article className="w-[160px] shrink-0 sm:w-[170px]">

      <Link
        href={`/movie/${movie.id}`}
        className="group block"
      >

        {/* Poster */}
        <div className="relative overflow-hidden rounded-lg bg-gray-900">

          <img
            src={posterUrl}
            alt={movie.title}
            loading="lazy"
            className="aspect-[2/3] w-full object-cover transition duration-300 group-hover:scale-105"
          />

          {/* Rating */}
          <div className="absolute right-2 top-2 rounded-md bg-black/75 px-2 py-1 text-xs font-semibold backdrop-blur-sm">
            <span className="text-yellow-400">
              ★
            </span>{" "}
            {movie.vote_average
              ? movie.vote_average.toFixed(1)
              : "N/A"}
          </div>

        </div>

        {/* Movie Title */}
        <h3 className="mt-2 line-clamp-2 text-sm font-medium leading-5 transition-colors group-hover:text-red-500">
          {movie.title}
        </h3>

      </Link>

      {/* Release Year */}
      <p className="mt-1 text-xs text-gray-500">
        {releaseYear}
      </p>

    </article>
  );
}