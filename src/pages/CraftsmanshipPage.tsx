import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  Sparkles,
  ArrowRight,
  Hammer,
  Palette,
  Layers
} from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { LightboxModal, LightboxData } from '../components/LightboxModal';
import { CustomOrderModal } from '../components/CustomOrderModal';
import { getWhatsAppUrl } from '../data/furnitureData';

export const CraftsmanshipPage: React.FC = () => {
  const [activeLightboxItem, setActiveLightboxItem] = useState<LightboxData | null>(null);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  const steps = [
    {
      num: '01',
      title: 'Selection & Seasoning of Solid Timber',
      desc: 'Authentic Chinioti furniture begins with the wood. We carefully source dense seasoned Sheesham (Dalbergia sissoo) and choice hardwoods, naturally conditioned to ensure dimensional stability across varying humidity conditions throughout Pakistan.'
    },
    {
      num: '02',
      title: 'Architectural Drafting & Carving Layout',
      desc: 'Master woodcarvers outline traditional floral scrolls, paisley motifs (kairi), and regal arches directly onto the timber surfaces based on classical blueprints or tailored client proportions.'
    },
    {
      num: '03',
      title: 'Hand Chisel Relief & Openwork Jali',
      desc: 'Using an array of carbon steel gouges and mallets, artisans spend dozens of hours carving deep relief botanical crests and openwork fretwork without modern CNC automated shortcuts.'
    },
    {
      num: '04',
      title: 'Traditional Joinery & Structural Assembly',
      desc: 'Frames are assembled with classic mortise-and-tenon and dowel joints, reinforcing bed headboards, sofa aprons, and dining pedestals to bear solid weight and endure generations.'
    },
    {
      num: '05',
      title: 'Hand-Rubbed Polish & Protective Finishing',
      desc: 'Multi-stage sanding followed by rich stains, satin patinas, and protective clear coats that seal the natural grain and produce a rich, lustrous tactile finish.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F4EA] text-[#262824] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A15B] mb-8">
          <Link to="/" className="hover:text-[#173D32] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#262824]">Our Craftsmanship</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#C5A15B] block">
            Artisanal Heritage of Chiniot
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#262824] leading-tight">
            Where Tradition Meets Timeless Design
          </h1>
          <p className="text-base sm:text-lg text-[#262824]/80 leading-relaxed">
            Rooted in the artistry of Chiniot, our furniture celebrates intricate wooden detailing, elegant forms, and designs that complement both traditional and contemporary homes.
          </p>
        </div>

        {/* Feature Visual Grid with Deep Forest Green Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 bg-[#173D32] text-[#F8F4EA] p-8 sm:p-12 rounded-2xl border border-[#C5A15B]/30 shadow-2xl">
          <div className="lg:col-span-7">
            <div
              className="rounded-xl overflow-hidden shadow-2xl border border-[#C5A15B]/40 cursor-pointer group relative bg-[#123027]"
              onClick={() =>
                setActiveLightboxItem({
                  title: 'Master Wood Carver at Work',
                  categoryLabel: 'Chinioti Craftsmanship',
                  image: '/images/craftsmanship_carving.jpg',
                  description: 'Authentic hand carving using chisels on seasoned dark sheesham wood in Divine Homes workshop.',
                  craftDetails: 'Deep relief floral details taking dozens of hours of meticulous manual chiseling.'
                })
              }
            >
              <ImageWithFallback
                src="/images/craftsmanship_carving.jpg"
                alt="Chinioti Hand Wood Carving"
                className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-90 p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A15B] font-semibold">
                  Hand-Chiseled Detailing
                </span>
                <p className="font-serif text-xl sm:text-2xl mt-1 text-[#F8F4EA]">
                  Intricate Floral Relief in Solid Sheesham
                </p>
                <p className="text-xs text-[#F8F4EA]/80 mt-1">
                  Click to view high-resolution wood carving details
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#123027] p-6 rounded-xl border border-[#C5A15B]/30 space-y-3 shadow-md">
              <span className="text-xs uppercase font-semibold text-[#C5A15B] tracking-wider block">
                The Heritage City
              </span>
              <h3 className="font-serif text-xl font-bold text-[#F8F4EA]">
                The Renowned Woodworkers of Chiniot
              </h3>
              <p className="text-xs sm:text-sm text-[#F8F4EA]/80 leading-relaxed">
                For centuries, the historic city of Chiniot on the banks of the Chenab River has been celebrated across South Asia for its unmatched architectural woodwork, royal palaces, and ornamental furniture. At Divine Homes Furniture, we preserve this lineage of master artisans, translating historical motifs into heirloom furniture for modern homes.
              </p>
            </div>

            <div className="bg-[#123027] p-6 rounded-xl border border-[#C5A15B]/30 space-y-3 shadow-md">
              <h4 className="font-serif text-lg font-semibold text-[#F8F4EA]">
                Direct Manufacturer Accountability
              </h4>
              <p className="text-xs text-[#F8F4EA]/80 leading-relaxed">
                Every piece is manufactured inside our own workshops in Chiniot. You communicate with the craftsmen directly regarding your desired wood, polish, and room dimensions.
              </p>
              <a
                href={getWhatsAppUrl('Assalam-o-Alaikum, I am interested in learning more about your Chinioti craftsmanship and available designs.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A15B] hover:text-[#FFFFFF] transition-colors pt-2"
              >
                <span>Discuss with Our Team on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A15B]" />
              </a>
            </div>
          </div>
        </div>

        {/* 5-Step Craft Journey */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase font-semibold tracking-widest text-[#C5A15B]">
              From Timber to Masterpiece
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#262824]">
              The Handcrafted Making Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((st) => (
              <div
                key={st.num}
                className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#C5A15B]/30 hover:border-[#173D32] transition-all duration-200 hover:shadow-xl space-y-3"
              >
                <div className="font-serif text-3xl font-bold text-[#C5A15B]">
                  {st.num}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#262824]">
                  {st.title}
                </h3>
                <p className="text-xs text-[#262824]/75 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}

            {/* Custom Consultation Card */}
            <div className="bg-[#E8DFD0] p-6 rounded-2xl border border-[#C5A15B]/40 flex flex-col justify-between space-y-4 shadow-md">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#173D32]">
                  Custom Orders
                </span>
                <h4 className="font-serif text-lg font-bold text-[#262824]">
                  Your Custom Blueprints
                </h4>
                <p className="text-xs text-[#262824]/75 leading-relaxed">
                  Have an interior designer drawing or a specific room space? We tailor every detail to fit your architectural layout.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsCustomModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-[#173D32] hover:bg-[#123027] text-[#F8F4EA] py-2.5 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-md cursor-pointer border border-[#C5A15B]/40"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" />
                <span>Customize Your Furniture</span>
              </button>
            </div>
          </div>
        </div>

        {/* Visual Showcase: Workshop & Headboards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div
            className="rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#C5A15B]/30 hover:border-[#173D32] transition-all cursor-pointer group shadow-xl"
            onClick={() =>
              setActiveLightboxItem({
                title: 'Opulent Chinioti Bed Headboard Detail',
                categoryLabel: 'Headboard Craftsmanship',
                image: '/images/royal_bed_headboard.jpg',
                description: 'Deep relief floral carving with dark luster polish and button tufting.',
                craftDetails: 'Handcrafted floral acanthus scrollwork with delicate satin finish highlights.'
              })
            }
          >
            <div className="aspect-[4/3] overflow-hidden bg-[#E8DFD0]">
              <ImageWithFallback
                src="/images/royal_bed_headboard.jpg"
                alt="Royal Headboard Carving"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A15B]">
                Intricate Headboard Cresting
              </span>
              <h3 className="font-serif text-xl font-bold text-[#262824]">
                Deep Relief Carving & Natural Textures
              </h3>
              <p className="text-xs text-[#262824]/75 leading-relaxed">
                Sculpted from thick seasoned Sheesham planks with delicate botanical scrolls and plush tufted velvet backings.
              </p>
            </div>
          </div>

          <div
            className="rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#C5A15B]/30 hover:border-[#173D32] transition-all cursor-pointer group shadow-xl"
            onClick={() =>
              setActiveLightboxItem({
                title: 'Divine Homes Workshop in Chiniot',
                categoryLabel: 'Artisanal Woodworking',
                image: '/images/bespoke_workshop.jpg',
                description: 'Craftsmen shaping bespoke solid wood furniture components according to architectural plans.',
                craftDetails: 'Traditional hand craftsmanship combined with precision joinery in Chiniot, Pakistan.'
              })
            }
          >
            <div className="aspect-[4/3] overflow-hidden bg-[#E8DFD0]">
              <ImageWithFallback
                src="/images/bespoke_workshop.jpg"
                alt="Divine Homes Workshop Chiniot"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A15B]">
                Workshop in Chiniot, Punjab
              </span>
              <h3 className="font-serif text-xl font-bold text-[#262824]">
                Traditional Chinioti Manufacturing Workshop
              </h3>
              <p className="text-xs text-[#262824]/75 leading-relaxed">
                Our craftsmen at work on Barafkarkhana Road, Chiniot, bringing customer designs to life with seasoned timber and hand tools.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner in Deep Forest Green */}
        <div className="bg-[#173D32] text-[#F8F4EA] p-8 sm:p-12 rounded-2xl border border-[#C5A15B]/40 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-2xl">
          <div className="space-y-2">
            <span className="text-xs uppercase font-semibold tracking-widest text-[#C5A15B]">
              Connect With Our Craftsmen
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F8F4EA]">
              Experience Authentic Chinioti Quality
            </h3>
            <p className="text-xs sm:text-sm text-[#F8F4EA]/80 max-w-xl">
              Discuss your desired furniture style, wood selection, and custom measurements directly on WhatsApp.
            </p>
          </div>
          <a
            href={getWhatsAppUrl('Assalam-o-Alaikum Divine Homes Furniture, I would like to consult with your craftsmen regarding custom furniture.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#F8F4EA] hover:bg-[#FFFFFF] text-[#173D32] font-semibold px-7 py-3.5 rounded-lg text-xs uppercase tracking-wider transition-all shadow-md whitespace-nowrap border border-[#C5A15B]"
          >
            <MessageCircle className="w-5 h-5 text-[#173D32]" />
            <span>Consult on WhatsApp</span>
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
