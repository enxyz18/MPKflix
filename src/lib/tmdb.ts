const TMDB_BASE_URL = "https://api.themoviedb.org/3";

async function tmdbFetch(endpoint: string) {
  const response = await fetch(
    `${TMDB_BASE_URL}${endpoint}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`,
        accept: "application/json",
      },
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`TMDB request failed: ${response.status}`);
  }

  return response.json();
}

export async function getTrendingMovies() {
  return tmdbFetch("/trending/movie/week");
}

export async function getPopularMovies() {
  return tmdbFetch("/movie/popular");
}

export async function getPopularTVShows() {
  return tmdbFetch("/tv/popular");
}

export async function getMovieDetails(movieId: string) {
  return tmdbFetch(`/movie/${movieId}`);
}

export async function searchMulti(query: string) {
  const encodedQuery = encodeURIComponent(query);

  return tmdbFetch(
    `/search/multi?query=${encodedQuery}&include_adult=false&language=en-US&page=1`
  );
}

export async function searchPerson(query: string) {
  const encodedQuery = encodeURIComponent(query);

  return tmdbFetch(
    `/search/person?query=${encodedQuery}&include_adult=false&language=en-US&page=1`
  );
}

export async function getPersonMovieCredits(personId: string) {
  return tmdbFetch(
    `/person/${personId}/movie_credits?language=en-US`
  );
}

export async function getNowPlayingMovies() {
  return tmdbFetch("/movie/now_playing");
}

export async function getTopRatedMovies() {
  return tmdbFetch("/movie/top_rated");
}

export async function getUpcomingMovies() {
  return tmdbFetch("/movie/upcoming");
}

export async function getAiringTodayTV() {
  return tmdbFetch("/tv/airing_today");
}

export async function getOnTheAirTV() {
  return tmdbFetch("/tv/on_the_air");
}

export async function getTopRatedTV() {
  return tmdbFetch("/tv/top_rated");
}

export async function getTVDetails(tvId: string) {
  return tmdbFetch(`/tv/${tvId}`);
}

export async function getTVSeason(
  tvId: string,
  seasonNumber: string
) {
  return tmdbFetch(
    `/tv/${tvId}/season/${seasonNumber}`
  );
}

export async function getMalaysiaMovies() {
  return tmdbFetch("/discover/movie?with_origin_country=MY");
}