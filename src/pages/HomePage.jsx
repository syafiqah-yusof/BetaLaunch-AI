import { Link } from 'react-router-dom';
import Nav from '../components/Nav.jsx';

export default function HomePage() {
  return (
    <div>
      <Nav />
      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <h1>
              Turn your SaaS docs into{' '}
              <span>compliance profiles & launch kits</span>
            </h1>
            <p>
              BetaLaunch replaces compliance analysts and launch copywriters
              with a single automated pipeline. Paste your docs, get
              enterprise-ready compliance audits and Product Hunt launch
              collateral — in minutes, not days.
            </p>
            <div className="hero-buttons">
              <Link to="/submit" className="btn btn-accent">
                Get Started Free
              </Link>
              <Link to="/submit" className="btn btn-secondary">
                Try the Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="services">
          <div className="container">
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon icon-compliance">&#128736;</div>
                <h3>Compliance Knowledge Base</h3>
                <p>
                  Ingest your raw business documentation into a structured
                  compliance profile across 4 pillars: Data Security, Access
                  Control, Operational Resilience, and Regulatory Compliance.
                </p>
                <ul className="service-features">
                  <li>Auto-fills enterprise security questionnaires</li>
                  <li>Flags missing data with [MISSING DATA] markers</li>
                  <li>Covers SOC 2, GDPR, HIPAA requirements</li>
                  <li>Eliminates manual analyst hours</li>
                </ul>
              </div>
              <div className="service-card">
                <div className="service-icon icon-launch">&#128640;</div>
                <h3>Product Hunt Launch Kit</h3>
                <p>
                  Transform your raw landing page content into
                  hyper-optimized Product Hunt launch collateral optimized for
                  the PH ranking algorithm and conversion.
                </p>
                <ul className="service-features">
                  <li>Taglines, descriptions & first comment copy</li>
                  <li>Target persona & positioning audit</li>
                  <li>Social angle of attack strategy</li>
                  <li>Ready-to-ship in under 30 minutes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="pricing">
          <div className="container">
            <h2>Simple, transparent pricing</h2>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Per Launch</h3>
                <div className="price">$199</div>
                <div className="price-period">one-time per audit + launch kit</div>
                <ul className="price-usps">
                  <li>Full compliance profile audit</li>
                  <li>Product Hunt launch kit</li>
                  <li>Structured Markdown output</li>
                  <li>Results in under 1 hour</li>
                </ul>
                <Link to="/submit" className="btn btn-primary">
                  Get Started
                </Link>
              </div>
              <div className="pricing-card featured">
                <div className="badge">Best Value</div>
                <h3>Monthly Subscription</h3>
                <div className="price">$499</div>
                <div className="price-period">per month, unlimited compliance updates</div>
                <ul className="price-usps">
                  <li>Unlimited compliance ingestions</li>
                  <li>1 launch kit per month</li>
                  <li>Auto-updates as docs change</li>
                  <li>Priority processing</li>
                </ul>
                <Link to="/submit" className="btn btn-accent">
                  Subscribe Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <p>&copy; 2026 BetaLaunch AI. Built for SaaS founders who ship.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}