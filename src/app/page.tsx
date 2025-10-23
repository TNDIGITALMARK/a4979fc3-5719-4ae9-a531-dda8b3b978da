import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px]">
        <Image
          src="/generated/hero-coffee-croissant.png"
          alt="BITES Café - Káva a croissant"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider">
              POJĎTE DÁLE,<br />CHUŤTE ŽIVOT.
            </h1>
            <Link
              href="/menu"
              className="inline-block mt-6 px-8 py-3 border-2 border-white text-white uppercase text-sm font-medium tracking-wider hover:bg-white hover:text-black transition-all rounded"
            >
              Prozkoumat menu
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 px-6 bg-[hsl(0,0%,98%)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Čerstvé pečivo"
              image="/generated/pastries-plate.png"
            />
            <FeatureCard
              title="Vybraná káva"
              image="/generated/barista-pouring.png"
            />
            <FeatureCard
              title="Útulná atmosféra"
              image="/generated/cafe-interior.png"
            />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 bg-[hsl(135,15%,50%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wider">
              PŘIPOJTE SE K NÁM
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/95 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 uppercase tracking-wide">
                Naše filosofie
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Věříme v poctivost, kvalitu a pohostinnost. Každý šálek kávy je pro nás příležitost
                vytvořit nezapomenutelný zážitek.
              </p>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-[hsl(25,35%,55%)] hover:opacity-70 transition-opacity"
              >
                Zobrazit nabídku
                <span>→</span>
              </Link>
            </div>
            <div className="bg-[hsl(25,35%,55%)] text-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 uppercase tracking-wide">
                Mobilní aplikace
              </h3>
              <p className="leading-relaxed mb-6">
                Objednávejte si s předstihem a vyhněte se čekání.
                Získávejte odměny za každou návštěvu.
              </p>
              <button className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider hover:opacity-80 transition-opacity">
                Již brzy
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}