import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      <div className="pt-40 text-center px-6">
        <h1 className="text-4xl font-bold">Page not found</h1>
        <p className="mt-4 text-gray-400">Let’s get you back to safety.</p>
        <Link
          href="/tours"
          className="inline-block mt-8 px-8 py-3 rounded-full border border-yellow-500/35 bg-yellow-500/10 text-yellow-300 hover:bg-yellow-500 hover:text-black transition"
        >
          Back to Tours
        </Link>
      </div>
    </main>
  );
}