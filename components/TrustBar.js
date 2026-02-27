export default function TrustBar() {
  const items = [
    { title: "Licensed", desc: "Government-registered tours" },
    { title: "24/7 WhatsApp", desc: "Instant VIP support" },
    { title: "No Hidden Fees", desc: "Transparent packages" },
    { title: "Top Rated", desc: "Luxury traveler reviews" },
  ];

  return (
    <section className="w-full border-y border-white/10 bg-black/25 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid gap-4 md:grid-cols-4">
          {items.map((x) => (
            <div
              key={x.title}
              className="group rounded-3xl border border-white/10 bg-white/5 px-5 py-4 shadow-[0_16px_60px_rgba(0,0,0,0.35)] transition hover:bg-white/7"
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold tracking-wide text-white">
                  {x.title}
                </div>
                <div className="h-2 w-2 rounded-full bg-yellow-400/70 shadow-[0_0_18px_rgba(255,200,0,0.28)]" />
              </div>
              <div className="mt-2 text-xs leading-relaxed text-white/70">
                {x.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
