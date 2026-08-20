import Link from 'next/link';
import { Star, CheckCircle2, ShieldCheck, ArrowRight, MessageSquare, Building2, MapPin, Calendar } from 'lucide-react';
import { testimonials, wa, emergencyPhone } from '@/lib/data';

export const metadata = {
  title: 'Client Testimonials | Avar Logistics Africa',
  description:
    'Verified reviews and performance feedback from corporate fleet directors, private importers, and enterprise partners across Ghana and West Africa.'
};

export default function TestimonialsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow" style={{ color: '#ffb3a1' }}>
            Client Voice & Performance Record
          </div>
          <h1 className="display">TESTIMONIALS</h1>
          <p>
            Verified feedback from enterprise logistics leads, corporate HR directors, event coordinators, and private vehicle importers who rely on Avar across Ghana and West Africa.
          </p>
        </div>
      </section>

      {/* Trust Metrics Bar */}
      <section className="trust-bar-section">
        <div className="container">
          <div className="trust-bar-grid">
            <div className="trust-item">
              <span className="trust-number">99.4%</span>
              <span className="trust-label">On-Time SLA Adherence</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">500+</span>
              <span className="trust-label">Corporate Movements</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">16</span>
              <span className="trust-label">Ghana Regions Covered</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">100%</span>
              <span className="trust-label">Attributable Client Quotes</span>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="section testimonials-full-section">
        <div className="container">
          <div className="section-intro-center">
            <h6 className="mini-head">CLIENT FEEDBACK</h6>
            <h2 className="display">WHAT OUR PARTNERS SAY</h2>
            <p>
              Genuine experiences from clients across vehicle importation, employee transportation, VIP protocol escorts, and regional freight distribution.
            </p>
          </div>

          <div className="t-full-grid">
            {testimonials.map((t) => (
              <div key={t.id} className="t-full-card">
                <div className="t-full-header">
                  <div className="t-stars">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#F23B18" stroke="#F23B18" />
                    ))}
                  </div>
                  <span className="t-highlight-pill">{t.highlight}</span>
                </div>

                <p className="t-full-quote">“{t.quote}”</p>

                <div className="t-full-details">
                  <div className="t-detail-row">
                    <span className="t-service-pill">{t.service}</span>
                    <span className="t-meta-chip">
                      <MapPin size={12} /> {t.location}
                    </span>
                  </div>

                  <div className="t-author-box t-full-author">
                    <div className="t-author-avatar">{t.author.charAt(0)}</div>
                    <div className="t-author-info">
                      <div className="t-author-name">
                        {t.author}
                        <span className="t-verified-tag">
                          <CheckCircle2 size={12} /> Verified
                        </span>
                      </div>
                      <div className="t-author-role">{t.role}</div>
                      <div className="t-author-company">
                        <Building2 size={13} /> {t.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Attributable Trust Policy Box */}
          <div className="trust-policy-banner">
            <div className="trust-policy-icon">
              <ShieldCheck size={36} color="#F23B18" />
            </div>
            <div className="trust-policy-content">
              <h3>OUR ATTRIBUTABILITY & TRUST COMMITMENT</h3>
              <p>
                We do not manufacture anonymous 5-star ratings or fabricated online reviews. Every testimonial on this platform reflects an actual commercial engagement, private clearance, or contracted movement conducted by Avar Logistics Africa Ltd. Client names, designations, and corridor details are verified for authentic accountability.
              </p>
            </div>
          </div>

          {/* Reference Request Card */}
          <div className="reference-cta-card">
            <div className="reference-cta-copy">
              <h6 className="mini-head" style={{ color: '#F23B18' }}>
                CORPORATE DUE DILIGENCE
              </h6>
              <h2>NEED FORMAL REFERENCES OR AN ENTERPRISE PROPOSAL?</h2>
              <p>
                If your procurement team requires verified institutional references, past-performance dossiers, or a custom service level agreement for corporate shuttles or distribution, our corporate relations team is ready.
              </p>
            </div>
            <div className="reference-cta-buttons">
              <Link className="btn btn-primary" href="/contact">
                REQUEST CORPORATE REFERENCES <ArrowRight size={16} />
              </Link>
              <a
                className="btn btn-dark"
                href={wa("Hi Avar, I'd like to request corporate references and information on your enterprise services.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare size={16} /> CHAT ON WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
