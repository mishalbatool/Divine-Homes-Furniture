import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, MapPin, Instagram, Facebook, Compass, Star } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/furnitureData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#173D32] text-[#F8F4EA] pt-16 pb-10 border-t border-[#C5A15B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top CTA Row in Darker Forest Green with Antique Gold Border */}
        <div className="bg-[#123027] rounded-2xl p-8 sm:p-10 mb-14 border border-[#C5A15B]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#C5A15B]">
              Classic Chinioti Craftsmanship
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F8F4EA]">
              Have a Specific Furniture Vision in Mind?
            </h3>
            <p className="text-sm text-[#F8F4EA]/80 max-w-xl">
              Connect with our master artisans directly on WhatsApp. We provide custom measurements, wood choices, finish samples, and delivery across Pakistan.
            </p>
          </div>
          <a
            href={getWhatsAppUrl('Assalam-o-Alaikum Divine Homes Furniture, I would like to consult on a custom furniture project.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#C5A15B] hover:bg-[#B59048] text-[#173D32] font-semibold px-6 py-3.5 rounded-lg text-sm uppercase tracking-wider transition-all duration-200 shadow-md whitespace-nowrap shrink-0 border border-[#C5A15B]"
          >
            <MessageCircle className="w-5 h-5 text-[#173D32]" />
            <span>Discuss on WhatsApp</span>
          </a>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#C5A15B]/20">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div>
              <span className="font-serif text-2xl font-bold tracking-wider text-[#F8F4EA] block">
                DIVINE HOMES
              </span>
              <span className="text-[10px] font-sans font-semibold tracking-[0.25em] text-[#C5A15B] uppercase">
                FURNITURE • CHINIOT
              </span>
            </div>
            <p className="text-sm text-[#F8F4EA]/80 leading-relaxed">
              Divine Homes Furniture is a proud symbol of classic Chinioti craftsmanship and excellence in furniture design, creating timeless pieces for modern and traditional homes.
            </p>
            {/* Google Reviews Trust Marker with Antique Gold stars */}
            <div className="pt-2 flex items-center gap-2 text-xs text-[#F8F4EA]/90">
              <div className="flex text-[#C5A15B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C5A15B]" />
                ))}
              </div>
              <span className="font-medium text-[#F8F4EA]">{BUSINESS_INFO.reviewsCount}</span>
            </div>
          </div>

          {/* Column 2: Collections Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-semibold text-[#F8F4EA] tracking-wide border-b border-[#C5A15B]/30 pb-2">
              Chinioti Collections
            </h4>
            <ul className="space-y-2 text-sm text-[#F8F4EA]/80">
              <li>
                <Link to="/collections/bedroom-sets" className="hover:text-[#C5A15B] transition-colors block py-0.5">
                  Luxury Bedroom Sets
                </Link>
              </li>
              <li>
                <Link to="/collections/royal-beds" className="hover:text-[#C5A15B] transition-colors block py-0.5">
                  Royal Beds & Headboards
                </Link>
              </li>
              <li>
                <Link to="/collections/royal-sofas" className="hover:text-[#C5A15B] transition-colors block py-0.5">
                  Royal Sofa Sets
                </Link>
              </li>
              <li>
                <Link to="/collections/traditional-deewan" className="hover:text-[#C5A15B] transition-colors block py-0.5">
                  Traditional Deewan
                </Link>
              </li>
              <li>
                <Link to="/collections/dining-furniture" className="hover:text-[#C5A15B] transition-colors block py-0.5">
                  Dining Tables & Chairs
                </Link>
              </li>
              <li>
                <Link to="/collections/console-tables" className="hover:text-[#C5A15B] transition-colors block py-0.5">
                  Console Tables & Mirrors
                </Link>
              </li>
              <li>
                <Link to="/collections/custom-furniture" className="hover:text-[#C5A15B] transition-colors block py-0.5">
                  Bespoke Custom Designs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation & Craftsmanship */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-semibold text-[#F8F4EA] tracking-wide border-b border-[#C5A15B]/30 pb-2">
              Explore & Heritage
            </h4>
            <ul className="space-y-2 text-sm text-[#F8F4EA]/80">
              <li>
                <Link to="/craftsmanship" className="hover:text-[#C5A15B] transition-colors block py-0.5">
                  The Art of Chinioti Woodwork
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#C5A15B] transition-colors block py-0.5">
                  About Divine Homes
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#C5A15B] transition-colors block py-0.5">
                  Furniture Gallery
                </Link>
              </li>
              <li>
                <Link to="/gallery/woodwork-details" className="hover:text-[#C5A15B] transition-colors block py-0.5">
                  Hand-Carved Detail Showcase
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C5A15B] transition-colors block py-0.5">
                  Contact & Factory Location
                </Link>
              </li>
            </ul>

            <div className="pt-3">
              <span className="text-xs uppercase font-medium tracking-wider text-[#C5A15B] block mb-1">
                Nationwide Delivery
              </span>
              <p className="text-xs text-[#F8F4EA]/70 leading-relaxed">
                Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Gujranwala, Peshawar, and across Pakistan.
              </p>
            </div>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-semibold text-[#F8F4EA] tracking-wide border-b border-[#C5A15B]/30 pb-2">
              Contact & Workshop
            </h4>
            <div className="space-y-2.5 text-sm text-[#F8F4EA]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A15B] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  {BUSINESS_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A15B] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="hover:text-[#C5A15B] transition-colors font-medium text-xs text-[#F8F4EA]"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#C5A15B] shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C5A15B] transition-colors text-xs text-[#F8F4EA]"
                >
                  WhatsApp: +92 304 8851120
                </a>
              </div>
            </div>

            <div className="pt-3">
              <span className="text-xs uppercase font-medium tracking-wider text-[#C5A15B] block mb-2">
                Follow Divine Homes
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={BUSINESS_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Divine Homes Instagram"
                  className="w-8 h-8 rounded-lg bg-[#123027] border border-[#C5A15B]/30 flex items-center justify-center text-[#F8F4EA] hover:text-[#173D32] hover:border-[#C5A15B] hover:bg-[#C5A15B] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={BUSINESS_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Divine Homes Facebook"
                  className="w-8 h-8 rounded-lg bg-[#123027] border border-[#C5A15B]/30 flex items-center justify-center text-[#F8F4EA] hover:text-[#173D32] hover:border-[#C5A15B] hover:bg-[#C5A15B] transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={BUSINESS_INFO.social.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Divine Homes Pinterest"
                  className="w-8 h-8 rounded-lg bg-[#123027] border border-[#C5A15B]/30 flex items-center justify-center text-[#F8F4EA] hover:text-[#173D32] hover:border-[#C5A15B] hover:bg-[#C5A15B] transition-colors"
                >
                  <Compass className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8F4EA]/70">
          <p>© {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[#C5A15B]">Classic Chinioti Craftsmanship</span>
            <span>·</span>
            <span>Direct Manufacturer</span>
            <span>·</span>
            <span>Nationwide Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
