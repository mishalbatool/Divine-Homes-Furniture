/**
 * Data store for Divine Homes Furniture Chiniot
 */

export interface CollectionCategory {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  itemsCount: string;
  popularItems: string[];
  features: string[];
}

export interface FurniturePiece {
  id: string;
  title: string;
  categorySlug: string;
  categoryName: string;
  image: string;
  woodType: string;
  finish: string;
  carvingStyle: string;
  description: string;
  customizationAvailable: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'beds-bedroom' | 'sofas-living' | 'dining-consoles' | 'woodwork-details';
  categoryLabel: string;
  image: string;
  description: string;
  craftDetails: string;
}

export const BUSINESS_INFO = {
  name: 'Divine Homes Furniture Chiniot',
  tagline: 'FURNITURE • CHINIOT',
  type: 'Furniture Manufacturer',
  address: 'Barafkarkhana Road, near Fazal Masjid, Chiniot, Punjab 35400, Pakistan',
  phone: '+92 304 8851120',
  phoneDisplay: '+92 304 8851120',
  whatsappNumber: '923048851120',
  social: {
    instagram: 'https://www.instagram.com/divinehomesfurniture/',
    facebook: 'https://www.facebook.com/divineshomesfurniture',
    pinterest: 'https://www.pinterest.com/divinehomesfurniture/',
  },
  reviewsCount: '10 Google reviews',
  deliveryCities: [
    'Lahore',
    'Karachi',
    'Islamabad',
    'Rawalpindi',
    'Faisalabad',
    'Multan',
    'Gujranwala',
    'Peshawar',
    'Sialkot',
    'Bahawalpur',
    'Sargodha',
    'Across Pakistan & Overseas',
  ],
};

