const items = [
  {
    name: 'Zan Special Roll',
    desc: 'Salmon, tuna, avocado, tobiko, chef’s secret sauce',
    price: '12,000 IQD',
    img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Dragon Roll',
    desc: 'Tempura shrimp, cucumber, avocado, eel sauce',
    price: '10,000 IQD',
    img: 'https://images.unsplash.com/photo-1562158070-4c01d3d632d3?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Sashimi Set',
    desc: 'Assorted premium sashimi selection',
    price: '18,000 IQD',
    img: 'https://images.unsplash.com/photo-1617195737497-8a250b98f800?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Miso Soup',
    desc: 'Classic miso with tofu and seaweed',
    price: '3,000 IQD',
    img: 'https://images.unsplash.com/photo-1625944524431-b3e6fa2a3435?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Menu() {
  return (
    <section id="menu" className="relative py-16">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.08),rgba(255,255,255,0)_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Signature Menu</h2>
          <span className="text-sm text-gray-500">Prices include tax</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.name} className="group rounded-xl overflow-hidden bg-white shadow ring-1 ring-black/5">
              <div className="aspect-square overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-emerald-700 font-semibold text-sm">{item.price}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
