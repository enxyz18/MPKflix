export default function Loading() {
  return (
    <main className="min-h-screen animate-pulse">

      {/* Backdrop Skeleton */}
      <div className="w-full h-[300px] md:h-[500px] bg-gray-800" />

      {/* TV Information */}
      <section className="p-6">

        <div className="flex flex-col md:flex-row gap-6">

          {/* Poster Skeleton */}
          <div className="w-[200px] h-[300px] rounded-lg bg-gray-800" />

          {/* Information Skeleton */}
          <div className="flex-1">

            <div className="h-10 w-3/4 rounded bg-gray-800 mb-4" />

            <div className="h-5 w-40 rounded bg-gray-800 mb-4" />

            <div className="h-5 w-56 rounded bg-gray-800 mb-4" />

            <div className="h-5 w-64 rounded bg-gray-800 mb-6" />

            <div className="space-y-3 max-w-3xl">
              <div className="h-4 w-full rounded bg-gray-800" />
              <div className="h-4 w-full rounded bg-gray-800" />
              <div className="h-4 w-2/3 rounded bg-gray-800" />
            </div>

          </div>

        </div>

      </section>

      {/* Seasons Skeleton */}
      <section className="px-6 pb-10">

        <div className="h-8 w-32 rounded bg-gray-800 mb-4" />

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-5">

          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index}>

              <div className="w-full aspect-[2/3] rounded-lg bg-gray-800" />

              <div className="h-5 w-3/4 rounded bg-gray-800 mt-2" />

              <div className="h-4 w-1/2 rounded bg-gray-800 mt-2" />

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}