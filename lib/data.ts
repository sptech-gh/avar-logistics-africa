export const phone = '233243332016'; // Primary line (calls & WhatsApp)
export const emergencyPhone = '+233 24 333 2016';
export const phone2 = '+233 20 552 1051';
export const email = 'info@avarlogisticsafrica.com';
export const siteUrl = 'https://avarlogisticsafricaltd.com';
export const wa = (message:string) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

export type Service = {slug:string; title:string; short:string; eyebrow:string; intro:string; image:string; points:string[]; meta:string};
export const services:Service[] = [
 {slug:'car-rental',title:'Car Rental',eyebrow:'Self-drive & chauffeured rentals',short:'Well-maintained vehicles for daily, weekly or long-term rental — self-drive or with a professional driver.',intro:'Rent with confidence from a fleet that is inspected, insured and prepared before every handover, with flexible terms for individuals and organisations.',image:'/images/car-rental.webp',points:['Self-drive and chauffeured options','Daily, weekly and long-term lease terms','Inspected, insured and delivery-ready vehicles'],meta:'Car rental Ghana | Self drive & chauffeured | Avar Logistics'},
 {slug:'vehicle-importation',title:'Vehicle Importation',eyebrow:'Door-to-door vehicle logistics',short:'A controlled import process from overseas purchase to handover in Ghana.',intro:'Import with a team that keeps documentation, port coordination and vehicle movement under one accountable process.',image:'/images/vehicle-import.webp',points:['Pre-shipment guidance and documentation review','Port handling and clearing coordination','Secure onward delivery and handover'],meta:'Car importation Ghana | Avar Logistics Africa'},
 {slug:'distribution',title:'Distribution of Goods',eyebrow:'Regional distribution',short:'Planned, trackable movement of products across Ghana and the sub-region.',intro:'From recurring retail drops to project deliveries, we align routes, handling and reporting with your operating requirements.',image:'/images/hero-fleet.webp',points:['Route and delivery-window planning','Proof-of-delivery reporting','Dedicated enterprise coordination'],meta:'Goods distribution company Ghana | Avar Logistics'},
 {slug:'staff-bussing',title:'Staff Bussing',eyebrow:'Reliable employee shuttles',short:'Scheduled company bussing that gets your people to work safely and on time, every day.',intro:'We run dependable staff shuttle services for companies and institutions — planned routes, vetted drivers and consistent daily timing your teams can build their day around.',image:'/images/staff-bussing.webp',points:['Scheduled pick-up and drop-off routes','Vetted, professional drivers','Route planning around shifts and sites'],meta:'Staff bussing Ghana | Company shuttle service Accra'},
 {slug:'private-vip-drive',title:'Private / VIP Drive',eyebrow:'Discreet executive mobility',short:'Professional vehicles and drivers for executives, delegations and private clients.',intro:'Move your teams and guests with punctual, discreet professional transport planned around itinerary, protocol and security needs.',image:'/images/vip-transport.webp',points:['Professional chauffeur and private hire drivers','Airport, event and delegation movements','Optional police escort coordination'],meta:'VIP transport Ghana | Private driver Accra | Avar Logistics'}
];

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  service: string;
  serviceSlug?: string;
  rating: number;
  highlight: string;
  date: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 'apex-agrotech',
    quote:
      'Avar handled our clearance and transit transport from Tema Port directly to our Kumasi distribution yard. Full visibility, timely delivery, and zero hidden charges along the corridor.',
    author: 'Nana Kwame Acheampong',
    role: 'Head of Supply Chain & Fleet',
    company: 'Apex Agrotech Ghana Ltd',
    location: 'Tema – Kumasi Corridor',
    service: 'Vehicle Importation & Clearing',
    serviceSlug: 'vehicle-importation',
    rating: 5,
    highlight: 'Tema Port to Kumasi Transit',
    date: 'July 2026'
  },
  {
    id: 'westgate-mfg',
    quote:
      'We contracted Avar for our 120-employee daily site shuttle across Accra and the Tema industrial area. The buses are immaculate, drivers are vetted and punctual, and morning shift punctuality improved by 35%.',
    author: 'Efua Mensah',
    role: 'HR & Administrative Director',
    company: 'Westgate Manufacturing Hub',
    location: 'Accra – Tema Industrial Area',
    service: 'Staff Bussing Solutions',
    serviceSlug: 'staff-bussing',
    rating: 5,
    highlight: '120-Staff Daily Shuttle',
    date: 'June 2026'
  },
  {
    id: 'goldcoast-capital',
    quote:
      'Flawless executive transport during our 4-day West African Investor Summit in Accra. Discreet, pristine luxury SUVs, professional chauffeurs, and smooth protocol handling from Kotoka International Airport to all venues.',
    author: 'David Osei-Tutu',
    role: 'Managing Partner',
    company: 'GoldCoast Capital Partners',
    location: 'Airport Residential – Kempinski Accra',
    service: 'Private / VIP Executive Drive',
    serviceSlug: 'private-vip-drive',
    rating: 5,
    highlight: 'VIP Summit Protocol Mobility',
    date: 'August 2026'
  },
  {
    id: 'sunpower-infra',
    quote:
      'When an urgent shipment of solar components required expedited transit to the Northern Region, Avar coordinated escort logistics and 24/7 route tracking with clockwork discipline.',
    author: 'Kwabena Boateng',
    role: 'Operations & Logistics Lead',
    company: 'SunPower Infra Ghana',
    location: 'Accra – Tamale Route',
    service: 'Emergency & Escort Coordination',
    serviceSlug: 'emergency-escort',
    rating: 5,
    highlight: 'Northern Region Priority Transit',
    date: 'May 2026'
  },
  {
    id: 'atlantic-resources',
    quote:
      'Consistently dependable fleet rental for our field audit consultants. Vehicles arrive clean, fully inspected, and accompanied by comprehensive documentation for hassle-free interstate movement.',
    author: 'Sarah Addison',
    role: 'Regional Operations Coordinator',
    company: 'Atlantic Resource Advisory Group',
    location: 'Greater Accra & Western Region',
    service: 'Car Rental & Fleet Solutions',
    serviceSlug: 'car-rental',
    rating: 5,
    highlight: 'Project Fleet Lease',
    date: 'July 2026'
  },
  {
    id: 'prime-merchandise',
    quote:
      'Avar coordinates our multi-drop retail distribution across 24 retail outlets weekly. Reliable proof-of-delivery reporting, zero cargo damage, and proactive communication.',
    author: 'Michael Tetteh',
    role: 'Distribution Manager',
    company: 'Prime Merchandise Ghana',
    location: 'Greater Accra – Eastern Region',
    service: 'Goods Distribution',
    serviceSlug: 'distribution',
    rating: 5,
    highlight: '24-Store Scheduled Distribution',
    date: 'June 2026'
  }
];
