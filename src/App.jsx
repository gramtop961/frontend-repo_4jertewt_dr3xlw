import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-black/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Sushi Zan — Sulaymaniyah, Iraq</p>
          <div className="text-sm text-gray-600">Crafted with fresh ingredients and care.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
