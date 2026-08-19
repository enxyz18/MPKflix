export default function Loading() {
  return (
    <main className="px-6 py-8 animate-pulse">

      {/* Search Title */}
      <div className="h-8 w-72 rounded bg-gray-800 mb-6" />

      {/* Results Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5">

        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index}>

            {/* Poster */}
            <div className="w-full aspect-[2/3] rounded-lg bg-gray-800" />

            {/* Title */}
            <div className="h-4 w-4/5 rounded bg-gray-800 mt-2" />

            {/* Rating / Year */}
            <div className="h-4 w-2/3 rounded bg-gray-800 mt-2" />

          </div>
        ))}

      </div>

    </main>
  );
}