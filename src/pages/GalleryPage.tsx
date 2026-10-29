import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  MessageCircle,
  Maximize2
} from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { LightboxModal, LightboxData } from '../components/LightboxModal';
import { CustomOrderModal } from '../components/CustomOrderModal';
import {
  GALLERY_ITEMS,
  getProductWhatsAppUrl,
  getWhatsAppUrl
} from '../data/furnitureData';

export const GalleryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug?: string }>();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<string>(categorySlug || 'all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<LightboxData | null>(null);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  // Sync tab if URL parameter changes
  useEffect(() => {
    if (categorySlug) {
      setActiveTab(categorySlug);
    } else {
      setActiveTab('all');
    }
  }, [categorySlug]);

  const categories = [
    { slug: 'all', label: 'All Masterpieces', path: '/gallery' },
    { slug: 'beds-bedroom', label: 'Beds & Bedroom', path: '/gallery/beds-bedroom' },
    { slug: 'sofas-living', label: 'Sofas & Living Room', path: '/gallery/sofas-living' },
    { slug: 'dining-consoles', label: 'Dining & Consoles', path: '/gallery/dining-consoles' },
    { slug: 'woodwork-details', label: 'Woodwork Details', path: '/gallery/woodwork-details' },
  ];

  const handleTabChange = (slug: string, path: string) => {
    setActiveTab(slug);
    navigate(path);
  };

  const filteredItems =
    activeTab === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <div className="min-h-screen bg-[#F8F4EA] text-[#262824] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A15B] mb-8">
          <Link to="/" className="hover:text-[#173D32] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/gallery" className="hover:text-[#173D32] transition-colors">Gallery</Link>
          {activeTab !== 'all' && (
            <>
              <span>/</span>
              <span className="text-[#262824]">
                {categories.find((c) => c.slug === activeTab)?.label}
              </span>
            </>
          )}
        </div>

        {/* Header Intro */}
        <div className="max-w-3xl mb-12 space-y-4">
          <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#C5A15B] block">
            Visual Archive
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#262824] leading-tight">
            Furniture Gallery & Details
          </h1>
          <p className="text-sm sm:text-base text-[#262824]/80 leading-relaxed">
            A visual showcase of bespoke Chinioti master beds, royal drawing room sofas, formal dining suites, and intricate wood carving relief. Click any piece to inspect details in high-resolution and discuss with our artisans.
          </p>
        </div>

        {/* Filter Navigation Tabs with Deep Forest Green Active State */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar border-b border-[#E8DFD0]">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat.slug}
              onClick={() => handleTabChange(cat.slug, cat.path)}
              className={`px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                activeTab === cat.slug
                  ? 'bg-[#173D32] text-[#F8F4EA] shadow-md border border-[#C5A15B]/50'
                  : 'bg-[#E8DFD0] text-[#262824] border border-[#C5A15B]/30 hover:border-[#173D32] hover:text-[#173D32]'
              }`}
            >
              <span>{cat.label}</span>
              {activeTab === cat.slug && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A15B]" />
              )}
            </button>
          ))}
        </div>

        {/* Gallery Grid: Pure White / Warm Ivory Cards with Subtle Gold Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#C5A15B]/30 hover:border-[#173D32] transition-all duration-300 hover:shadow-xl group flex flex-col justify-between"
            >
              {/* Image with hover reveal & Lightbox trigger */}
              <div
                className="relative overflow-hidden cursor-pointer aspect-[4/3] bg-[#E8DFD0]"
                onClick={() => setActiveLightboxItem(item)}
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Category Text Tag */}
                <div className="absolute top-3 left-3 bg-[#173D32]/90 backdrop-blur-sm text-[#F8F4EA] text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-md border border-[#C5A15B]/30">
                  {item.categoryLabel}
                </div>

                {/* Hover overlay with Antique Gold zoom icon */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 bg-[#173D32]/95 text-[#F8F4EA] border border-[#C5A15B]/50 text-xs font-semibold px-4 py-2 rounded-lg uppercase tracking-wider shadow-xl">
                    <Maximize2 className="w-3.5 h-3.5 text-[#C5A15B]" />
                    <span>View Detail</span>
                  </span>
                </div>
              </div>

              {/* Information */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h3 className="font-serif text-xl font-bold text-[#262824] group-hover:text-[#173D32] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#262824]/75 leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-[11px] text-[#262824]/70 italic pt-1 border-t border-[#E8DFD0]">
                    <span className="font-semibold not-italic text-[#262824]">Detail:</span> {item.craftDetails}
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#E8DFD0] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveLightboxItem(item)}
                    className="text-xs font-semibold text-[#173D32] hover:text-[#123027] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Zoom</span>
                    <Maximize2 className="w-3 h-3 text-[#C5A15B]" />
                  </button>

                  <a
                    href={getProductWhatsAppUrl(item.title, item.categoryLabel)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#173D32] hover:bg-[#123027] text-[#F8F4EA] border border-[#173D32] px-3.5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-md hover:border-[#C5A15B]/50"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#C5A15B]" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner in Deep Forest Green */}
        <div className="mt-16 bg-[#173D32] text-[#F8F4EA] p-8 sm:p-12 rounded-2xl border border-[#C5A15B]/40 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-2xl">
          <div className="space-y-2">
            <span className="text-xs uppercase font-semibold tracking-widest text-[#C5A15B]">
              Have a Design Photo From Pinterest or Instagram?
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F8F4EA]">
              We Recreate Custom Furniture From Your Pictures
            </h3>
            <p className="text-xs sm:text-sm text-[#F8F4EA]/80 max-w-xl">
              Share any photo or screenshot with our master craftsmen on WhatsApp for direct guidance on wood species, carving details, and quotation.
            </p>
          </div>
          <a
            href={getWhatsAppUrl('Assalam-o-Alaikum Divine Homes, I have a furniture design picture I would like to recreate in solid wood.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#F8F4EA] hover:bg-[#FFFFFF] text-[#173D32] font-semibold px-7 py-3.5 rounded-lg text-xs uppercase tracking-wider transition-all shadow-md whitespace-nowrap border border-[#C5A15B]"
          >
            <MessageCircle className="w-5 h-5 text-[#173D32]" />
            <span>Send Picture on WhatsApp</span>
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
