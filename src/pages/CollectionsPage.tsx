import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, Sparkles, ChevronRight, Check } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { LightboxModal, LightboxData } from '../components/LightboxModal';
import { CustomOrderModal } from '../components/CustomOrderModal';
import {
  COLLECTIONS_DATA,
  FEATURED_PIECES,
  getProductWhatsAppUrl
} from '../data/furnitureData';

export const CollectionsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<LightboxData | null>(null);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  const filteredCollections =
    selectedFilter === 'all'
      ? COLLECTIONS_DATA
      : COLLECTIONS_DATA.filter((c) => c.slug === selectedFilter);

  return (
    <div className="min-h-screen bg-[#F8F4EA] text-[#262824] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb & Title */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A15B]">
            <Link to="/" className="hover:text-[#173D32] transition-colors">Home</Link>
            <span>/</span>
            <span>Collections</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#262824] font-bold">
            Chinioti Furniture Collections
          </h1>
          <p className="text-sm sm:text-base text-[#262824]/80 leading-relaxed">
            Explore our curated catalog of handcrafted Chinioti wooden furniture. As a direct manufacturer, each piece can be fully customized in size, wood species, and polish to suit your home.
          </p>
        </div>

        {/* Filter Navigation Bar: Deep Forest Green active state */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <button
            type="button"
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
              selectedFilter === 'all'
                ? 'bg-[#173D32] text-[#F8F4EA] shadow-md border border-[#C5A15B]/50'
                : 'bg-[#E8DFD0] text-[#262824] border border-[#C5A15B]/30 hover:border-[#173D32] hover:text-[#173D32]'
            }`}
          >
            All Categories (8)
          </button>
          {COLLECTIONS_DATA.map((col) => (
            <button
              type="button"
              key={col.slug}
              onClick={() => setSelectedFilter(col.slug)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedFilter === col.slug
                  ? 'bg-[#173D32] text-[#F8F4EA] shadow-md border border-[#C5A15B]/50'
                  : 'bg-[#E8DFD0] text-[#262824] border border-[#C5A15B]/30 hover:border-[#173D32] hover:text-[#173D32]'
              }`}
            >
              {col.title}
            </button>
          ))}
        </div>

        {/* Collections Grid: Warm Ivory / Pure White cards with subtle gold borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((col) => (
            <div
              key={col.id}
              className="bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#C5A15B]/30 hover:border-[#173D32] transition-all duration-300 hover:shadow-xl flex flex-col group"
            >
              <div
                className="relative overflow-hidden cursor-pointer aspect-[16/10] bg-[#E8DFD0]"
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
                <div className="absolute top-3 left-3 bg-[#173D32]/90 backdrop-blur-sm text-[#F8F4EA] text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-md border border-[#C5A15B]/30">
                  {col.itemsCount}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h2 className="font-serif text-2xl font-bold text-[#262824] group-hover:text-[#173D32] transition-colors">
                    {col.title}
                  </h2>
                  <p className="text-xs text-[#262824]/75 leading-relaxed">
                    {col.description}
                  </p>

                  <div className="pt-2 space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#C5A15B] block">
                      Craftsmanship Highlights
                    </span>
                    <ul className="space-y-1">
                      {col.features.map((feat, i) => (
                        <li key={i} className="text-xs text-[#262824]/80 flex items-center gap-2">
                          <Check className="w-3 h-3 text-[#173D32] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-[#E8DFD0]">
                  <Link
                    to={`/collections/${col.slug}`}
                    className="w-full inline-flex items-center justify-between text-xs font-semibold text-[#173D32] hover:text-[#123027] py-1 transition-colors"
                  >
                    <span>View Dedicated Collection Page</span>
                    <ChevronRight className="w-4 h-4 text-[#C5A15B]" />
                  </Link>

                  <a
                    href={getProductWhatsAppUrl(col.title, 'Collection Overview')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#173D32] hover:bg-[#123027] text-[#F8F4EA] py-2.5 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-md border border-[#173D32] hover:border-[#C5A15B]/50"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#C5A15B]" />
                    <span>Discuss on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Showcase Pieces */}
        <div className="mt-20 pt-12 border-t border-[#E8DFD0]">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase font-semibold tracking-widest text-[#C5A15B] block">
                Signature Portfolio
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#262824] mt-1">
                Featured Chinioti Pieces
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsCustomModalOpen(true)}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173D32] hover:text-[#123027] border-b border-[#C5A15B] pb-0.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" />
              <span>Request Custom Dimension</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_PIECES.map((piece) => (
              <div
                key={piece.id}
                className="bg-[#FFFFFF] rounded-2xl p-4 border border-[#C5A15B]/30 hover:border-[#173D32] transition-all space-y-3 shadow-lg"
              >
                <div
                  className="aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-[#E8DFD0]"
                  onClick={() =>
                    setActiveLightboxItem({
                      title: piece.title,
                      categoryLabel: piece.categoryName,
                      image: piece.image,
                      description: piece.description,
                      craftDetails: `${piece.woodType} • ${piece.finish} • ${piece.carvingStyle}`
                    })
                  }
                >
                  <ImageWithFallback
                    src={piece.image}
                    alt={piece.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#C5A15B] tracking-wider block">
                    {piece.categoryName}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#262824] mt-0.5">
                    {piece.title}
                  </h3>
                  <div className="text-xs text-[#262824]/75 space-y-0.5 mt-2">
                    <p><span className="font-medium text-[#262824]">Wood:</span> {piece.woodType}</p>
                    <p><span className="font-medium text-[#262824]">Finish:</span> {piece.finish}</p>
                    <p><span className="font-medium text-[#262824]">Carving:</span> {piece.carvingStyle}</p>
                  </div>
                </div>
                <a
                  href={getProductWhatsAppUrl(piece.title, piece.categoryName)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#E8DFD0] hover:bg-[#173D32] text-[#262824] hover:text-[#F8F4EA] border border-[#C5A15B]/40 py-2 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#C5A15B]" />
                  <span>Discuss Price on WhatsApp</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Order Callout in Deep Forest Green */}
        <div className="mt-16 bg-[#173D32] text-[#F8F4EA] p-8 sm:p-10 rounded-2xl border border-[#C5A15B]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl text-[#F8F4EA]">Looking for a Specific Design or Sizing?</h3>
            <p className="text-xs sm:text-sm text-[#F8F4EA]/80 max-w-xl">
              As furniture manufacturers in Chiniot, we can build from your custom pictures, architectural CAD drawings, or interior moodboards.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsCustomModalOpen(true)}
            className="inline-flex items-center gap-2 bg-[#F8F4EA] hover:bg-[#FFFFFF] text-[#173D32] font-semibold px-6 py-3.5 rounded-lg text-xs uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer shadow-lg border border-[#C5A15B]"
          >
            <Sparkles className="w-4 h-4 text-[#173D32]" />
            <span>Customize Your Order</span>
          </button>
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
