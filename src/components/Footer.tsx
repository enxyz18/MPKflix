export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black px-6 py-8">
      <div className="mx-auto max-w-7xl text-center">

        <div className="text-lg font-bold">
          MPK<span className="text-red-500">flix</span>
        </div>

        <p className="mt-2 text-sm text-gray-500">
          Your movie & TV discovery platform.
        </p>

        <p className="mt-4 text-xs text-gray-600">
          © {new Date().getFullYear()} MPKflix. All rights reserved.
        </p>
		
		<p className="mt-3 text-xs text-gray-600">
		This product uses the TMDB API but is not endorsed or certified by TMDB.
		</p>

      </div>
    </footer>
  );
}