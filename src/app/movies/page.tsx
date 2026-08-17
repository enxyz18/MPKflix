import {
  getPopularMovies,
  getNowPlayingMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/tmdb";

import MovieCard from "@/components/MovieCard";

export default async function MoviesPage() {
  const [
    popular,
    nowPlaying,
    topRated,
    upcoming,
  ] = await Promise.all([
    getPopularMovies(),
    getNowPlayingMovies(),
    getTopRatedMovies(),
    getUpcomingMovies(),
  ]);

  return (
    <main className="px-6 py-8">

      <h1 className="text-3xl font-bold mb-8">
        Movies
      </h1>

      {/* Popular */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Popular Movies
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {popular.results.map((movie: any) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      </section>

      {/* Now Playing */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Now Playing
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {nowPlaying.results.map((movie: any) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      </section>

      {/* Top Rated */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Top Rated
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {topRated.results.map((movie: any) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      </section>

      {/* Upcoming */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Upcoming Movies
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {upcoming.results.map((movie: any) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      </section>

    </main>
  );
}