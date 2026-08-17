"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  const router = useRouter();

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const searchQuery = query.trim();

    if (!searchQuery) {
      return;
    }

    router.push(
      `/search?q=${encodeURIComponent(searchQuery)}`
    );

    setSearchOpen(false);
    setMenuOpen(false);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/90 backdrop-blur">

      {/* Main Header */}
      <div className="flex items-center justify-between px-4 py-4 md:px-6">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-2xl font-bold tracking-tight"
        >
          MPK<span className="text-red-500">flix</span>
		  <br /><span className="text-sm">(Maikel Punya Kerja)</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">

          <Link
            href="/"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/movies"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Movies
          </Link>

          <Link
            href="/tv"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            TV Shows
          </Link>

          <button
            type="button"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
            className="text-lg transition hover:text-red-500"
          >
            🔍
          </button>

        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="text-2xl md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="border-t border-white/5 px-4 py-4 md:hidden">

          <div className="flex flex-col gap-1">

            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-gray-300 transition hover:bg-white/5 hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/movies"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-gray-300 transition hover:bg-white/5 hover:text-white"
            >
              Movies
            </Link>

            <Link
              href="/tv"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-gray-300 transition hover:bg-white/5 hover:text-white"
            >
              TV Shows
            </Link>

            <button
              type="button"
              onClick={() => {
                setSearchOpen(true);
                setMenuOpen(false);
              }}
              className="rounded-lg px-3 py-3 text-left text-gray-300 transition hover:bg-white/5 hover:text-white"
            >
              🔍 Search
            </button>

          </div>

        </nav>
      )}

      {/* Search Box */}
      {searchOpen && (
        <div className="border-t border-white/5 px-4 py-4 md:px-6">

          <form
            onSubmit={handleSearch}
            className="mx-auto flex max-w-2xl gap-2 md:gap-3"
          >

            <input
              type="search"
              value={query}
              onChange={(event) =>
                setQuery(event.target.value)
              }
              placeholder="Search movies or TV shows..."
              autoFocus
              className="min-w-0 flex-1 rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white outline-none transition focus:border-red-500"
            />

            <button
              type="submit"
              className="rounded-lg bg-red-600 px-4 py-3 text-sm font-bold transition hover:bg-red-700 md:px-6"
            >
              Search
            </button>

          </form>

        </div>
      )}

    </header>
  );
}