export function getWhatsAppUrl(message?: string): string {
  const defaultMsg =
    'Assalam-o-Alaikum, I am interested in Divine Homes Furniture. Please share your available designs, customization options, and prices.';
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`;
}

export function getProductWhatsAppUrl(productTitle: string, categoryTitle?: string): string {
  const msg = `Assalam-o-Alaikum Divine Homes Furniture, I would like to inquire about the "${productTitle}"${
    categoryTitle ? ` from your ${categoryTitle} collection` : ''
  }. Please share design details, dimensions, available wood finishes, and price quotation.`;
  return getWhatsAppUrl(msg);
}

export const COLLECTIONS_DATA: CollectionCategory[] = [
  {
    id: '1',
    slug: 'bedroom-sets',
    title: 'Luxury Bedroom Sets',
    tagline: 'Master bedroom suites designed with majestic royal headboards & matching vanities',
    description:
      'Imposing Chinioti master bedroom ensembles crafted with seasoned wood, regal crown arches, and plush velvet or damask headboards paired with carved wardrobes and side tables.',
    image: '/images/hero_bedroom.jpg',
    itemsCount: '18+ Classic Designs',
    popularItems: ['Imperial Crown King Bed', 'Carved Dressing Table & Mirror', 'Three-Door Ornate Wardrobe'],
    features: ['Solid seasoned Sheesham/Rosewood', 'Deep relief hand-carving', 'Matching nightstands & vanity dresser'],
  },
  {
    id: '2',
    slug: 'royal-beds',
    title: 'Royal Beds & Headboards',
    tagline: 'Signature statement headboards sculpted with traditional Chinioti filigree',
    description:
      'Opulent bed frames sculpted with deep relief botanical carvings, delicate champagne gold highlights, and ergonomic tufted padding for grand spaces.',
    image: '/images/royal_bed_headboard.jpg',
    itemsCount: '14+ Handcrafted Designs',
    popularItems: ['Sultan Royal Carved Bed', 'Mughal Arch High Headboard Bed', 'Baroque Floral Sheesham Bed'],
    features: ['High-profile arched headboards', 'Traditional floral crests', 'Available in King, Queen & Custom sizes'],
  },
  {
    id: '3',
    slug: 'royal-sofas',
    title: 'Royal Sofa Sets',
    tagline: 'Formal living room suites featuring intricate openwork wood and luxury upholstery',
    description:
      'Exquisite 3+2+1 and 7-seater drawing room sofas featuring openwork wood carving along the crown and apron, upholstered in imported textured jacquards, velvets, and silks.',
    image: '/images/royal_sofa.jpg',
    itemsCount: '22+ Living Room Ensembles',
    popularItems: ['Sheesh Mahal 7-Seater Suite', 'Royal Maharaja 3-Seater Sofa', 'Carved Wingback Accent Chairs'],
    features: ['Continuous carved wooden aprons', 'High-density foam with memory cushioning', 'Custom fabric selection'],
  },
  {
    id: '4',
    slug: 'traditional-deewan',
    title: 'Traditional Deewan',
    tagline: 'Heritage Pakistani daybeds and baithak seating crafted for timeless leisure',
    description:
      'Graceful traditional Chinioti deewans and chaise lounges featuring ornate wooden arches, turned bolster pillows, and authentic cultural elegance for Pakistani sitting rooms.',
    image: '/images/traditional_deewan.jpg',
    itemsCount: '9+ Heritage Models',
    popularItems: ['Kashmiri Arch Sheesham Deewan', 'Royal Chaise Lounge', 'Carved Baithak Settee with Bolsters'],
    features: ['Authentic Chinioti jali carving', 'Double-sided carved arms', 'Includes matching cylindrical bolsters'],
  },
  {
    id: '5',
    slug: 'dining-furniture',
    title: 'Dining Tables & Chairs',
    tagline: 'Gather around handcrafted dining tables built to last generations',
    description:
      'Grand 6, 8, 10, and 12-seater dining suites with lustrous hand-buffed tabletops, sculptured cabriole pedestals, and exquisitely carved high-back chairs.',
    image: '/images/dining_suite.jpg',
    itemsCount: '12+ Dining Suites',
    popularItems: ['Grand 8-Seater Palace Dining Table', 'Chippendale Carved Dining Chairs', 'Ornate Dining Sideboard/Buffet'],
    features: ['Mirror-finish lacquered tabletop', 'Reinforced joinery for longevity', 'Stain-resistant luxury fabric options'],
  },
  {
    id: '6',
    slug: 'console-tables',
    title: 'Console Tables',
    tagline: 'Sculptural entryway masterpieces paired with handcrafted ornate mirrors',
    description:
      'Dramatic focal points for foyers, corridors, and drawing rooms. Each console features sweeping carved legs, ornate front aprons, and matching carved mirror frames.',
    image: '/images/console_entryway.jpg',
    itemsCount: '15+ Console Styles',
    popularItems: ['Mughal Arch Foyer Console & Mirror', 'Curved Rococo Entry Table', 'Carved Hallway Credenza'],
    features: ['Includes matching handcrafted mirror frame', 'Solid wood construction', 'Compact to grand dimensions'],
  },
  {
    id: '7',
    slug: 'hand-carved',
    title: 'Hand-Carved Furniture',
    tagline: 'Pure artisan expression through heritage chiseling and tactile relief',
    description:
      'One-of-a-kind art pieces where master artisans spend weeks chiseling intricate arabesques, floral vine scrolls, and geometric filigree into solid seasoned wood.',
    image: '/images/craftsmanship_carving.jpg',
    itemsCount: 'Masterpiece Collection',
    popularItems: ['Carved Partition Screens (Jali)', 'Handcrafted Jewelry Chests', 'Carved Rocking & Accent Chairs'],
    features: ['100% hand-chiseled detailing', 'No CNC shortcuts or molded plastic', 'Natural seasoned wood grain'],
  },
  {
    id: '8',
    slug: 'custom-furniture',
    title: 'Bespoke Custom Designs',
    tagline: 'Your architectural vision brought to reality by Chiniot master craftsmen',
    description:
      'Tailored dimensions, personalized wood polishes (walnut, mahogany, teak, antique champagne gold, natural matte), and custom room configurations designed specifically for your home.',
    image: '/images/bespoke_workshop.jpg',
    itemsCount: 'Custom Built to Order',
    popularItems: ['Custom Master Suite Plan', 'Turnkey Drawing Room Architecture', 'Custom Wardrobe & TV Unit Units'],
    features: ['Custom blueprint-to-furniture translation', 'Direct craftsman consultation', 'Choice of wood grade & polish'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'The Sultan Master Bedroom Suite',
    category: 'beds-bedroom',
    categoryLabel: 'Beds & Bedroom',
    image: '/images/hero_bedroom.jpg',
    description: 'Carved rosewood king bed with monumental arch, matching nightstands and mirrored vanity.',
    craftDetails: 'Deep relief floral carving with hand-rubbed walnut stain and champagne gold borders.',
  },
  {
    id: 'g2',
    title: 'Royal Imperial Headboard Detail',
    category: 'beds-bedroom',
    categoryLabel: 'Beds & Bedroom',
    image: '/images/royal_bed_headboard.jpg',
    description: 'Majestic arched headboard featuring tufted honey velvet and hand-chiseled cresting.',
    craftDetails: 'Handcrafted floral acanthus scrollwork with antique gilt finish highlights.',
  },
  {
    id: 'g3',
    title: 'Chinioti Palace 3-Seater Royal Sofa',
    category: 'sofas-living',
    categoryLabel: 'Sofas & Living Room',
    image: '/images/royal_sofa.jpg',
    description: 'Curved baroque frame carved with openwork foliage and upholstered in ivory damask.',
    craftDetails: 'Solid sheesham timber structure with hand-tied double springs and deep button-tufting.',
  },
  {
    id: 'g4',
    title: 'Traditional Chinioti Baithak Deewan',
    category: 'sofas-living',
    categoryLabel: 'Sofas & Living Room',
    image: '/images/traditional_deewan.jpg',
    description: 'Heritage Pakistani daybed with openwork carved back, rolled side rails, and silk bolsters.',
    craftDetails: 'Intricate fretwork lattice combined with turned leg posts and hand-polished walnut finish.',
  },
  {
    id: 'g5',
    title: 'The Grand Banquet 8-Seater Dining Set',
    category: 'dining-consoles',
    categoryLabel: 'Dining & Consoles',
    image: '/images/dining_suite.jpg',
    description: 'Polished walnut dining table with hand-carved pedestal base and 8 ornate matching chairs.',
    craftDetails: 'Multi-stage catalyzed finish resistant to heat and moisture, framed by carved borders.',
  },
  {
    id: 'g6',
    title: 'Mughal Heritage Entry Console & Mirror',
    category: 'dining-consoles',
    categoryLabel: 'Dining & Consoles',
    image: '/images/console_entryway.jpg',
    description: 'Sculpted foyer table featuring intricate floral fretwork and an imposing matching arch mirror.',
    craftDetails: 'Architectural mihrab arch design with floral jali panels and concealed storage drawers.',
  },
  {
    id: 'g7',
    title: 'Master Carver Chisel Work in Relief',
    category: 'woodwork-details',
    categoryLabel: 'Woodwork Details',
    image: '/images/craftsmanship_carving.jpg',
    description: 'Master artisan utilizing traditional carbon steel gouges on seasoned sheesham wood.',
    craftDetails: 'Over 40 hours of manual carving invested into a single ornamental panel.',
  },
  {
    id: 'g8',
    title: 'Divine Homes Artisan Workshop & Drafting',
    category: 'woodwork-details',
    categoryLabel: 'Woodwork Details',
    image: '/images/bespoke_workshop.jpg',
    description: 'Master craftsmen fitting custom hand-carved furniture according to custom client specifications.',
    craftDetails: 'Mortise and tenon wood joinery with seasoned timber conditioned to prevent warping.',
  },
];

export const FEATURED_PIECES: FurniturePiece[] = [
  {
    id: 'fp-1',
    title: 'Imperial Chinioti King Bed Set',
    categorySlug: 'bedroom-sets',
    categoryName: 'Luxury Bedroom Sets',
    image: '/images/hero_bedroom.jpg',
    woodType: 'Seasoned Sheesham (Rosewood)',
    finish: 'Warm Walnut with Champagne Gold Crest',
    carvingStyle: 'Deep Floral Relief & Arch Cresting',
    description: 'Monumental master bed complete with two carved nightstands and a multi-drawer dressing table.',
    customizationAvailable: true,
  },
  {
    id: 'fp-2',
    title: 'Royal Crown 7-Seater Living Ensemble',
    categorySlug: 'royal-sofas',
    categoryName: 'Royal Sofa Sets',
    image: '/images/royal_sofa.jpg',
    woodType: 'Selected Dense Sheesham',
    finish: 'Natural Honey Walnut Luster',
    carvingStyle: 'Openwork Foliage & Curved Cabriole Legs',
    description: 'Curated drawing room setup comprising a 3-seater sofa, two single armchairs, and matching center table.',
    customizationAvailable: true,
  },
  {
    id: 'fp-3',
    title: 'Chinioti 8-Seater Formal Dining Suite',
    categorySlug: 'dining-furniture',
    categoryName: 'Dining Tables & Chairs',
    image: '/images/dining_suite.jpg',
    woodType: 'Kiln-Dried Hardwood & Sheesham',
    finish: 'High-Luster Hand-Buffed Walnut',
    carvingStyle: 'Mughal Acanthus Border & Cabriole Legs',
    description: 'Spacious dining table complemented by 8 ergonomically contoured upholstered dining chairs.',
    customizationAvailable: true,
  },
  {
    id: 'fp-4',
    title: 'Traditional Heritage Deewan Settee',
    categorySlug: 'traditional-deewan',
    categoryName: 'Traditional Deewan',
    image: '/images/traditional_deewan.jpg',
    woodType: 'Premium Aged Sheesham',
    finish: 'Antique Walnut with Satin Sealant',
    carvingStyle: 'Perforated Jali & Crest Carving',
    description: 'Traditional Pakistani daybed for baithak and drawing spaces, equipped with matching side bolsters.',
    customizationAvailable: true,
  },
  {
    id: 'fp-5',
    title: 'Mughal Arch Foyer Console & Mirror',
    categorySlug: 'console-tables',
    categoryName: 'Console Tables',
    image: '/images/console_entryway.jpg',
    woodType: 'Solid Handcrafted Sheesham',
    finish: 'Warm Walnut with Antiqued Highlights',
    carvingStyle: 'Ornate Lattice & Floral Pilasters',
    description: 'Statement hallway console featuring utility drawers and a dramatic matching carved mirror frame.',
    customizationAvailable: true,
  },
  {
    id: 'fp-6',
    title: 'Bespoke Architectural Drawing Room Suite',
    categorySlug: 'custom-furniture',
    categoryName: 'Bespoke Custom Designs',
    image: '/images/bespoke_workshop.jpg',
    woodType: 'Custom Choice (Sheesham / Walnut)',
    finish: 'Custom Polish (Matte, Gloss, Antique)',
    carvingStyle: 'Customized according to room blueprints',
    description: 'Full custom room suite designed to precise interior dimensions with custom upholstery.',
    customizationAvailable: true,
  },
];
