import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[hsl(0,0%,20%)] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.jfif"
                  alt="BITES Café Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider">
                BITES CAFÉ
              </h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Pražská kavárna s duší.<br />
              Kde chuť střetává kvalitu.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Kariéra
            </h4>
            <p className="text-sm text-gray-300">
              Chcete být součástí týmu?<br />
              Napište nám!
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Sociální sítě
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} BITES Café. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
}
