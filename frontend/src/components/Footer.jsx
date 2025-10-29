import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f6f5e8] border-t border-[#bcbbb4]">
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact */}
          <div>
            <h4 className="heading-3 mb-6">Contact</h4>
            <div className="space-y-4">
              <a href="mailto:elysiumretreat@gmail.com" className="flex items-center gap-3 text-[#666666] hover:text-[#333333] transition-smooth">
                <Mail size={16} />
                <span className="body-regular">elysiumretreat@gmail.com</span>
              </a>
              <a href="tel:+306978076850" className="flex items-center gap-3 text-[#666666] hover:text-[#333333] transition-smooth">
                <Phone size={16} />
                <span className="body-regular">+30 697 807 6850</span>
              </a>
              <a
                href="https://maps.app.goo.gl/9kMGhxrQjmSf4Q4h7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-[#666666] hover:text-[#333333] transition-smooth"
              >
                <MapPin size={16} className="mt-1" />
                <span className="body-regular">Thessaloniki, Greece</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-3 mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/elysium.stay/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-[#bcbbb4] hover:bg-[#C86432] hover:text-[#fffef2] hover:border-[#C86432] transition-smooth rounded-lg"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61577150067312"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-[#bcbbb4] hover:bg-[#C86432] hover:text-[#fffef2] hover:border-[#C86432] transition-smooth rounded-lg"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#bcbbb4] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="body-small text-[#666666]">
            © 2025 Elysium Retreat. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="btn-icon"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};