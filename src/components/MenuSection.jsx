const menu = [
  {
    category: 'Signature Rolls',
    items: [
      { name: 'Zan Special Roll', desc: 'Shrimp tempura, avocado, spicy mayo, topped with salmon and tobiko', price: 14 },
      { name: 'Sulaymaniyah Sunrise', desc: 'Crab, cucumber, mango, topped with tuna and sweet chili glaze', price: 13 },
      { name: 'Dragon Roll', desc: 'Eel, cucumber, topped with avocado and eel sauce', price: 15 },
    ],
  },
  {
    category: 'Nigiri & Sashimi',
    items: [
      { name: 'Salmon', desc: 'Fresh Norwegian salmon', price: 5 },
      { name: 'Tuna', desc: 'Lean tuna cuts', price: 6 },
      { name: 'Eel', desc: 'Glazed unagi', price: 6 },
    ],
  },
  {
    category: 'Hot Dishes',
    items: [
      { name: 'Chicken Katsu', desc: 'Crispy breaded chicken with katsu sauce', price: 12 },
      { name: 'Yakisoba', desc: 'Stir-fried noodles with vegetables', price: 10 },
    ],
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Our Menu</h2>
          <p className="mt-2 text-gray-600">Crafted with premium ingredients and served with care.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {menu.map((section) => (
            <div key={section.category} className="">
              <h3 className="text-xl font-semibold text-emerald-700 mb-4">{section.category}</h3>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item.name} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                    <span className="text-emerald-700 font-semibold whitespace-nowrap">${item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
