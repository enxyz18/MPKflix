import {
  getPopularTVShows,
  getAiringTodayTV,
  getOnTheAirTV,
  getTopRatedTV,
} from "@/lib/tmdb";

import TVCard from "@/components/TVCard";

export default async function TVPage() {
  const [
    popular,
    airingToday,
    onTheAir,
    topRated,
  ] = await Promise.all([
    getPopularTVShows(),
    getAiringTodayTV(),
    getOnTheAirTV(),
    getTopRatedTV(),
  ]);

  return (
    <main className="px-6 py-8">

      <h1 className="text-3xl font-bold mb-8">
        TV Shows
      </h1>

      {/* Popular */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Popular TV Shows
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {popular.results.map((show: any) => (
            <TVCard
              key={show.id}
              show={show}
            />
          ))}
        </div>
      </section>

      {/* Airing Today */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Airing Today
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {airingToday.results.map((show: any) => (
            <TVCard
              key={show.id}
              show={show}
            />
          ))}
        </div>
      </section>

      {/* On The Air */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          On The Air
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {onTheAir.results.map((show: any) => (
            <TVCard
              key={show.id}
              show={show}
            />
          ))}
        </div>
      </section>

      {/* Top Rated */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Top Rated TV Shows
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {topRated.results.map((show: any) => (
            <TVCard
              key={show.id}
              show={show}
            />
          ))}
        </div>
      </section>

    </main>
  );
}