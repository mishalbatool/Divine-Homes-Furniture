import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '../data/furnitureData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2">
      {/* Tooltip speech bubble in Warm Ivory & Dark Charcoal */}
      {showTooltip && (
        <div className="bg-[#F8F4EA] text-[#262824] text-xs py-2.5 px-3.5 rounded-xl shadow-2xl border border-[#C5A15B]/50 max-w-xs animate-in fade-in duration-200 flex items-start gap-2">
          <div>
            <p className="font-semibold text-[#173D32]">Chat with Divine Homes</p>
            <p className="text-[11px] text-[#262824]/80 mt-0.5">
              Discuss designs, custom dimensions & prices directly on WhatsApp.
            </p>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            aria-label="Dismiss WhatsApp hint"
            className="text-[#262824]/50 hover:text-[#173D32] p-0.5 cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Button: Deep Forest Green with Antique Gold Border */}
      <a
        href={getWhatsAppUrl('Assalam-o-Alaikum Divine Homes Furniture, I would like to inquire about your handcrafted furniture.')}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        aria-label="Contact Divine Homes Furniture on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#173D32] hover:bg-[#123027] text-[#F8F4EA] flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 group border-2 border-[#C5A15B] focus:outline-none focus:ring-4 focus:ring-[#C5A15B]/40"
      >
        <MessageCircle className="w-7 h-7 fill-[#C5A15B] stroke-none group-hover:scale-110 transition-transform" />
      </a>
    </aside>
  );
};
