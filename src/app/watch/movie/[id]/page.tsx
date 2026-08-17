import Link from "next/link";
import { getMovieDetails } from "@/lib/tmdb";
import VideoPlayer from "@/components/VideoPlayer";
import { getMovieVideoSource } from "@/lib/providers/resolver";

type MovieWatchPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MovieWatchPage({
  params,
}: MovieWatchPageProps) {
  const { id } = await params;

  const movie = await getMovieDetails(id);
  
  const videoResult = getMovieVideoSource(id);

  return (
    <main className="px-6 py-8">

      <Link
        href={`/movie/${id}`}
        className="text-gray-400 hover:text-white"
      >
        ← Back to Movie
      </Link>

      <div className="mt-6">

        <h1 className="text-3xl font-bold">
          {movie.title}
        </h1>

        <p className="text-gray-400 mt-2">
          {movie.release_date
            ? movie.release_date.substring(0, 4)
            : "N/A"}
          {" • "}
          ⭐ {movie.vote_average?.toFixed(1) || "N/A"}
        </p>

        <div className="mt-8">
{videoResult.status === "available" ? (
  <>
  <VideoPlayer
    title={movie.title}
    source={videoResult.source}
  />
  <p className="mt-3 text-sm text-gray-500">
      Playing via {videoResult.provider}
    </p>
	</>
) : (
  <div className="w-full aspect-video rounded-lg overflow-hidden bg-black border border-gray-800">
    <div className="w-full h-full flex items-center justify-center px-6">
      <div className="text-center">

        <div className="text-5xl mb-4">
          ▶
        </div>

        <h2 className="text-xl font-bold">
          Video Unavailable
        </h2>

        <p className="text-gray-500 mt-2">
          This movie is currently unavailable for playback.
        </p>

      </div>
    </div>
  </div>
)}
        </div>

        <div className="mt-6 max-w-4xl">

          <p className="leading-7">
            {movie.overview ||
              "No movie description available."}
          </p>

        </div>

      </div>

    </main>
  );
}
