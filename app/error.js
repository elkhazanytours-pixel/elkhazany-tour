"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full bg-white/5 border border-white/12 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
        <h1 className="text-3xl font-bold">Temporary issue</h1>
        <p className="mt-3 text-gray-300">
          A small glitch happened. Click retry and you’ll be back instantly.
        </p>

        <div className="mt-6 flex gap-3 flex-wrap">
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:opacity-90 transition"
          >
            Retry
          </button>

          <Link
            href="/"
            className="px-6 py-3 rounded-full border border-yellow-500/35 bg-yellow-500/10 text-yellow-300 hover:bg-yellow-500 hover:text-black transition"
          >
            Back Home
          </Link>
        </div>

        <p className="mt-5 text-xs text-gray-500 break-words">
          {error?.message}
        </p>
      </div>
    </main>
  );
}