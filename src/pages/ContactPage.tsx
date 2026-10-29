import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Compass,
  ExternalLink
} from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/furnitureData';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [interest, setInterest] = useState('Luxury Bedroom Sets');
  const [message, setMessage] = useState('');

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Divine Homes Furniture Barafkarkhana Road near Fazal Masjid Chiniot Punjab 35400 Pakistan'
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `Assalam-o-Alaikum Divine Homes Furniture Chiniot,
• Name: ${name || 'Prospective Client'}
• City/Destination: ${city || 'Pakistan'}
• Interested In: ${interest}
• Message / Inquiry: ${message || 'I would like to discuss available Chinioti designs and get a price quotation.'}

Looking forward to your response.`;

    window.open(getWhatsAppUrl(formatted), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#F8F4EA] text-[#262824] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A15B] mb-8">
          <Link to="/" className="hover:text-[#173D32] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#262824]">Contact Us</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-3xl mb-12 space-y-4">
          <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#C5A15B] block">
            Direct Manufacturer Consultation
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#262824] leading-tight">
            Connect With Divine Homes Furniture
          </h1>
          <p className="text-base sm:text-lg text-[#262824]/80 leading-relaxed">
            Reach out directly to our Chiniot manufacturing workshop. We discuss customized dimensions, wood finishes, live video tours, and delivery schedules across Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Left Column: Business Details & Official Channels in Forest Green Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#173D32] text-[#F8F4EA] p-8 rounded-2xl border border-[#C5A15B]/40 shadow-2xl space-y-6">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A15B] block">
                  Official Manufacturer Information
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#F8F4EA] mt-1">
                  {BUSINESS_INFO.name}
                </h2>
                <p className="text-xs text-[#F8F4EA]/75 font-medium mt-0.5">
                  Business Type: {BUSINESS_INFO.type}
                </p>
              </div>

              {/* Contact Specifics */}
              <div className="space-y-4 pt-2 border-t border-[#C5A15B]/20 text-sm text-[#F8F4EA]">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#123027] text-[#C5A15B] shrink-0 mt-0.5 border border-[#C5A15B]/30">
                    <MapPin className="w-4 h-4 text-[#C5A15B]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A15B] block">
                      Workshop & Factory Address
                    </span>
                    <p className="text-xs text-[#F8F4EA]/90 leading-relaxed">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#123027] text-[#C5A15B] shrink-0 mt-0.5 border border-[#C5A15B]/30">
                    <Phone className="w-4 h-4 text-[#C5A15B]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A15B] block">
                      Phone & Call Inquiry
                    </span>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-xs font-medium text-[#F8F4EA] hover:text-[#C5A15B] block transition-colors"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#123027] text-[#C5A15B] shrink-0 mt-0.5 border border-[#C5A15B]/30">
                    <MessageCircle className="w-4 h-4 text-[#C5A15B]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A15B] block">
                      Primary WhatsApp Channel
                    </span>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-[#F8F4EA] hover:text-[#C5A15B] block transition-colors"
                    >
                      +92 304 8851120
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="pt-4 border-t border-[#C5A15B]/20 space-y-2.5">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#123027] hover:bg-[#0E261F] text-[#F8F4EA] border border-[#C5A15B]/40 py-3 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-md group"
                >
                  <Phone className="w-4 h-4 text-[#C5A15B] group-hover:text-white" />
                  <span>Call Now ({BUSINESS_INFO.phoneDisplay})</span>
                </a>

                <a
                  href={getWhatsAppUrl('Assalam-o-Alaikum Divine Homes Furniture, I would like to make an inquiry.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F8F4EA] hover:bg-[#FFFFFF] text-[#173D32] py-3 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg border border-[#C5A15B]"
                >
                  <MessageCircle className="w-4 h-4 text-[#173D32]" />
                  <span>Discuss on WhatsApp</span>
                </a>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-transparent text-[#F8F4EA]/80 hover:text-[#FFFFFF] py-2 text-xs font-semibold transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#C5A15B]" />
                  <span>View Location on Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#C5A15B]" />
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[#C5A15B]/20 space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A15B] block">
                  Official Social Media
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={BUSINESS_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#123027] border border-[#C5A15B]/30 hover:border-[#C5A15B] text-[#C5A15B] hover:text-[#FFFFFF] transition-colors"
                    aria-label="Instagram profile"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={BUSINESS_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#123027] border border-[#C5A15B]/30 hover:border-[#C5A15B] text-[#C5A15B] hover:text-[#FFFFFF] transition-colors"
                    aria-label="Facebook profile"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={BUSINESS_INFO.social.pinterest}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#123027] border border-[#C5A15B]/30 hover:border-[#C5A15B] text-[#C5A15B] hover:text-[#FFFFFF] transition-colors"
                    aria-label="Pinterest profile"
                  >
                    <Compass className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct WhatsApp Inquiry Composer Form in Forest Green Panel */}
          <div className="lg:col-span-7">
            <div className="bg-[#173D32] text-[#F8F4EA] p-8 sm:p-10 rounded-2xl border border-[#C5A15B]/40 shadow-2xl space-y-6">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A15B] block">
                  Send a Direct Message
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#F8F4EA] mt-1">
                  Custom Order & Pricing Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#F8F4EA]/80 mt-1">
                  Fill in your details below to instantly generate a formatted WhatsApp message to Divine Homes Furniture Chiniot.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#F8F4EA] uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Mehmood"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#123027] border border-[#C5A15B]/30 rounded-lg p-2.5 text-xs text-[#F8F4EA] focus:outline-none focus:border-[#C5A15B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#F8F4EA] uppercase tracking-wider mb-1.5">
                      Your City
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lahore, Islamabad, Karachi"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-[#123027] border border-[#C5A15B]/30 rounded-lg p-2.5 text-xs text-[#F8F4EA] focus:outline-none focus:border-[#C5A15B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F8F4EA] uppercase tracking-wider mb-1.5">
                    Furniture Category of Interest
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full bg-[#123027] border border-[#C5A15B]/30 rounded-lg p-2.5 text-xs text-[#F8F4EA] focus:outline-none focus:border-[#C5A15B]"
                  >
                    <option value="Luxury Bedroom Sets" className="bg-[#123027] text-[#F8F4EA]">Luxury Bedroom Sets</option>
                    <option value="Royal Beds & Headboards" className="bg-[#123027] text-[#F8F4EA]">Royal Beds & Headboards</option>
                    <option value="Royal Sofa Sets" className="bg-[#123027] text-[#F8F4EA]">Royal Sofa Sets</option>
                    <option value="Traditional Deewan" className="bg-[#123027] text-[#F8F4EA]">Traditional Deewan</option>
                    <option value="Dining Tables & Chairs" className="bg-[#123027] text-[#F8F4EA]">Dining Tables & Chairs</option>
                    <option value="Console Tables & Mirrors" className="bg-[#123027] text-[#F8F4EA]">Console Tables & Mirrors</option>
                    <option value="Hand-Carved Custom Furniture" className="bg-[#123027] text-[#F8F4EA]">Hand-Carved Custom Furniture</option>
                    <option value="Complete Home Turnkey Package" className="bg-[#123027] text-[#F8F4EA]">Complete Home Turnkey Package</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F8F4EA] uppercase tracking-wider mb-1.5">
                    Your Requirements / Dimensions / Specific Design Idea
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your design preferences, wood polish tone, room dimensions, or any specific pictures you have."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#123027] border border-[#C5A15B]/30 rounded-lg p-2.5 text-xs text-[#F8F4EA] focus:outline-none focus:border-[#C5A15B]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#F8F4EA] hover:bg-[#FFFFFF] text-[#173D32] py-3.5 px-6 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg group cursor-pointer border border-[#C5A15B]"
                  >
                    <MessageCircle className="w-4 h-4 text-[#173D32] group-hover:scale-110 transition-transform" />
                    <span>Send Inquiry on WhatsApp</span>
                  </button>
                  <span className="text-[11px] text-[#F8F4EA]/75 text-center block mt-2 font-medium">
                    Direct communication with Divine Homes Furniture Chiniot (+92 304 8851120).
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Information Card in Forest Green Panel */}
        <div className="bg-[#173D32] text-[#F8F4EA] rounded-2xl p-8 border border-[#C5A15B]/40 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs uppercase font-semibold text-[#C5A15B] tracking-wider">
                Visit Our Workshop in Chiniot
              </span>
              <h3 className="font-serif text-xl font-bold text-[#F8F4EA]">
                Factory & Showroom Location
              </h3>
              <p className="text-xs text-[#F8F4EA]/80 max-w-xl">
                Located on Barafkarkhana Road, near Fazal Masjid, Chiniot, Punjab 35400, Pakistan. Visitors and prospective clients are warmly welcome by prior appointment.
              </p>
            </div>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#123027] hover:bg-[#0E261F] text-[#F8F4EA] border border-[#C5A15B]/40 px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-md whitespace-nowrap group"
            >
              <MapPin className="w-4 h-4 text-[#C5A15B] group-hover:text-white" />
              <span>Open Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C5A15B] group-hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
