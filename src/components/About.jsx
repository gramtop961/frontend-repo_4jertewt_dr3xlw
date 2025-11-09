export default function About() {
  return (
    <section id="about" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Crafted with Tradition</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            At Sushi Zan, we celebrate the art of Japanese cuisine using carefully sourced fish and
            local produce from Sulaymaniyah. Every roll is prepared to order by our skilled chefs,
            blending classic techniques with modern flavors.
          </p>
          <p className="mt-3 text-gray-700">
            Join us for a relaxed dining experience, perfect for family gatherings, date nights, and
            celebrations.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1547483238-2cbf43f9b1f0?q=80&w=1974&auto=format&fit=crop"
            alt="Chef preparing sushi"
            className="rounded-lg shadow-md object-cover h-48 w-full"
          />
          <img
            src="https://images.unsplash.com/photo-1607301405390-2aa2c0c52953?q=80&w=1887&auto=format&fit=crop"
            alt="Assorted sushi on a board"
            className="rounded-lg shadow-md object-cover h-48 w-full"
          />
          <img
            src="https://images.unsplash.com/photo-1604335399105-a0d7d2ad6305?q=80&w=2070&auto=format&fit=crop"
            alt="Miso soup and sides"
            className="rounded-lg shadow-md object-cover h-48 w-full col-span-2"
          />
        </div>
      </div>
    </section>
  );
}
