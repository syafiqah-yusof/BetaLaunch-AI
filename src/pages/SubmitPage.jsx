import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav.jsx';

export default function SubmitPage() {
  const [formType, setFormType] = useState('compliance');
  const [content, setContent] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a future phase, this will POST to the agent pipeline backend
    console.log('Submitted:', { formType, content, email });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <Nav />
        <main>
          <section className="page-header">
            <div className="container">
              <h1>Submission received!</h1>
              <p>
                Thank you! Your {formType === 'compliance' ? 'compliance documentation' : 'Product Hunt content'} is being
                processed by our agent squad. You'll receive your output at{' '}
                <strong>{email}</strong> shortly.
              </p>
              <div style={{ marginTop: 32 }}>
                <Link to="/" className="btn btn-primary">
                  Back to Home
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <main>
        <section className="page-header">
          <div className="container">
            <h1>Submit your content</h1>
            <p>
              Paste your raw business documentation or landing page content
              below. Our AI squad will process it and deliver your results.
            </p>
          </div>
        </section>

        <section className="form-section">
          <div className="container">
            <div className="form-card">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="formType">What do you want to generate?</label>
                  <select
                    id="formType"
                    value={formType}
                    onChange={(e) => setFormType(e.target.value)}
                  >
                    <option value="compliance">
                      Compliance Knowledge Base Audit ($199)
                    </option>
                    <option value="launch">
                      Product Hunt Launch Kit ($199)
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your email address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                  />
                  <div className="helper">
                    We'll send your results here.
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="content">
                    {formType === 'compliance'
                      ? 'Paste your business documentation'
                      : 'Paste your landing page content'}
                  </label>
                  <div className="helper">
                    {formType === 'compliance'
                      ? 'Paste raw documentation (security policies, architecture docs, compliance notes, etc.) — we extract structure from anything.'
                      : 'Paste your full landing page text (headlines, features, testimonials, about section) — we strip the fluff and find your real positioning.'}
                  </div>
                  <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder={
                      formType === 'compliance'
                        ? 'Paste your security documentation, data handling policies, access control procedures, DR plans...'
                        : 'Paste your landing page headline, subheadings, feature descriptions, customer quotes, pricing info...'
                    }
                    required
                  />
                </div>

                <div className="form-actions">
                  <Link to="/" className="btn btn-secondary">
                    Cancel
                  </Link>
                  <button type="submit" className="btn btn-accent">
                    Generate {formType === 'compliance' ? 'Compliance Profile' : 'Launch Kit'} &mdash; $199
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <p>&copy; 2026 BetaLaunch AI. Built for SaaS founders who ship.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}