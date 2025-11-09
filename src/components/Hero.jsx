export default function Hero() {
  return (
    <section id="home" className="relative pt-24">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1604908554032-6e30cf714f3e?q=80&w=2064&auto=format&fit=crop"
          alt="Assorted sushi platter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-white/0 pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Sushi Zan
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90">
            Authentic Japanese flavors crafted fresh daily in the heart of Sulaymaniyah.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition-colors"
            >
              Explore Menu
            </a>
            <a
              href="tel:+9647700000000"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white/10 backdrop-blur text-white font-semibold ring-1 ring-white/30 hover:bg-white/20 transition-colors"
            >
              Call to Reserve
            </a>
          </div>
          <div className="mt-6 text-white/90 text-sm">
            <p><strong>Location:</strong> Sulaymaniyah, Iraq</p>
            <p className="mt-1"><strong>Hours:</strong> Daily 12:00 PM – 11:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
