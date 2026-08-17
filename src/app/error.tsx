"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="max-w-md text-center">

        <h1 className="text-2xl font-bold">
          Something went wrong
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          We couldn't load MPKflix right now.
          Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-lg bg-red-600 px-6 py-3 text-sm font-bold transition hover:bg-red-700"
        >
          Try Again
        </button>

      </div>
    </main>
  );
}