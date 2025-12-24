import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './LandingNav.css';

export function LandingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`landing-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">TAEKWONDO</div>
        
        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <li><a href="#home">Beranda</a></li>
          <li><a href="#programs">Program</a></li>
          <li><a href="#features">Fitur</a></li>
          <li><a href="#testimonials">Testimoni</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>
        
        <div className="nav-actions">
          <Link to="/admin" className="nav-admin-btn">
            Masuk Admin
          </Link>
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
