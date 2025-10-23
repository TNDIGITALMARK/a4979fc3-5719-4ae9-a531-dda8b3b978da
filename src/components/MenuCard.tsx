import Image from 'next/image';

interface MenuCardProps {
  title: string;
  description?: string;
  price: string;
  image: string;
}

export default function MenuCard({ title, description, price, image }: MenuCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-square">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 uppercase tracking-wide">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-gray-600 mb-3 leading-relaxed">
            {description}
          </p>
        )}
        <p className="text-lg font-bold text-[hsl(25,35%,55%)]">
          {price}
        </p>
      </div>
    </div>
  );
}
