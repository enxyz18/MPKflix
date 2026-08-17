export default function Loading() {
  return (
    <main className="px-6 py-8 animate-pulse">

      {/* Back Link Skeleton */}
      <div className="h-5 w-32 rounded bg-gray-800" />

      <div className="mt-6">

        {/* Episode Title */}
        <div className="h-9 w-3/4 max-w-2xl rounded bg-gray-800" />

        {/* Season / Episode */}
        <div className="h-5 w-48 rounded bg-gray-800 mt-2" />

        {/* Video Player Skeleton */}
        <div className="mt-8 w-full aspect-video rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center">
          <div className="h-16 w-16 rounded-full bg-gray-800" />
        </div>

        {/* Episode Information */}
        <div className="mt-6 max-w-4xl">

          <div className="h-5 w-64 rounded bg-gray-800" />

          <div className="space-y-3 mt-4">
            <div className="h-4 w-full rounded bg-gray-800" />
            <div className="h-4 w-full rounded bg-gray-800" />
            <div className="h-4 w-2/3 rounded bg-gray-800" />
          </div>

        </div>

      </div>

    </main>
  );
}