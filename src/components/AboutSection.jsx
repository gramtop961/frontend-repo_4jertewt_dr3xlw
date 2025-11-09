export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-emerald-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1 space-y-4">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-gray-700">
            Born in Sulaymaniyah, Sushi Zan blends Japanese craftsmanship with local warmth. Our chefs source the freshest fish and regional produce, preparing each piece with precision. Whether you’re new to sushi or a longtime fan, we aim to make every visit memorable.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm">
            <li className="bg-white p-3 rounded-lg border border-black/10">Fresh, quality ingredients</li>
            <li className="bg-white p-3 rounded-lg border border-black/10">Modern Japanese flavors</li>
            <li className="bg-white p-3 rounded-lg border border-black/10">Cozy, minimalist space</li>
            <li className="bg-white p-3 rounded-lg border border-black/10">Takeaway & delivery</li>
          </ul>
        </div>
        <div className="order-1 lg:order-2">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-black/10 shadow-lg">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1601042879364-f3947d3f9c36?q=80&w=1935&auto=format&fit=crop"
              alt="Inside Sushi Zan restaurant"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
