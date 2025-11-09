import { Phone, MapPin, Instagram } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Visit Us</h2>
            <p className="text-gray-700">Sushi Zan — Sulaymaniyah, Iraq. We’re located near the city center with easy access and parking. Call to reserve your table.</p>

            <div className="space-y-4">
              <a href="tel:+9647700000000" className="flex items-center gap-3 p-3 rounded-lg border border-black/10 hover:bg-emerald-50">
                <Phone className="text-emerald-700" size={20} />
                <span className="font-medium">+964 770 000 0000</span>
              </a>
              <a href="https://maps.app.goo.gl/" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-lg border border-black/10 hover:bg-emerald-50">
                <MapPin className="text-emerald-700" size={20} />
                <span className="font-medium">City Center, Sulaymaniyah</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-lg border border-black/10 hover:bg-emerald-50">
                <Instagram className="text-emerald-700" size={20} />
                <span className="font-medium">@sushizan.suli</span>
              </a>
            </div>

            <div className="text-sm text-gray-500">Open daily 12:00 – 23:00</div>
          </div>

          <form className="space-y-4 bg-emerald-50/60 p-6 rounded-xl border border-emerald-100">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input className="w-full mt-1 px-3 py-2 rounded-md border border-black/10 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input className="w-full mt-1 px-3 py-2 rounded-md border border-black/10 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white" placeholder="Your phone" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea rows={4} className="w-full mt-1 px-3 py-2 rounded-md border border-black/10 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white" placeholder="Reservation details or questions" />
            </div>
            <button type="button" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors w-full sm:w-auto">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
