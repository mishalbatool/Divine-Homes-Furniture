import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  MapPin,
  Truck,
  ShieldCheck,
  Sparkles,
  Instagram,
  Facebook,
  Compass
} from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/furnitureData';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F4EA] text-[#262824] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A15B] mb-8">
          <Link to="/" className="hover:text-[#173D32] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#262824]">About Us</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#C5A15B] block">
            About Divine Homes Furniture Chiniot
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#262824] leading-tight">
            Crafting Beautiful Spaces, One Piece at a Time
          </h1>
          <p className="text-base sm:text-lg text-[#262824]/80 leading-relaxed">
            A proud symbol of classic Chinioti craftsmanship, dedicated to creating timeless wooden furniture for modern and traditional homes.
          </p>
        </div>

        {/* Exact Business Provided Story & Image Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-2xl border border-[#C5A15B]/30 shadow-xl space-y-6">
              <span className="text-xs uppercase font-bold tracking-widest text-[#C5A15B] block">
                Our Mission & Story
              </span>

              {/* Exact Business Provided Description */}
              <blockquote className="font-serif text-lg sm:text-xl text-[#262824] leading-relaxed italic border-l-2 border-[#173D32] pl-5">
                “Divine Homes Furniture is a proud symbol of classic Chinioti craftsmanship and excellence in furniture design, creating timeless pieces for modern and traditional homes. We specialize in wooden bedroom sets, royal sofa sets, dining tables, and customized furniture solutions. Our goal is to bring elegant furniture designs and quality-focused craftsmanship into homes across Pakistan and beyond.”
              </blockquote>

              <p className="text-sm text-[#262824]/75 leading-relaxed">
                Operating directly from Chiniot, Punjab — the historic epicenter of Pakistani woodworking — Divine Homes bridges ancestral hand-carving techniques with contemporary residential functionality. We believe true luxury lies in authentic solid wood, seasoned patient craftsmanship, and personal customization.
              </p>

              {/* Trust markers */}
              <div className="pt-4 border-t border-[#E8DFD0] flex items-center justify-between text-xs text-[#262824]">
                <div>
                  <span className="font-semibold block text-sm text-[#173D32]">Direct Manufacturer</span>
                  <span className="text-[#262824]/70 text-[11px] font-medium">Chiniot, Punjab</span>
                </div>
                <div>
                  <span className="font-semibold block text-sm text-[#173D32]">100% Solid Timber</span>
                  <span className="text-[#262824]/70 text-[11px] font-medium">Seasoned Sheesham</span>
                </div>
                <div>
                  <span className="font-semibold block text-sm text-[#173D32]">{BUSINESS_INFO.reviewsCount}</span>
                  <span className="text-[#262824]/70 text-[11px] font-medium">Verified Feedback</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#C5A15B]/30 bg-[#E8DFD0]">
              <ImageWithFallback
                src="/images/bespoke_workshop.jpg"
                alt="Divine Homes Workshop Chiniot"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-[#C5A15B]/30 bg-[#E8DFD0]">
                <ImageWithFallback
                  src="/images/craftsmanship_carving.jpg"
                  alt="Carving Artistry Chiniot"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-[#C5A15B]/30 bg-[#E8DFD0]">
                <ImageWithFallback
                  src="/images/royal_bed_headboard.jpg"
                  alt="Finished Carved Headboard"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Brand Pillars */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase font-semibold tracking-widest text-[#C5A15B]">
              Our Guiding Values
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#262824]">
              What Defines Divine Homes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#C5A15B]/30 space-y-3 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-[#E8DFD0] border border-[#C5A15B]/40 flex items-center justify-center text-[#173D32]">
                <Sparkles className="w-5 h-5 text-[#173D32]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#262824]">
                Authentic Chinioti Heritage
              </h3>
              <p className="text-xs sm:text-sm text-[#262824]/75 leading-relaxed">
                We preserve the legacy of Chiniot’s master woodcarvers. Every intricate motif is carved by hand using classical techniques passed down through generations.
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#C5A15B]/30 space-y-3 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-[#E8DFD0] border border-[#C5A15B]/40 flex items-center justify-center text-[#173D32]">
                <ShieldCheck className="w-5 h-5 text-[#173D32]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#262824]">
                Manufacturer-Direct Transparency
              </h3>
              <p className="text-xs sm:text-sm text-[#262824]/75 leading-relaxed">
                As a direct manufacturer, you communicate with our business directly. No retail markups, full visibility into wood selection, and custom updates on WhatsApp.
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#C5A15B]/30 space-y-3 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-[#E8DFD0] border border-[#C5A15B]/40 flex items-center justify-center text-[#173D32]">
                <Truck className="w-5 h-5 text-[#173D32]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#262824]">
                Nationwide Delivery Services
              </h3>
              <p className="text-xs sm:text-sm text-[#262824]/75 leading-relaxed">
                We arrange secure, multi-layer bubble and wooden crate shipping across all major cities and towns of Pakistan, ensuring pristine delivery at your home.
              </p>
            </div>
          </div>
        </div>

        {/* Nationwide Reach Detailed Section in Soft Beige */}
        <div className="bg-[#E8DFD0] text-[#262824] rounded-2xl p-8 sm:p-12 border border-[#C5A15B]/30 mb-20 shadow-xl">
          <div className="max-w-3xl space-y-4 mb-8">
            <span className="text-xs uppercase font-semibold tracking-widest text-[#C5A15B]">
              Delivery Across Pakistan
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#262824]">
              Bringing Chiniot Craftsmanship to Your Doorstep
            </h2>
            <p className="text-xs sm:text-sm text-[#262824]/80 leading-relaxed">
              Based in Chiniot, Punjab, Divine Homes regularly delivers luxury bedroom sets, royal sofas, and dining suites across Pakistan. Delivery coverage includes:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
            {BUSINESS_INFO.deliveryCities.map((city) => (
              <div
                key={city}
                className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#C5A15B]/30 flex items-center gap-2 text-xs text-[#262824]"
              >
                <MapPin className="w-3.5 h-3.5 text-[#173D32] shrink-0" />
                <span className="font-medium text-[#262824]">{city}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#C5A15B]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#262824]/75 text-center sm:text-left">
              Contact our team to discuss delivery schedules and packaging details for your city.
            </p>
            <a
              href={getWhatsAppUrl('Assalam-o-Alaikum Divine Homes, I would like to inquire about delivery options to my city.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#173D32] hover:bg-[#123027] text-[#F8F4EA] font-semibold px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-colors shadow-md whitespace-nowrap border border-[#C5A15B]/40"
            >
              <MessageCircle className="w-4 h-4 text-[#C5A15B]" />
              <span>Inquire Delivery Schedule</span>
            </a>
          </div>
        </div>

        {/* Connect & Social Media */}
        <div className="bg-[#FFFFFF] rounded-2xl p-8 sm:p-10 border border-[#C5A15B]/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-[#C5A15B]">
              Connect With Divine Homes
            </span>
            <h3 className="font-serif text-2xl text-[#262824]">
              Follow Our Latest Collections Online
            </h3>
            <p className="text-xs sm:text-sm text-[#262824]/75 max-w-lg">
              Explore new workshop releases, video tours of carved headboards, and client setups on our official social channels.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={BUSINESS_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E8DFD0] hover:bg-[#173D32] text-[#262824] hover:text-[#F8F4EA] border border-[#C5A15B]/40 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
            >
              <Instagram className="w-4 h-4 text-[#173D32]" />
              <span>Instagram</span>
            </a>
            <a
              href={BUSINESS_INFO.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E8DFD0] hover:bg-[#173D32] text-[#262824] hover:text-[#F8F4EA] border border-[#C5A15B]/40 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
            >
              <Facebook className="w-4 h-4 text-[#173D32]" />
              <span>Facebook</span>
            </a>
            <a
              href={BUSINESS_INFO.social.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E8DFD0] hover:bg-[#173D32] text-[#262824] hover:text-[#F8F4EA] border border-[#C5A15B]/40 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
            >
              <Compass className="w-4 h-4 text-[#173D32]" />
              <span>Pinterest</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
