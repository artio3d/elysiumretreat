import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/suite', label: 'The Suite' },
    { path: '/amenities', label: 'Amenities' },
    { path: '/area', label: 'The Area' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="navigation-header">
      <Link to="/" className="navigation-logo">
        <img 
          src="https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/u386b7x4_ChatGPT%20Image%206%20%CE%99%CE%BF%CF%85%CE%BD%202025%2C%2002_10_00%20%CE%BC.%CE%BC..png" 
          alt="Elysium Retreat Logo" 
        />
        <span>Elysium Retreat</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="navigation-menu hidden lg:flex">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`navigation-link ${location.pathname === link.path ? 'active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Utilities */}
      <div className="navigation-utilities">
        <Link to="/contact" className="btn-primary hidden sm:inline-flex">
          Book Your Stay
        </Link>
        
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
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="navigation-text text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary mt-8"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Your Stay
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};