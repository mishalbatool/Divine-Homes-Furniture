import React, { useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { getProductWhatsAppUrl } from '../data/furnitureData';

export interface LightboxData {
  title: string;
  categoryLabel?: string;
  image: string;
  description?: string;
  craftDetails?: string;
}

interface LightboxModalProps {
  item: LightboxData | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-[#F8F4EA] rounded-2xl overflow-hidden shadow-2xl border border-[#C5A15B]/40 flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#173D32]/80 hover:bg-[#173D32] text-white transition-colors cursor-pointer border border-[#C5A15B]/30"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Preview Container */}
        <div className="w-full md:w-3/5 bg-[#173D32] flex items-center justify-center p-2 sm:p-4 min-h-[320px] max-h-[70vh] md:max-h-[80vh]">
          <ImageWithFallback
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[68vh] rounded-lg"
            containerClassName="w-full h-full flex items-center justify-center bg-transparent"
          />
        </div>

        {/* Details & WhatsApp Inquiry */}
        <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#F8F4EA] border-t md:border-t-0 md:border-l border-[#E8DFD0]">
          <div className="space-y-4">
            {item.categoryLabel && (
              <span className="text-[11px] uppercase tracking-widest text-[#C5A15B] font-bold block">
                {item.categoryLabel}
              </span>
            )}
            <h3 className="font-serif text-2xl text-[#262824] leading-snug">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-sm text-[#262824]/80 leading-relaxed">
                {item.description}
              </p>
            )}
            {item.craftDetails && (
              <div className="bg-[#E8DFD0]/70 p-4 rounded-xl border border-[#C5A15B]/30 shadow-sm">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#173D32] block mb-1">
                  Craftsmanship Detail
                </span>
                <p className="text-xs text-[#262824]/90 leading-relaxed">
                  {item.craftDetails}
                </p>
              </div>
            )}
            <div className="text-xs text-[#262824]/75 space-y-1 pt-1">
              <p>• Handcrafted in Chiniot, Pakistan</p>
              <p>• Custom dimensions, finishes & fabrics available</p>
              <p>• Direct manufacturer consultation</p>
            </div>
          </div>

          <div className="pt-6 mt-4 border-t border-[#E8DFD0]">
            <a
              href={getProductWhatsAppUrl(item.title, item.categoryLabel)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 bg-[#173D32] hover:bg-[#123027] text-[#F8F4EA] py-3 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg group border border-[#C5A15B]/40"
            >
              <MessageCircle className="w-4 h-4 text-[#C5A15B] group-hover:scale-110 transition-transform" />
              <span>Inquire on WhatsApp</span>
            </a>
            <span className="text-[11px] text-[#173D32] text-center block mt-2 font-medium">
              Discuss pricing, wood finishes, and delivery directly with our team.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
