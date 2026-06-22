import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav container">
      <Link to="/" className="nav-logo">
        <span>BetaLaunch</span>
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/submit">Submit Content</Link>
        <Link to="/submit" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: 14 }}>
          Get Started
        </Link>
      </div>
    </nav>
  );
}