import { useState } from 'react';
import { Menu as MenuIcon, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#menu', label: 'Menu' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight text-xl">
            <span className="inline-block w-8 h-8 rounded-full bg-emerald-600 text-white grid place-items-center">🍣</span>
            <span>Sushi Zan</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-emerald-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+9647700000000"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-emerald-700 transition-colors"
            >
              <Phone size={16} /> Book a Table
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-emerald-50"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-gray-700 hover:text-emerald-700"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+9647700000000"
              className="inline-flex items-center gap-2 text-sm text-white bg-emerald-600 px-3 py-2 rounded-md"
            >
              <Phone size={16} /> Book a Table
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
