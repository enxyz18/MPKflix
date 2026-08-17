import { getTrendingMovies } from "@/lib/tmdb";

export async function GET() {
  try {
    const data = await getTrendingMovies();

    return Response.json({
      success: true,
      results: data.results,
    });
  } catch (error) {
    console.error("TMDB error:", error);

    return Response.json(
      {
        success: false,
        error: "Failed to connect to TMDB",
      },
      { status: 500 }
    );
  }
}