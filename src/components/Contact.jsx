import { Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Visit Us</h2>
          <p className="mt-2 text-gray-600">We’re located in Sulaymaniyah with easy access and parking.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border bg-white shadow-sm">
            <div className="flex items-start gap-3">
              <MapPin className="text-emerald-600" />
              <div>
                <p className="font-semibold text-gray-900">Address</p>
                <p className="text-gray-700">Sulaymaniyah, Iraq</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg border bg-white shadow-sm">
            <div className="flex items-start gap-3">
              <Phone className="text-emerald-600" />
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <a href="tel:+9647700000000" className="text-emerald-700 font-medium">+964 770 000 0000</a>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg border bg-white shadow-sm">
            <div className="flex items-start gap-3">
              <Clock className="text-emerald-600" />
              <div>
                <p className="font-semibold text-gray-900">Hours</p>
                <p className="text-gray-700">Daily: 12:00 PM – 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <iframe
            title="Sushi Zan Location"
            src="https://www.google.com/maps?q=Sulaymaniyah%20Iraq&output=embed"
            className="w-full h-72 rounded-lg border"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
