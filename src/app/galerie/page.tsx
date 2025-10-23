import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const dynamic = 'force-dynamic';

export default function GalleryPage() {
  const galleryImages = [
    {
      src: '/generated/hero-coffee-croissant.png',
      alt: 'Káva a croissant',
    },
    {
      src: '/generated/pastries-plate.png',
      alt: 'Čerstvé pečivo',
    },
    {
      src: '/generated/barista-pouring.png',
      alt: 'Příprava kávy',
    },
    {
      src: '/generated/cafe-interior.png',
      alt: 'Interiér kavárny',
    },
    {
      src: '/generated/avocado-toast.png',
      alt: 'Avokádový toast',
    },
    {
      src: '/generated/granola-bowl.png',
      alt: 'Granola miska',
    },
    {
      src: '/generated/matcha-latte.png',
      alt: 'Matcha latte',
    },
    {
      src: '/generated/cheesecake.png',
      alt: 'Cheesecake',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="bg-[hsl(0,0%,98%)] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wider">
            GALERIE
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Prohlédněte si naši kavárnu a nabídku očima našich hostů.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-[hsl(135,15%,50%)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wider">
            NAVŠTIVTE NÁS
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            Přijďte ochutnat naši kávu a zažít útulnou atmosféru naší kavárny.
            Těšíme se na vás!
          </p>
          <a
            href="/kontakt"
            className="inline-block px-8 py-3 bg-white text-[hsl(135,15%,50%)] uppercase text-sm font-medium tracking-wider hover:bg-gray-100 transition-all rounded"
          >
            Najít nás
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
