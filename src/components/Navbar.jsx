import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { name: 'Base', href: '#home' },
  { name: 'Logs', href: '#about' },
  { name: 'History', href: '#experience' },
  { name: 'Schematics', href: '#projects' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [health, setHealth] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Simulate health draining slightly over time
    const interval = setInterval(() => {
      setHealth(prev => (prev > 80 ? prev - 1 : prev));
    }, 10000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <nav className={`navbar-zomboid ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <div className="nav-brand">
          <span className="brand-title">UDINI_OS</span>
          <span className="brand-version">v1.0.4</span>
        </div>

        <div className="nav-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link-hud">
              [{link.name}]
            </a>
          ))}
        </div>

        <div className="nav-status">
          <div className="health-label">HP:</div>
          <div className="health-bar">
            <div className="health-fill" style={{ width: `${health}%` }}></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
