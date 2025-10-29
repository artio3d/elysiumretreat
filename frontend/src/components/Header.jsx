import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHomePage = location.pathname === '/';

  const handleAnchorClick = (e, anchor) => {
    e.preventDefault();
    if (!isHomePage) {
      window.location.href = `/#${anchor}`;
    } else {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="navigation-header">
      <Link to="/" className="navigation-logo">
        <div className="flex flex-col">
          <span className="logo-elysium">Elysium</span>
          <span className="logo-retreat">RETREAT</span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="navigation-menu hidden lg:flex">
        <a href="/#home" onClick={(e) => handleAnchorClick(e, 'home')} className="navigation-link">
          Home
        </a>
        <Link to="/area" className="navigation-link">
          The Area
        </Link>
        <Link to="/about" className="navigation-link">
          About Us
        </Link>
        <a href="/#contact" onClick={(e) => handleAnchorClick(e, 'contact')} className="navigation-link">
          Contact
        </a>
      </nav>

      {/* Utilities */}
      <div className="navigation-utilities">
        <a href="/#contact" onClick={(e) => handleAnchorClick(e, 'contact')} className="btn-primary hidden sm:inline-flex">
          Book Your Stay
        </a>
        
        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] bg-[#fffef2] z-50 lg:hidden">
          <nav className="flex flex-col p-8 space-y-6">
            <a
              href="/#home"
              onClick={(e) => handleAnchorClick(e, 'home')}
              className="navigation-text text-lg"
            >
              Home
            </a>
            <Link
              to="/area"
              className="navigation-text text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              The Area
            </Link>
            <Link
              to="/about"
              className="navigation-text text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <a
              href="/#contact"
              onClick={(e) => handleAnchorClick(e, 'contact')}
              className="navigation-text text-lg"
            >
              Contact
            </a>
            <a
              href="/#contact"
              onClick={(e) => handleAnchorClick(e, 'contact')}
              className="btn-primary mt-8"
            >
              Book Your Stay
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};