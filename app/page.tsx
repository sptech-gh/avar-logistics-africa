import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, Star, CheckCircle2, Quote } from 'lucide-react';
import { services, wa, emergencyPhone, testimonials } from '@/lib/data';
import Counter from '@/components/Counter';

const serviceImages: Record<string, string> = {
  'car-rental': '/images/car-rental.webp',
  'vehicle-importation': '/images/vehicle-import.webp',
  'distribution': '/images/hero-fleet.webp',
  'staff-bussing': '/images/staff-bussing.webp',
  'private-vip-drive': '/images/vip-transport.webp'
};
const ticker = [
  'VIP transport',
  '24/7 Emergency & escort',
  'Car rentals',
  'Logistics',
  'Private hire driver',
  'Car importation',
  'Staff bussing'
];

export default function Home() {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <main>
      <section className="heroF">
        <video
          className="heroF-bg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-fleet.webp"
          aria-label="Avar Logistics fleet, vehicle importation, VIP transport and port operations"
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>
        <div className="heroF-overlay" />
        <div className="container heroF-inner">
          <div className="eyebrow" style={{ color: '#ffb3a1' }}>
            Avar Logistics Africa · Ghana & West Africa
          </div>
          <h1 className="display heroF-title">
            IMPORTS, RENTALS, AND
            <br />
            <em>VIP TRANSPORT.</em>
          </h1>
          <p>
            One accountable partner for vehicle importation, car rentals, goods distribution, staff bussing and executive movement — planned with discipline, executed with safety at the centre.
          </p>
          <div className="heroF-actions">
            <Link className="btn btn-primary" href="/contact">
              GET A QUOTE <ArrowRight size={16} />
            </Link>
            <Link className="heroF-alt" href="/partnerships">
              BECOME AN AVAR PARTNER<i />
            </Link>
          </div>
        </div>
        <div className="marquee">
          <div className="marquee-track">
            {[...ticker, ...ticker, ...ticker, ...ticker].map((t, i) => (
              <span key={i}>
                {t}
                <b>◆</b>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section whowe">
        <div className="container whowe-grid">
          <div className="whowe-media">
            <Image
              src="/images/team-fleet.webp"
              alt="Avar drivers and coordinators with the company fleet in Accra"
              width={880}
              height={660}
            />
            <i className="whowe-frame" />
          </div>
          <div className="whowe-copy">
            <h6 className="mini-head">WHO WE ARE</h6>
            <h2 className="display">A GHANAIAN LOGISTICS PARTNER BUILT ON DISCIPLINE.</h2>
            <p>
              Avar Logistics Africa Ltd is a Ghanaian-owned transport and logistics company serving organisations and individuals across Ghana and the West African sub-region. We bring vehicle importation, car rentals, goods distribution, staff bussing and private/VIP transport under one professional standard.
            </p>
            <p>
              Fewer hand-offs. Clearer accountability. A team that communicates early, plans routes responsibly and treats every movement — from a single rental to an enterprise shuttle programme — with the same safety-led care.
            </p>
            <Link className="btn btn-dark" href="/about">
              LEARN MORE <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section whatwedo">
        <div className="container">
          <h2 className="display center-head">WHAT WE DO</h2>
          <div className="wedo-grid">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="wedo-card">
                <div className="wedo-img">
                  <Image
                    src={serviceImages[s.slug] || s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width:850px) 50vw, 25vw"
                  />
                </div>
                <span>{s.title}</span>
              </Link>
            ))}
            <Link href="/emergency-escort" className="wedo-card wedo-hot">
              <div className="wedo-img">
                <Image
                  src="/images/vip-transport.webp"
                  alt="Emergency and escort coordination"
                  fill
                  sizes="(max-width:850px) 50vw, 25vw"
                />
              </div>
              <span>
                <b className="pulse" />
                Emergency & Escort
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="spotlight">
        <div className="container spotlight-inner">
          <h6 className="mini-head" style={{ color: '#ff8b72' }}>
            SIGNATURE SERVICE
          </h6>
          <h2 className="display">THE EMERGENCY & ESCORT DESK</h2>
          <i className="spot-rule" />
          <p>
            When movement becomes urgent — a medical run, a high-value vehicle movement, a principal who must arrive on time — you speak directly with a response coordinator, not a generic inbox. We coordinate emergency transport, arrange police escort support for approved movements, and can document the journey on video for your records.
          </p>
          <div className="spotlight-actions">
            <a className="btn btn-primary" href={`tel:${emergencyPhone}`}>
              <Phone size={16} /> {emergencyPhone}
            </a>
            <Link className="heroF-alt" href="/emergency-escort">
              HOW THE ESCORT DESK WORKS<i />
            </Link>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          <div>
            <p>Integrated services</p>
            <h3 className="display">
              <Counter value={6} />
            </h3>
          </div>
          <div>
            <p>Regions of Ghana covered</p>
            <h3 className="display">
              <Counter value={16} />
            </h3>
          </div>
          <div>
            <p>Emergency response desk</p>
            <h3 className="display">
              <Counter value={24} suffix="/7" />
            </h3>
          </div>
          <div>
            <p>Seaports coordinated</p>
            <h3 className="display">
              <Counter value={2} />
            </h3>
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <div className="testimonials-head">
            <div>
              <h6 className="mini-head">CLIENT VERIFICATION</h6>
              <h2 className="display">PROVEN PERFORMANCE ON GHANAIAN ROADS.</h2>
            </div>
            <p className="testimonials-intro-text">
              What corporate fleet directors, project coordinators, and private clients say about working with Avar Logistics Africa.
            </p>
          </div>

          <div className="t-grid">
            {featuredTestimonials.map((t) => (
              <div key={t.id} className="t-card">
                <div className="t-card-top">
                  <div className="t-stars">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#F23B18" stroke="#F23B18" />
                    ))}
                  </div>
                  <span className="t-tag">{t.highlight}</span>
                </div>
                <p className="t-quote">“{t.quote}”</p>
                <div className="t-author-box">
                  <div className="t-author-avatar">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="t-author-name">
                      {t.author}
                      <CheckCircle2 size={13} className="t-verified-icon" />
                    </div>
                    <div className="t-author-role">{t.role}</div>
                    <div className="t-author-company">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials-action-bar">
            <Link className="btn btn-dark" href="/testimonials">
              VIEW ALL CLIENT REVIEWS <ArrowRight size={16} />
            </Link>
            <span className="testimonials-policy-note">
              ✓ 100% Attributable Corporate & Private Client Reviews
            </span>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2 className="display">YOUR NEXT MOVEMENT STARTS WITH A CLEAR CONVERSATION.</h2>
          <a
            className="btn btn-primary"
            href={wa("Hi Avar, I'd like to discuss a logistics requirement.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Message an agent <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}
