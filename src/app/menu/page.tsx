import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MenuCard from '@/components/MenuCard';

export const dynamic = 'force-dynamic';

export default function MenuPage() {
  const breakfastItems = [
    {
      title: 'Avokádový toast s vejcem',
      description: 'Čerstvý chléb, avokádo, pochované vejce, cherry rajčata',
      price: '145 Kč',
      image: '/generated/avocado-toast.png',
    },
    {
      title: 'Granola s jogurtem a ovocem',
      description: 'Domácí granola, řecký jogurt, sezónní ovoce, med',
      price: '125 Kč',
      image: '/generated/granola-bowl.png',
    },
    {
      title: 'Čerstvé croissanty',
      description: 'Máslové croissanty z naší pekárny',
      price: '65 Kč',
      image: '/generated/pastries-plate.png',
    },
  ];

  const drinks = [
    {
      title: 'Cappuccino',
      description: 'Espresso, mléčná pěna, italský styl',
      price: '65 Kč',
      image: '/generated/hero-coffee-croissant.png',
    },
    {
      title: 'Matcha latte',
      description: 'Prémiová japonská matcha, mléko',
      price: '85 Kč',
      image: '/generated/matcha-latte.png',
    },
    {
      title: 'Latte Art',
      description: 'Espresso s krásně nalitým mlékem',
      price: '75 Kč',
      image: '/generated/barista-pouring.png',
    },
  ];

  const desserts = [
    {
      title: 'Cheesecake s lesním ovocem',
      description: 'Smetanový cheesecake, čerstvé lesní ovoce',
      price: '95 Kč',
      image: '/generated/cheesecake.png',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="bg-[hsl(0,0%,98%)] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wider">
            NAŠE MENU
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Objevte naši nabídku připravenou s láskou a péčí.
            Každý den čerstvé a kvalitní ingredience.
          </p>
        </div>
      </section>

      {/* Breakfast Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 tracking-wider text-center">
            SNÍDANĚ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {breakfastItems.map((item, index) => (
              <MenuCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Drinks Section */}
      <section className="py-16 px-6 bg-[hsl(0,0%,98%)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 tracking-wider text-center">
            NÁPOJE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {drinks.map((item, index) => (
              <MenuCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Desserts Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 tracking-wider text-center">
            DEZERTY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {desserts.map((item, index) => (
              <MenuCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
