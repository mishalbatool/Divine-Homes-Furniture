import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  MessageCircle,
  Sparkles,
  ChevronRight,
  Layers,
  Palette
} from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { LightboxModal, LightboxData } from '../components/LightboxModal';
import { CustomOrderModal } from '../components/CustomOrderModal';
import {
  COLLECTIONS_DATA,
  FEATURED_PIECES,
  GALLERY_ITEMS,
  getProductWhatsAppUrl
} from '../data/furnitureData';

export const CollectionDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeLightboxItem, setActiveLightboxItem] = useState<LightboxData | null>(null);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  const collection = COLLECTIONS_DATA.find((c) => c.slug === slug);

  if (!collection) {
    return <Navigate to="/collections" replace />;
  }

  // Related gallery items
  const relatedGallery = GALLERY_ITEMS.filter((g) => {
    if (collection.slug === 'bedroom-sets' || collection.slug === 'royal-beds') {
      return g.category === 'beds-bedroom';
    }
    if (collection.slug === 'royal-sofas' || collection.slug === 'traditional-deewan') {
      return g.category === 'sofas-living';
    }
    if (collection.slug === 'dining-furniture' || collection.slug === 'console-tables') {
      return g.category === 'dining-consoles';
    }
    return g.category === 'woodwork-details';
  });

  return (
    <div className="min-h-screen bg-[#F8F4EA] text-[#262824] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A15B] mb-8">
          <Link to="/" className="hover:text-[#173D32] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/collections" className="hover:text-[#173D32] transition-colors">Collections</Link>
          <span>/</span>
          <span className="text-[#262824]">{collection.title}</span>
        </div>

        {/* Hero Banner for Collection in Deep Forest Green & Warm Ivory */}
        <div className="bg-[#173D32] text-[#F8F4EA] rounded-2xl overflow-hidden border border-[#C5A15B]/30 shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#C5A15B] block">
                Chinioti Collection • {collection.itemsCount}
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F4EA] leading-tight">
                {collection.title}
              </h1>

              <p className="text-base sm:text-lg text-[#F8F4EA]/85 leading-relaxed">
                {collection.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={getProductWhatsAppUrl(collection.title, 'Dedicated Collection Inquiry')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#F8F4EA] hover:bg-[#FFFFFF] text-[#173D32] font-semibold px-6 py-3.5 rounded-lg text-xs uppercase tracking-wider transition-all shadow-lg group border border-[#C5A15B]"
                >
                  <MessageCircle className="w-4 h-4 text-[#173D32]" />
                  <span>Inquire About This Collection</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsCustomModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-[#123027] hover:bg-[#0E261F] text-[#F8F4EA] border border-[#C5A15B]/40 px-6 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer hover:border-[#C5A15B]"
                >
                  <Sparkles className="w-4 h-4 text-[#C5A15B]" />
                  <span>Customize Specifications</span>
                </button>
              </div>

              {/* Badges */}
              <div className="pt-4 border-t border-[#C5A15B]/20 flex flex-wrap items-center gap-6 text-xs text-[#F8F4EA]/75">
                <span>Hand-Carved in Chiniot</span>
                <span>•</span>
                <span>Direct Manufacturer Pricing</span>
                <span>•</span>
                <span>Delivery Across Pakistan</span>
              </div>
            </div>

            <div className="lg:col-span-5 p-4 sm:p-6">
              <div
                className="relative rounded-xl overflow-hidden shadow-2xl cursor-pointer group border border-[#C5A15B]/30 bg-[#123027]"
                onClick={() =>
                  setActiveLightboxItem({
                    title: collection.title,
                    categoryLabel: collection.itemsCount,
                    image: collection.image,
                    description: collection.description,
                    craftDetails: collection.features.join(' • ')
                  })
                }
              >
                <ImageWithFallback
                  src={collection.image}
                  alt={collection.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="text-xs bg-[#173D32]/90 text-[#F8F4EA] border border-[#C5A15B]/50 font-semibold px-3 py-1.5 rounded-md uppercase tracking-wider shadow">
                    View Full Resolution
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications & Customization Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#C5A15B]/30 space-y-3 shadow-lg">
            <div className="p-2.5 rounded-lg bg-[#E8DFD0] text-[#173D32] w-fit border border-[#C5A15B]/30">
              <Layers className="w-5 h-5 text-[#173D32]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#262824]">
              Timber & Joinery
            </h3>
            <p className="text-xs text-[#262824]/75 leading-relaxed">
              Constructed using seasoned Sheesham (Dalbergia sissoo) or selected hardwoods, cured to withstand humidity changes in Pakistan without cracking. Traditional mortise and tenon joinery ensures multigenerational durability.
            </p>
          </div>

          <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#C5A15B]/30 space-y-3 shadow-lg">
            <div className="p-2.5 rounded-lg bg-[#E8DFD0] text-[#173D32] w-fit border border-[#C5A15B]/30">
              <Palette className="w-5 h-5 text-[#173D32]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#262824]">
              Hand Polish & Finishes
            </h3>
            <p className="text-xs text-[#262824]/75 leading-relaxed">
              Available in Dark Charcoal Espresso, Deep Rich Sheesham, Antique Gold accent leafing, and contemporary Matte Satin finishes.
            </p>
          </div>

          <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#C5A15B]/30 space-y-3 shadow-lg">
            <div className="p-2.5 rounded-lg bg-[#E8DFD0] text-[#173D32] w-fit border border-[#C5A15B]/30">
              <Sparkles className="w-5 h-5 text-[#173D32]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#262824]">
              Custom Tailoring
            </h3>
            <p className="text-xs text-[#262824]/75 leading-relaxed">
              We modify dimensions according to your room plan (King, Queen, Custom sizing), adjust carving density, and source matching luxury fabrics from top textile mills.
            </p>
          </div>
        </div>

        {/* Popular Design Variations in this Category */}
        <div className="bg-[#E8DFD0] rounded-2xl p-8 sm:p-10 border border-[#C5A15B]/30 mb-16 shadow-lg">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs uppercase font-semibold tracking-widest text-[#C5A15B]">
              Configurations & Ensembles
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#262824]">
              Popular Set Combinations
            </h2>
            <p className="text-xs sm:text-sm text-[#262824]/80">
              Select any piece individually or order a complete coordinated suite for your home.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collection.popularItems.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-[#FFFFFF] border border-[#C5A15B]/30 hover:border-[#173D32] transition-colors space-y-3 flex flex-col justify-between shadow-md"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#C5A15B] tracking-wider block">
                    Design Option 0{index + 1}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#262824] mt-1">
                    {item}
                  </h4>
                  <p className="text-xs text-[#262824]/75 mt-1 leading-relaxed">
                    Hand-carved in Chiniot with custom polish, hardware fittings, and direct manufacturer delivery.
                  </p>
                </div>
                <a
                  href={getProductWhatsAppUrl(item, collection.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-xs font-semibold text-[#173D32] hover:text-[#123027] pt-2 border-t border-[#E8DFD0]"
                >
                  <span>Discuss This Piece</span>
                  <MessageCircle className="w-4 h-4 text-[#C5A15B]" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Visuals for this category */}
        {relatedGallery.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase font-semibold tracking-widest text-[#C5A15B] block">
                  Visual Showcase
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#262824]">
                  Craftsmanship in Detail
                </h3>
              </div>
              <Link
                to="/gallery"
                className="text-xs font-semibold uppercase tracking-wider text-[#173D32] hover:text-[#123027] flex items-center gap-1.5"
              >
                <span>View Full Gallery</span>
                <ChevronRight className="w-4 h-4 text-[#C5A15B]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedGallery.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#C5A15B]/30 hover:border-[#173D32] transition-all shadow-lg group cursor-pointer"
                  onClick={() => setActiveLightboxItem(item)}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#E8DFD0]">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <h4 className="font-serif text-base font-bold text-[#262824]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#262824]/75 line-clamp-2">
                      {item.craftDetails}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Order CTA Banner in Deep Forest Green */}
        <div className="bg-[#173D32] text-[#F8F4EA] p-8 sm:p-12 rounded-2xl border border-[#C5A15B]/40 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-2xl">
          <div className="space-y-2">
            <span className="text-xs uppercase font-semibold tracking-widest text-[#C5A15B]">
              Direct From Chiniot Workshops
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F8F4EA]">
              Ready to Order or Inquire About Prices?
            </h3>
            <p className="text-xs sm:text-sm text-[#F8F4EA]/80 max-w-xl">
              Connect with our master artisans on WhatsApp. We share live workshop photos, custom fabric swatches, and quotation details.
            </p>
          </div>
          <a
            href={getProductWhatsAppUrl(collection.title, 'Direct Order')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#F8F4EA] hover:bg-[#FFFFFF] text-[#173D32] font-semibold px-7 py-3.5 rounded-lg text-xs uppercase tracking-wider transition-all shadow-md whitespace-nowrap border border-[#C5A15B]"
          >
            <MessageCircle className="w-5 h-5 text-[#173D32]" />
            <span>Chat on WhatsApp (+92 304 8851120)</span>
          </a>
        </div>
      </div>

      <LightboxModal
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
      />

      <CustomOrderModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
      />
    </div>
  );
};
