import type {Metadata} from 'next'; import TripsSlideshow from '@/components/TripsSlideshow';
export const metadata:Metadata={title:'Completed Trips | Avar Logistics Africa',description:'A visual record of completed vehicle importation, distribution, staff bussing, rental and VIP transport trips by Avar Logistics Africa.'};
const slides=[
 {src:'/images/vehicle-import.jpg',caption:'Vehicle import received and handed over at Tema Port',detail:'Vehicle importation · Tema'},
 {src:'/images/hero-fleet.jpg',caption:'Scheduled distribution run completed on the Accra–Kumasi corridor',detail:'Distribution · Accra–Kumasi'},
 {src:'/images/vip-transport.jpg',caption:'Discreet evening movement for a visiting principal',detail:'Private / VIP drive · Accra'},
 {src:'/images/staff-bussing.jpg',caption:'Daily staff shuttle programme, morning pick-up completed',detail:'Staff bussing · Airport City'},
 {src:'/images/car-rental.jpg',caption:'Long-term rental vehicle inspected and handed to client',detail:'Car rental · Accra'},
 {src:'/images/port-operations.jpg',caption:'Import documentation and port collection coordinated',detail:'Vehicle importation · Tema Port'}
];
export default function Page(){return <main><section className="page-hero"><div className="container"><div className="eyebrow">Operational proof</div><h1 className="display">COMPLETED TRIPS</h1><p>A rolling look at recent movements across importation, distribution, staff bussing, rentals and private/VIP transport.</p></div></section>
<section className="section"><div className="container"><TripsSlideshow slides={slides}/><p className="slides-note"><strong>Note:</strong> The imagery shown is placeholder photography and will be replaced with verified photos from real Avar trips.</p></div></section></main>}
