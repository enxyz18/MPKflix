import Link from "next/link";

type TVShow = {
  id: number;
  name: string;
  poster_path: string | null;
  vote_average: number;
  first_air_date: string;
};

type TVCardProps = {
  show: TVShow;
};

export default function TVCard({
  show,
}: TVCardProps) {
  const posterUrl = show.poster_path
    ? `https://image.tmdb.org/t/p/w342${show.poster_path}`
    : "/no-poster.png";

  const releaseYear = show.first_air_date
    ? show.first_air_date.substring(0, 4)
    : "N/A";

  return (
    <article className="w-[160px] shrink-0 sm:w-[170px]">

      <Link
        href={`/tv/${show.id}`}
        className="group block"
      >

        {/* Poster */}
        <div className="relative overflow-hidden rounded-lg bg-gray-900">

          {show.poster_path ? (
            <img
              src={posterUrl}
              alt={show.name}
              loading="lazy"
              className="aspect-[2/3] w-full object-cover transition duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex aspect-[2/3] w-full items-center justify-center text-sm text-gray-500">
              No Poster
            </div>
          )}

          {/* Rating */}
          <div className="absolute right-2 top-2 rounded-md bg-black/75 px-2 py-1 text-xs font-semibold backdrop-blur-sm">
            <span className="text-yellow-400">
              ★
            </span>{" "}
            {show.vote_average
              ? show.vote_average.toFixed(1)
              : "N/A"}
          </div>

        </div>

        {/* TV Show Title */}
        <h3 className="mt-2 line-clamp-2 text-sm font-medium leading-5 transition-colors group-hover:text-red-500">
          {show.name}
        </h3>

      </Link>

      {/* First Air Year */}
      <p className="mt-1 text-xs text-gray-500">
        {releaseYear}
      </p>

    </article>
  );
}