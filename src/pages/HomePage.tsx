import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Truck,
  ChevronRight,
  Star,
  Layers,
  Palette,
  Hammer
} from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { LightboxModal, LightboxData } from '../components/LightboxModal';
import { CustomOrderModal } from '../components/CustomOrderModal';
import {
  COLLECTIONS_DATA,
  BUSINESS_INFO,
  getWhatsAppUrl,
  getProductWhatsAppUrl
} from '../data/furnitureData';

export const HomePage: React.FC = () => {
  const [activeLightboxItem, setActiveLightboxItem] = useState<LightboxData | null>(null);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F4EA] text-[#262824]">
      {/* 1. HERO SECTION: Deep Forest Green & Warm Ivory */}
      <section className="relative overflow-hidden bg-[#173D32] text-[#F8F4EA] border-b border-[#C5A15B]/30">
        {/* Subtle decorative mesh background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A15B_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            {/* Left Column: Headline & Copy */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A15B] border-b border-[#C5A15B]/40 pb-1">
                <span>The Art of Chinioti Craftsmanship</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-[#F8F4EA] leading-[1.12]">
                Furniture That Turns Your House Into a Home
              </h1>

              <p className="text-base sm:text-lg text-[#F8F4EA]/85 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Discover timeless Chinioti craftsmanship, beautifully handcrafted wooden furniture, and custom designs created to bring elegance and character to your living spaces.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
                <Link
                  to="/collections"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#F8F4EA] hover:bg-[#FFFFFF] text-[#173D32] font-semibold px-7 py-3.5 rounded-lg text-xs uppercase tracking-wider transition-all duration-200 shadow-lg border border-[#C5A15B] group whitespace-nowrap"
                >
                  <span>Explore Collections</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#173D32]" />
                </Link>

                <button
                  type="button"
                  onClick={() => setIsCustomModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#123027] hover:bg-[#0E261F] text-[#F8F4EA] border border-[#C5A15B]/40 px-6 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 whitespace-nowrap shadow-md cursor-pointer hover:border-[#C5A15B]"
                >
                  <Sparkles className="w-4 h-4 text-[#C5A15B]" />
                  <span>Customize Your Furniture</span>
                </button>
              </div>

              {/* Trust Subtext */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-[#F8F4EA]/70 border-t border-[#C5A15B]/20">
                <span>Direct Manufacturer in Chiniot</span>
                <span>•</span>
                <span>Seasoned Solid Wood</span>
                <span>•</span>
                <span>Nationwide Safe Delivery</span>
              </div>
            </div>

            {/* Right Column: Hero Showcase Image with Framed Container */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl p-2 sm:p-3 bg-[#123027] border border-[#C5A15B]/30 shadow-2xl">
                <div
                  className="cursor-pointer group relative overflow-hidden rounded-xl"
                  onClick={() =>
                    setActiveLightboxItem({
                      title: 'The Royal Chinioti Master Bed Suite',
                      categoryLabel: 'Signature Bedroom',
                      image: '/images/hero_bedroom.jpg',
                      description: 'Grand master bedroom ensemble carved in seasoned Sheesham rosewood with delicate floral cresting.',
                      craftDetails: 'Handcrafted relief carving by master artisans in Chiniot with deep rich luster and hand-rubbed finish.'
                    })
                  }
                >
                  <ImageWithFallback
                    src="/images/hero_bedroom.jpg"
                    alt="Divine Homes Chinioti Handcrafted Bedroom Suite"
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <span className="text-xs uppercase tracking-wider text-[#F8F4EA] font-medium flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" /> Click to inspect high-resolution woodwork
                    </span>
                  </div>
                </div>

                {/* Floating Heritage Badge */}
                <div className="absolute -bottom-4 -left-3 sm:-left-4 bg-[#173D32] text-[#F8F4EA] px-4 py-2.5 rounded-lg shadow-2xl border border-[#C5A15B]/50 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C5A15B]" />
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[#C5A15B]">Authentic Chiniot Heritage</p>
                    <p className="text-xs font-semibold text-[#F8F4EA]">Solid Wood • Hand Carved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COLLECTIONS SHOWCASE: Alternate Soft Beige Background */}
      <section id="collections" className="py-20 bg-[#E8DFD0] border-b border-[#C5A15B]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#C5A15B] block">
              Handcrafted Masterpieces
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#262824]">
              Furniture Collections
            </h2>
            <p className="text-sm sm:text-base text-[#262824]/80 leading-relaxed">
              Each piece is custom-built with seasoned timber and intricate Chinioti chiseling. Discuss bespoke sizing and finish options directly with our artisans.
            </p>
          </div>

          {/* 8 Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {COLLECTIONS_DATA.map((col) => (
              <div
                key={col.id}
                className="bg-[#F8F4EA] rounded-2xl overflow-hidden border border-[#C5A15B]/30 hover:border-[#173D32] transition-all duration-300 hover:shadow-xl flex flex-col group"
              >
                {/* Image Container with Lightbox Trigger */}
                <div
                  className="relative overflow-hidden cursor-pointer aspect-[4/3] bg-[#E8DFD0]"
                  onClick={() =>
                    setActiveLightboxItem({
                      title: col.title,
                      categoryLabel: col.itemsCount,
                      image: col.image,
                      description: col.description,
                      craftDetails: col.features.join(' • ')
                    })
                  }
                >
                  <ImageWithFallback
                    src={col.image}
                    alt={col.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-[#173D32]/90 backdrop-blur-sm text-[#F8F4EA] text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-md border border-[#C5A15B]/30">
                    {col.itemsCount}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#262824] group-hover:text-[#173D32] transition-colors">
                      {col.title}
                    </h3>
                    <p className="text-xs text-[#262824]/75 mt-2 line-clamp-3 leading-relaxed">
                      {col.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 pt-2 border-t border-[#E8DFD0]">
                    <Link
                      to={`/collections/${col.slug}`}
                      className="w-full inline-flex items-center justify-between text-xs font-semibold text-[#173D32] hover:text-[#123027] py-1.5 transition-colors group/link"
                    >
                      <span>Explore Collection</span>
                      <ChevronRight className="w-4 h-4 text-[#C5A15B] group-hover/link:translate-x-1 transition-transform" />
                    </Link>

                    <a
                      href={getProductWhatsAppUrl(col.title, 'Collection Showcase')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#173D32] hover:bg-[#123027] text-[#F8F4EA] border border-[#173D32] py-2.5 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md hover:border-[#C5A15B]/50"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#C5A15B]" />
                      <span>Discuss on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center mt-12">
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#173D32] hover:text-[#123027] border-b-2 border-[#173D32] pb-1 hover:border-[#C5A15B] transition-all"
            >
              <span>View Full Collections Catalog</span>
              <ArrowRight className="w-4 h-4 text-[#C5A15B]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE CRAFTSMANSHIP EDITORIAL: Deep Forest Green Background */}
      <section className="py-20 bg-[#173D32] text-[#F8F4EA] border-b border-[#C5A15B]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Asymmetrical Image Collage */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
              <div className="space-y-4">
                <div
                  className="rounded-2xl overflow-hidden shadow-2xl border border-[#C5A15B]/30 cursor-pointer group"
                  onClick={() =>
                    setActiveLightboxItem({
                      title: 'Master Chisel Relief Carving',
                      categoryLabel: 'Chinioti Craftsmanship',
                      image: '/images/craftsmanship_carving.jpg',
                      description: 'Close-up of master woodworkers carving deep relief florals into solid Sheesham timber.',
                      craftDetails: 'Handcrafted utilizing traditional gouges and seasoned wood in Chiniot.'
                    })
                  }
                >
                  <ImageWithFallback
                    src="/images/craftsmanship_carving.jpg"
                    alt="Hand carved wooden details Chiniot"
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div
                  className="rounded-2xl overflow-hidden shadow-2xl border border-[#C5A15B]/30 cursor-pointer group"
                  onClick={() =>
                    setActiveLightboxItem({
                      title: 'Intricate Carved Bed Headboard',
                      categoryLabel: 'Chinioti Woodwork',
                      image: '/images/royal_bed_headboard.jpg',
                      description: 'Deep relief floral carving with dark luster polish and button tufting.',
                      craftDetails: 'Intricately chiseled headboard crown reflecting royal Pakistani heritage.'
                    })
                  }
                >
                  <ImageWithFallback
                    src="/images/royal_bed_headboard.jpg"
                    alt="Royal Bed Headboard Carving"
                    className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div
                  className="rounded-2xl overflow-hidden shadow-2xl border border-[#C5A15B]/30 cursor-pointer group"
                  onClick={() =>
                    setActiveLightboxItem({
                      title: 'Handcrafted Deewan & Entryway Console',
                      categoryLabel: 'Traditional Living',
                      image: '/images/traditional_deewan.jpg',
                      description: 'Traditional Pakistani deewan daybed with perforated lattice wood and silk bolsters.',
                      craftDetails: 'Master joinery and hand-buffed dark walnut polish.'
                    })
                  }
                >
                  <ImageWithFallback
                    src="/images/traditional_deewan.jpg"
                    alt="Traditional Chinioti Deewan"
                    className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div
                  className="rounded-2xl overflow-hidden shadow-2xl border border-[#C5A15B]/30 cursor-pointer group"
                  onClick={() =>
                    setActiveLightboxItem({
                      title: 'Master Craftsman Workshop in Chiniot',
                      categoryLabel: 'Divine Homes Workshop',
                      image: '/images/bespoke_workshop.jpg',
                      description: 'Artisanal woodworking workshop in Chiniot, shaping custom furniture to precise client drawings.',
                      craftDetails: 'Traditional hand craftsmanship combined with architectural precision.'
                    })
                  }
                >
                  <ImageWithFallback
                    src="/images/bespoke_workshop.jpg"
                    alt="Chiniot Furniture Workshop"
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Right: Editorial Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#C5A15B] block">
                Artisanal Excellence
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#F8F4EA] leading-tight">
                Where Tradition Meets Timeless Design
              </h2>

              <p className="text-base text-[#F8F4EA]/85 leading-relaxed">
                Rooted in the artistry of Chiniot, our furniture celebrates intricate wooden detailing, elegant forms, and designs that complement both traditional and contemporary homes.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#123027] text-[#C5A15B] shrink-0 mt-1 border border-[#C5A15B]/30">
                    <Hammer className="w-4 h-4 text-[#C5A15B]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-[#F8F4EA]">
                      Seasoned Solid Timber
                    </h4>
                    <p className="text-xs text-[#F8F4EA]/75 leading-relaxed mt-0.5">
                      Selected dense Sheesham (Rosewood) and choice hardwoods, naturally conditioned to endure varying climatic conditions across Pakistan without warping.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#123027] text-[#C5A15B] shrink-0 mt-1 border border-[#C5A15B]/30">
                    <Palette className="w-4 h-4 text-[#C5A15B]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-[#F8F4EA]">
                      Authentic Chinioti Hand Carving
                    </h4>
                    <p className="text-xs text-[#F8F4EA]/75 leading-relaxed mt-0.5">
                      Every crest, floral arch, and delicate cabriole leg is chiseled by hand with steel gouges by artisans whose families have practiced the craft for generations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#123027] text-[#C5A15B] shrink-0 mt-1 border border-[#C5A15B]/30">
                    <Layers className="w-4 h-4 text-[#C5A15B]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-[#F8F4EA]">
                      Multi-Stage Luster Polish
                    </h4>
                    <p className="text-xs text-[#F8F4EA]/75 leading-relaxed mt-0.5">
                      Hand-rubbed natural oils, rich stains, and protective clear coats that highlight the deep tactile grain and preserve your furniture for decades.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/craftsmanship"
                  className="inline-flex items-center gap-2 bg-[#F8F4EA] hover:bg-[#FFFFFF] text-[#173D32] px-6 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg border border-[#C5A15B]"
                >
                  <span>Discover Our Craftsmanship</span>
                  <ArrowRight className="w-4 h-4 text-[#173D32]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE DIVINE HOMES FURNITURE? Warm Ivory & Soft Beige Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#C5A15B] block">
            Direct From The Craftsmen
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#262824]">
            Why Choose Divine Homes Furniture?
          </h2>
          <p className="text-sm sm:text-base text-[#262824]/80 leading-relaxed">
            We deliver handcrafted luxury directly from our manufacturing workshops in Chiniot to homes across Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-[#FFFFFF] p-7 rounded-2xl border border-[#C5A15B]/30 hover:border-[#173D32] transition-all duration-200 hover:shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#E8DFD0] border border-[#C5A15B]/40 flex items-center justify-center text-[#173D32]">
              <Sparkles className="w-6 h-6 text-[#173D32]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#262824]">
              Chinioti Craftsmanship
            </h3>
            <p className="text-xs text-[#262824]/75 leading-relaxed">
              Traditional artistry and intricate detailing hand-sculpted by Chiniot master woodcarvers with decades of ancestral lineage.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FFFFFF] p-7 rounded-2xl border border-[#C5A15B]/30 hover:border-[#173D32] transition-all duration-200 hover:shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#E8DFD0] border border-[#C5A15B]/40 flex items-center justify-center text-[#173D32]">
              <Palette className="w-6 h-6 text-[#173D32]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#262824]">
              Custom Furniture Solutions
            </h3>
            <p className="text-xs text-[#262824]/75 leading-relaxed">
              Designs tailored to customer preferences — including bespoke dimensions, choice of fabric, carving density, and polish shades.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FFFFFF] p-7 rounded-2xl border border-[#C5A15B]/30 hover:border-[#173D32] transition-all duration-200 hover:shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#E8DFD0] border border-[#C5A15B]/40 flex items-center justify-center text-[#173D32]">
              <ShieldCheck className="w-6 h-6 text-[#173D32]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#262824]">
              Direct Manufacturer
            </h3>
            <p className="text-xs text-[#262824]/75 leading-relaxed">
              Communicate with the furniture business directly in Chiniot without retail middleman markups, ensuring authentic quality.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#FFFFFF] p-7 rounded-2xl border border-[#C5A15B]/30 hover:border-[#173D32] transition-all duration-200 hover:shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#E8DFD0] border border-[#C5A15B]/40 flex items-center justify-center text-[#173D32]">
              <Truck className="w-6 h-6 text-[#173D32]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#262824]">
              Nationwide Reach
            </h3>
            <p className="text-xs text-[#262824]/75 leading-relaxed">
              Furniture delivery services across Pakistan, as stated by the business, with dedicated multi-layer protective packaging.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CUSTOM ORDER PROCESS: Soft Beige Panels & Antique Gold Numerals */}
      <section className="py-20 bg-[#E8DFD0] text-[#262824] border-y border-[#C5A15B]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#C5A15B] block">
              Seamless Tailoring Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#262824]">
              Our Custom Order Process
            </h2>
            <p className="text-sm sm:text-base text-[#262824]/80 leading-relaxed">
              From your initial design preference to delivery at your doorstep, we make custom furniture creation effortless and personal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 with Antique Gold Numerals */}
            <div className="bg-[#F8F4EA] p-8 rounded-2xl border border-[#C5A15B]/30 space-y-4 relative group hover:border-[#173D32] transition-colors shadow-lg">
              <div className="font-serif text-4xl text-[#C5A15B] font-bold">01</div>
              <h3 className="font-serif text-xl font-semibold text-[#262824]">
                Discover Your Style
              </h3>
              <p className="text-xs sm:text-sm text-[#262824]/75 leading-relaxed">
                Explore furniture collections and choose your preferred design, or share your own architectural references and room concepts.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#F8F4EA] p-8 rounded-2xl border border-[#C5A15B]/30 space-y-4 relative group hover:border-[#173D32] transition-colors shadow-lg">
              <div className="font-serif text-4xl text-[#C5A15B] font-bold">02</div>
              <h3 className="font-serif text-xl font-semibold text-[#262824]">
                Discuss Your Requirements
              </h3>
              <p className="text-xs sm:text-sm text-[#262824]/75 leading-relaxed">
                Contact the team through WhatsApp to discuss dimensions, design preferences, customization, materials, finishes, and budget.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#F8F4EA] p-8 rounded-2xl border border-[#C5A15B]/30 space-y-4 relative group hover:border-[#173D32] transition-colors shadow-lg">
              <div className="font-serif text-4xl text-[#C5A15B] font-bold">03</div>
              <h3 className="font-serif text-xl font-semibold text-[#262824]">
                Confirm Your Order
              </h3>
              <p className="text-xs sm:text-sm text-[#262824]/75 leading-relaxed">
                Discuss the final quotation, production details, and delivery arrangements directly with the business before production begins.
              </p>
            </div>
          </div>

          {/* CTA: Deep Forest Green */}
          <div className="text-center mt-12">
            <button
              type="button"
              onClick={() => setIsCustomModalOpen(true)}
              className="inline-flex items-center gap-2.5 bg-[#173D32] hover:bg-[#123027] text-[#F8F4EA] font-semibold px-8 py-4 rounded-lg text-xs uppercase tracking-wider transition-all shadow-xl group cursor-pointer border border-[#C5A15B]/40 hover:border-[#C5A15B]"
            >
              <Sparkles className="w-4 h-4 text-[#C5A15B]" />
              <span>Start Your Custom Order</span>
            </button>
          </div>
        </div>
      </section>

      {/* 6. SOCIAL PROOF & NATIONWIDE REACH */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] rounded-2xl p-8 sm:p-10 border border-[#C5A15B]/30 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#262824]">
                <div className="flex text-[#C5A15B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A15B]" />
                  ))}
                </div>
                <span>{BUSINESS_INFO.reviewsCount}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#262824]">
                Serving Homes Across Pakistan
              </h3>
              <p className="text-sm text-[#262824]/80 leading-relaxed">
                We deliver to Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Gujranwala, Peshawar, and other destinations across Pakistan with careful packing and insured transport.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 text-xs text-[#262824]">
                {BUSINESS_INFO.deliveryCities.slice(0, 8).map((city) => (
                  <span
                    key={city}
                    className="bg-[#E8DFD0] px-2.5 py-1 rounded-md border border-[#C5A15B]/30 font-medium text-[#173D32]"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#173D32] text-[#F8F4EA] p-6 rounded-2xl border border-[#C5A15B]/40 space-y-4 text-center lg:text-left">
              <span className="text-xs uppercase tracking-widest text-[#C5A15B] font-semibold block">
                Connect Directly
              </span>
              <p className="text-xs text-[#F8F4EA]/85 leading-relaxed">
                Have questions or looking for design recommendations? Our WhatsApp line is open for fast responses.
              </p>
              <a
                href={getWhatsAppUrl('Assalam-o-Alaikum, I am inquiring from the Divine Homes Furniture website.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#F8F4EA] hover:bg-[#FFFFFF] text-[#173D32] py-3 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-md border border-[#C5A15B]"
              >
                <MessageCircle className="w-4 h-4 text-[#173D32]" />
                <span>Chat on WhatsApp: +92 304 8851120</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
      />

      {/* Custom Order Modal */}
      <CustomOrderModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
      />
    </div>
  );
};
