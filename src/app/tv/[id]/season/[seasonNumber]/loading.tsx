export default function Loading() {
  return (
    <main className="px-6 py-8 animate-pulse">

      {/* Back Link Skeleton */}
      <div className="h-5 w-32 rounded bg-gray-800" />

      {/* Season Title */}
      <div className="h-9 w-64 rounded bg-gray-800 mt-6" />

      {/* Episode Count */}
      <div className="h-5 w-32 rounded bg-gray-800 mt-2 mb-8" />

      {/* Episode List */}
      <div className="space-y-4">

        {Array.from({ length: 6 }).map((_, index) => (
          <article
            key={index}
            className="flex flex-col sm:flex-row gap-4 rounded-lg bg-gray-900 p-4"
          >

            {/* Episode Image */}
            <div className="w-full sm:w-[250px] aspect-video rounded-lg bg-gray-800" />

            {/* Episode Information */}
            <div className="flex-1">

              <div className="h-4 w-24 rounded bg-gray-800" />

              <div className="h-6 w-3/4 rounded bg-gray-800 mt-2" />

              <div className="h-4 w-48 rounded bg-gray-800 mt-3" />

              <div className="space-y-2 mt-4">
                <div className="h-4 w-full rounded bg-gray-800" />
                <div className="h-4 w-full rounded bg-gray-800" />
                <div className="h-4 w-2/3 rounded bg-gray-800" />
              </div>

              <div className="h-10 w-28 rounded-lg bg-gray-800 mt-4" />

            </div>

          </article>
        ))}

      </div>

    </main>
  );
}