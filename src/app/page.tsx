import Link from "next/link";

import {
  getTrendingMovies,
  getPopularMovies,
  getPopularTVShows,
  getTopRatedMovies,
  getMalaysiaMovies, /**/
} from "@/lib/tmdb";

import MovieCard from "@/components/MovieCard";
import TVCard from "@/components/TVCard";

export default async function Home() {
  const [
    trending,
    popularMovies,
    popularTV,
    topRatedMovies,
	MalaysiaMovies, /**/
  ] = await Promise.all([
    getTrendingMovies(),
    getPopularMovies(),
    getPopularTVShows(),
    getTopRatedMovies(),
	getMalaysiaMovies(), /**/
  ]);

  const randomIndex = Math.floor(
    Math.random() * topRatedMovies.results.length
  );

  const featuredMovie =
    topRatedMovies.results?.[randomIndex];

  const releaseYear = featuredMovie?.release_date
    ? featuredMovie.release_date.substring(0, 4)
    : null;

  return (
    <main>

      {/* Hero Section */}
      {featuredMovie && (
        <section
          className="relative min-h-[520px] overflow-hidden md:min-h-[600px]"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          {/* Left Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

          {/* Hero Content */}
          <div className="relative z-10 flex min-h-[520px] items-end md:min-h-[600px]">

            <div className="max-w-2xl px-6 pb-10 md:px-10 md:pb-16">

              {/* Label */}
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-red-500 md:text-sm">
                Featured Movie
              </p>

              {/* Title */}
              <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
                {featuredMovie.title}
              </h1>

              {/* Movie Info */}
              <div className="mt-4 flex items-center gap-3 text-sm text-gray-300">

                {releaseYear && (
                  <span>
                    {releaseYear}
                  </span>
                )}

                <span>•</span>

                <span className="text-yellow-400">
                  ★
                </span>

                <span>
                  {featuredMovie.vote_average
                    ? featuredMovie.vote_average.toFixed(1)
                    : "N/A"}
                </span>

              </div>

              {/* Overview */}
              <p className="mt-4 line-clamp-3 max-w-xl text-sm leading-6 text-gray-300 md:text-base md:leading-7">
                {featuredMovie.overview ||
                  "No description available."}
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">

                <Link
                  href={`/watch/movie/${featuredMovie.id}`}
                  className="rounded-lg bg-red-600 px-5 py-3 text-sm font-bold transition hover:bg-red-700 md:px-6 md:text-base"
                >
                  ▶ Watch Now
                </Link>

                <Link
                  href={`/movie/${featuredMovie.id}`}
                  className="rounded-lg bg-white/10 px-5 py-3 text-sm font-bold backdrop-blur-sm transition hover:bg-white/20 md:px-6 md:text-base"
                >
                  More Info
                </Link>

              </div>

            </div>

          </div>

        </section>
      )}

      {/* Content Sections */}
      <div className="px-4 py-8 md:px-6 md:py-10">

        {/* Trending Movies */}
        <section className="mb-10">

          <h2 className="mb-4 text-2xl font-bold">
            Trending Movies
          </h2>

          <div className="flex gap-4 overflow-x-auto pb-4">
            {trending.results.map((movie: any) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))}
          </div>

        </section>

        {/* Popular Movies */}
        <section className="mb-10">

          <h2 className="mb-4 text-2xl font-bold">
            Popular Movies
          </h2>

          <div className="flex gap-4 overflow-x-auto pb-4">
            {popularMovies.results.map((movie: any) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))}
          </div>

        </section>

        {/* Popular TV Shows */}
        <section className="mb-10">

          <h2 className="mb-4 text-2xl font-bold">
            Popular TV Shows
          </h2>

          <div className="flex gap-4 overflow-x-auto pb-4">
            {popularTV.results.map((show: any) => (
              <TVCard
                key={show.id}
                show={show}
              />
            ))}
          </div>

        </section>
		
		{/* Malaysia Movies */}
        <section className="mb-10">

          <h2 className="mb-4 text-2xl font-bold">
            Malaysia Movies
          </h2>

          <div className="flex gap-4 overflow-x-auto pb-4">
            {MalaysiaMovies.results.map((movie: any) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))}
          </div>

        </section>

      </div>

    </main>
  );
}