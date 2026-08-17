export default function Loading() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">

        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-red-500" />

        <p className="mt-4 text-sm text-gray-500">
          Loading MPKflix...
        </p>

      </div>
    </main>
  );
}