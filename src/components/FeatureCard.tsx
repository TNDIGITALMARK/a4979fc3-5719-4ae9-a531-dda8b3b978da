import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  image: string;
}

export default function FeatureCard({ title, image }: FeatureCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square rounded-lg overflow-hidden mb-4 shadow-sm">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h3 className="text-center text-sm font-medium uppercase tracking-wider">
        {title}
      </h3>
    </div>
  );
}
