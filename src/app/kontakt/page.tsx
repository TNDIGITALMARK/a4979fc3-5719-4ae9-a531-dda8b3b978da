import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="bg-[hsl(0,0%,98%)] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wider">
            KONTAKT
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Najdete nás v srdci Prahy. Těšíme se na vaši návštěvu!
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[hsl(135,15%,50%)] text-white rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 uppercase tracking-wide">
                    Adresa
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Vinohrady<br />
                    Korunní 1234<br />
                    Praha 2, 120 00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[hsl(135,15%,50%)] text-white rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 uppercase tracking-wide">
                    Telefon
                  </h3>
                  <p className="text-gray-700">
                    <a href="tel:+420777888999" className="hover:text-[hsl(25,35%,55%)] transition-colors">
                      +420 777 888 999
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[hsl(135,15%,50%)] text-white rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 uppercase tracking-wide">
                    Email
                  </h3>
                  <p className="text-gray-700">
                    <a href="mailto:info@bitescafe.cz" className="hover:text-[hsl(25,35%,55%)] transition-colors">
                      info@bitescafe.cz
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[hsl(135,15%,50%)] text-white rounded-lg">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 uppercase tracking-wide">
                    Otevírací doba
                  </h3>
                  <div className="text-gray-700 space-y-1">
                    <p>Pondělí - Pátek: 7:00 - 18:00</p>
                    <p>Sobota - Neděle: 8:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 uppercase tracking-wide">
                Napište nám
              </h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Jméno
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[hsl(135,15%,50%)]"
                    placeholder="Vaše jméno"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[hsl(135,15%,50%)]"
                    placeholder="vas@email.cz"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Zpráva
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[hsl(135,15%,50%)]"
                    placeholder="Vaše zpráva..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[hsl(135,15%,50%)] text-white uppercase text-sm font-medium tracking-wider hover:opacity-90 transition-opacity rounded"
                >
                  Odeslat zprávu
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 px-6 bg-[hsl(0,0%,98%)]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-600 text-lg">
              Mapa lokace (zde může být integrována Google Maps)
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
