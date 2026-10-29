import React, { useState } from 'react';
import { X, MessageCircle, Check } from 'lucide-react';
import { getWhatsAppUrl } from '../data/furnitureData';

interface CustomOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomOrderModal: React.FC<CustomOrderModalProps> = ({ isOpen, onClose }) => {
  const [roomType, setRoomType] = useState('Master Bedroom Suite');
  const [woodChoice, setWoodChoice] = useState('Seasoned Sheesham (Rosewood)');
  const [finishChoice, setFinishChoice] = useState('Deep Forest Walnut & Antique Patina');
  const [dimensions, setDimensions] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');

  if (!isOpen) return null;

  const roomOptions = [
    'Master Bedroom Suite',
    'Royal Living / Drawing Room',
    'Banquet Dining Room',
    'Traditional Baithak / Deewan',
    'Entryway Console & Mirror',
    'Complete Home Turnkey Furniture',
  ];

  const woodOptions = [
    'Seasoned Sheesham (Rosewood)',
    'Premium Dense Hardwood',
    'Traditional Chinioti Walnut',
    'Custom Wood Specification',
  ];

  const finishOptions = [
    'Deep Forest Walnut & Antique Patina',
    'High-Luster Natural Sheesham Finish',
    'Antique Hand-Rubbed Gold Patina',
    'Natural Satin Walnut Finish',
    'Champagne & Antique Leaf Luster',
  ];

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Assalam-o-Alaikum Divine Homes Furniture, I would like to place a custom furniture inquiry:
• Furniture / Room: ${roomType}
• Wood Preference: ${woodChoice}
• Desired Finish: ${finishChoice}
${dimensions ? `• Dimensions/Space: ${dimensions}` : ''}
${additionalNotes ? `• Notes/Specific Design: ${additionalNotes}` : ''}

Please share available design catalog, estimated production timeline, and price quotation.`;

    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#F8F4EA] rounded-2xl overflow-hidden shadow-2xl border border-[#C5A15B]/30 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#E8DFD0] pb-4 mb-6">
          <div>
            <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#C5A15B] uppercase block">
              Bespoke Tailoring • Divine Homes Chiniot
            </span>
            <h3 className="font-serif text-2xl text-[#262824] mt-1">
              Start Your Custom Furniture Order
            </h3>
            <p className="text-xs text-[#262824]/75 mt-1">
              Specify your requirements below to discuss directly with our master craftsmen on WhatsApp.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 text-[#262824]/60 hover:text-[#262824] rounded-full hover:bg-[#E8DFD0] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSendWhatsApp} className="space-y-5">
          {/* Room Type */}
          <div>
            <label className="block text-xs font-semibold text-[#262824] uppercase tracking-wider mb-2">
              1. Select Furniture / Space Category
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {roomOptions.map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setRoomType(opt)}
                  className={`text-left p-2.5 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                    roomType === opt
                      ? 'bg-[#173D32] text-[#F8F4EA] border-[#173D32] shadow-md font-semibold'
                      : 'bg-[#FFFFFF] text-[#262824] border-[#E8DFD0] hover:border-[#C5A15B]'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Wood Selection */}
          <div>
            <label className="block text-xs font-semibold text-[#262824] uppercase tracking-wider mb-2">
              2. Wood Choice
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {woodOptions.map((wood) => (
                <button
                  type="button"
                  key={wood}
                  onClick={() => setWoodChoice(wood)}
                  className={`text-left p-2.5 rounded-lg border text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                    woodChoice === wood
                      ? 'bg-[#173D32] text-[#F8F4EA] border-[#173D32]'
                      : 'bg-[#FFFFFF] text-[#262824] border-[#E8DFD0] hover:border-[#C5A15B]'
                  }`}
                >
                  <span>{wood}</span>
                  {woodChoice === wood && <Check className="w-3.5 h-3.5 text-[#C5A15B]" />}
                </button>
              ))}
            </div>
          </div>

          {/* Finish & Polish */}
          <div>
            <label className="block text-xs font-semibold text-[#262824] uppercase tracking-wider mb-2">
              3. Wood Finish & Accent
            </label>
            <select
              value={finishChoice}
              onChange={(e) => setFinishChoice(e.target.value)}
              className="w-full bg-[#FFFFFF] border border-[#E8DFD0] rounded-lg p-2.5 text-xs text-[#262824] focus:outline-none focus:border-[#173D32]"
            >
              {finishOptions.map((fin) => (
                <option key={fin} value={fin} className="bg-[#FFFFFF] text-[#262824]">
                  {fin}
                </option>
              ))}
            </select>
          </div>

          {/* Dimensions / Notes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#262824] uppercase tracking-wider mb-1">
                Room Dimensions or Bed Size (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. King Size 6x6.5 ft, or 14x18 ft room"
                value={dimensions}
                onChange={(e) => setDimensions(e.target.value)}
                className="w-full bg-[#FFFFFF] border border-[#E8DFD0] rounded-lg p-2 text-xs text-[#262824] focus:outline-none focus:border-[#173D32]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#262824] uppercase tracking-wider mb-1">
                Specific Carving / Design Reference
              </label>
              <input
                type="text"
                placeholder="e.g. Heavy floral arch, custom velvet color"
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
                className="w-full bg-[#FFFFFF] border border-[#E8DFD0] rounded-lg p-2 text-xs text-[#262824] focus:outline-none focus:border-[#173D32]"
              />
            </div>
          </div>

          {/* CTA Submit */}
          <div className="pt-3 border-t border-[#E8DFD0] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-[11px] text-[#262824]/70 text-center sm:text-left font-medium">
              Direct consultation with Divine Homes Furniture Chiniot.
            </span>
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#173D32] hover:bg-[#123027] text-[#F8F4EA] px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-md cursor-pointer border border-[#C5A15B]/40"
            >
              <MessageCircle className="w-4 h-4 text-[#C5A15B]" />
              <span>Discuss via WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
