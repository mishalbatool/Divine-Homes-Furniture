import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/furnitureData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const collectionsDropdownRef = useRef<HTMLDivElement>(null);
  const galleryDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCollectionsOpen(false);
    setGalleryOpen(false);
  }, [location.pathname]);

  // Click outside listener for dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        collectionsDropdownRef.current &&
        !collectionsDropdownRef.current.contains(event.target as Node)
      ) {
        setCollectionsOpen(false);
      }
      if (
        galleryDropdownRef.current &&
        !galleryDropdownRef.current.contains(event.target as Node)
      ) {
        setGalleryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const collectionsLinks = [
    { name: 'Bedroom Sets', path: '/collections/bedroom-sets', desc: 'Regal master bedroom suites' },
    { name: 'Royal Sofas', path: '/collections/royal-sofas', desc: 'Intricately carved drawing sets' },
    { name: 'Dining Furniture', path: '/collections/dining-furniture', desc: 'Handcrafted luxury dining suites' },
    { name: 'Custom Furniture', path: '/collections/custom-furniture', desc: 'Bespoke tailored woodwork' },
    { name: 'All Collections (8 Categories)', path: '/collections', desc: 'View full Chinioti catalog' },
  ];

  const galleryLinks = [
    { name: 'Beds & Bedroom', path: '/gallery/beds-bedroom', desc: 'Grand beds & headboards' },
    { name: 'Sofas & Living Room', path: '/gallery/sofas-living', desc: 'Royal majlis & deewans' },
    { name: 'Dining & Consoles', path: '/gallery/dining-consoles', desc: 'Dining tables & entryway consoles' },
    { name: 'Woodwork Details', path: '/gallery/woodwork-details', desc: 'Close-up hand carving artistry' },
    { name: 'Full Gallery Showcase', path: '/gallery', desc: 'Explore all showcase pieces' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? 'bg-[#173D32]/95 backdrop-blur-md shadow-lg border-b border-[#C5A15B]/25 py-3'
          : 'bg-[#173D32] border-b border-[#C5A15B]/20 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo / Brand Zone */}
          <Link
            to="/"
            className="flex flex-col items-start group focus:outline-none"
            aria-label="Divine Homes Furniture Chiniot Home"
          >
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wider text-[#F8F4EA] group-hover:text-[#C5A15B] transition-colors leading-none">
              DIVINE HOMES
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.26em] text-[#C5A15B] uppercase mt-1 leading-none">
              FURNITURE • CHINIOT
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-[#C5A15B] relative py-1 ${
                location.pathname === '/' ? 'text-[#F8F4EA] font-semibold' : 'text-[#F8F4EA]/80'
              }`}
            >
              Home
              {location.pathname === '/' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A15B]" />
              )}
            </Link>

            {/* Collections Dropdown */}
            <div
              ref={collectionsDropdownRef}
              className="relative"
              onMouseEnter={() => setCollectionsOpen(true)}
              onMouseLeave={() => setCollectionsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setCollectionsOpen((prev) => !prev)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#C5A15B] py-1 cursor-pointer ${
                  location.pathname.startsWith('/collections')
                    ? 'text-[#F8F4EA] font-semibold'
                    : 'text-[#F8F4EA]/80'
                }`}
                aria-expanded={collectionsOpen}
                aria-haspopup="true"
              >
                <span>Collections</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#C5A15B] transition-transform duration-200 ${
                    collectionsOpen ? 'rotate-180' : ''
                  }`}
                />
                {location.pathname.startsWith('/collections') && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A15B]" />
                )}
              </button>

              {/* Dropdown Menu in Deep Forest Green with Antique Gold Borders */}
              {collectionsOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 rounded-xl bg-[#173D32] border border-[#C5A15B]/30 shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="px-4 py-1.5 border-b border-[#C5A15B]/20 mb-1">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A15B]">
                      Chinioti Collections
                    </span>
                  </div>
                  {collectionsLinks.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setCollectionsOpen(false)}
                      className={`block px-4 py-2 hover:bg-[#123027] transition-colors ${
                        location.pathname === item.path ? 'bg-[#123027] text-[#C5A15B] font-semibold' : 'text-[#F8F4EA]'
                      }`}
                    >
                      <div className="text-sm font-medium">{item.name}</div>
                      <div className="text-xs text-[#F8F4EA]/70">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/craftsmanship"
              className={`text-sm font-medium transition-colors hover:text-[#C5A15B] relative py-1 ${
                location.pathname === '/craftsmanship' ? 'text-[#F8F4EA] font-semibold' : 'text-[#F8F4EA]/80'
              }`}
            >
              Our Craftsmanship
              {location.pathname === '/craftsmanship' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A15B]" />
              )}
            </Link>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-[#C5A15B] relative py-1 ${
                location.pathname === '/about' ? 'text-[#F8F4EA] font-semibold' : 'text-[#F8F4EA]/80'
              }`}
            >
              About Us
              {location.pathname === '/about' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A15B]" />
              )}
            </Link>

            {/* Gallery Dropdown */}
            <div
              ref={galleryDropdownRef}
              className="relative"
              onMouseEnter={() => setGalleryOpen(true)}
              onMouseLeave={() => setGalleryOpen(false)}
            >
              <button
                type="button"
                onClick={() => setGalleryOpen((prev) => !prev)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#C5A15B] py-1 cursor-pointer ${
                  location.pathname.startsWith('/gallery')
                    ? 'text-[#F8F4EA] font-semibold'
                    : 'text-[#F8F4EA]/80'
                }`}
                aria-expanded={galleryOpen}
                aria-haspopup="true"
              >
                <span>Gallery</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#C5A15B] transition-transform duration-200 ${
                    galleryOpen ? 'rotate-180' : ''
                  }`}
                />
                {location.pathname.startsWith('/gallery') && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A15B]" />
                )}
              </button>

              {galleryOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 rounded-xl bg-[#173D32] border border-[#C5A15B]/30 shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="px-4 py-1.5 border-b border-[#C5A15B]/20 mb-1">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A15B]">
                      Showcase Categories
                    </span>
                  </div>
                  {galleryLinks.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setGalleryOpen(false)}
                      className={`block px-4 py-2 hover:bg-[#123027] transition-colors ${
                        location.pathname === item.path ? 'bg-[#123027] text-[#C5A15B] font-semibold' : 'text-[#F8F4EA]'
                      }`}
                    >
                      <div className="text-sm font-medium">{item.name}</div>
                      <div className="text-xs text-[#F8F4EA]/70">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-[#C5A15B] relative py-1 ${
                location.pathname === '/contact' ? 'text-[#F8F4EA] font-semibold' : 'text-[#F8F4EA]/80'
              }`}
            >
              Contact
              {location.pathname === '/contact' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A15B]" />
              )}
            </Link>
          </nav>

          {/* Primary Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppUrl('Assalam-o-Alaikum Divine Homes Furniture, I would like to discuss a custom order and explore your available Chinioti designs.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#123027] hover:bg-[#C5A15B] text-[#F8F4EA] hover:text-[#173D32] px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md border border-[#C5A15B]/50 hover:border-[#C5A15B] group"
            >
              <MessageCircle className="w-4 h-4 text-[#C5A15B] group-hover:text-[#173D32] transition-colors" />
              <span>Discuss Your Order</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Divine Homes"
              className="p-2 text-[#F8F4EA] bg-[#123027] border border-[#C5A15B]/40 rounded-lg"
            >
              <MessageCircle className="w-5 h-5 text-[#C5A15B]" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              className="p-2 text-[#F8F4EA] hover:text-[#C5A15B] rounded-lg focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#C5A15B]/20 bg-[#173D32] px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#F8F4EA] border-b border-[#123027]"
          >
            Home
          </Link>

          {/* Mobile Collections Submenu */}
          <div>
            <button
              type="button"
              onClick={() => setCollectionsOpen((prev) => !prev)}
              className="w-full flex items-center justify-between py-2 text-base font-medium text-[#F8F4EA] border-b border-[#123027]"
            >
              <span>Collections</span>
              <ChevronDown
                className={`w-4 h-4 text-[#C5A15B] transition-transform ${collectionsOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {collectionsOpen && (
              <div className="pl-4 py-2 space-y-2 bg-[#123027] rounded-lg my-1 border border-[#C5A15B]/20">
                {collectionsLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-sm text-[#F8F4EA]/90 hover:text-[#C5A15B]"
                  >
                    • {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/craftsmanship"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#F8F4EA] border-b border-[#123027]"
          >
            Our Craftsmanship
          </Link>

          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#F8F4EA] border-b border-[#123027]"
          >
            About Us
          </Link>

          {/* Mobile Gallery Submenu */}
          <div>
            <button
              type="button"
              onClick={() => setGalleryOpen((prev) => !prev)}
              className="w-full flex items-center justify-between py-2 text-base font-medium text-[#F8F4EA] border-b border-[#123027]"
            >
              <span>Gallery</span>
              <ChevronDown
                className={`w-4 h-4 text-[#C5A15B] transition-transform ${galleryOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {galleryOpen && (
              <div className="pl-4 py-2 space-y-2 bg-[#123027] rounded-lg my-1 border border-[#C5A15B]/20">
                {galleryLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-sm text-[#F8F4EA]/90 hover:text-[#C5A15B]"
                  >
                    • {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#F8F4EA] border-b border-[#123027]"
          >
            Contact
          </Link>

          <div className="pt-2">
            <a
              href={getWhatsAppUrl('Assalam-o-Alaikum Divine Homes Furniture, I would like to discuss an order.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#123027] hover:bg-[#C5A15B] text-[#F8F4EA] hover:text-[#173D32] py-3 rounded-lg text-sm font-semibold uppercase tracking-wider shadow-md border border-[#C5A15B]/50 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#C5A15B]" />
              <span>Discuss Your Order on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
