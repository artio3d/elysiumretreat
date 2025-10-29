import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const whatsappNumber = '+306978076850';
  const message = 'Hello! I would like to inquire about booking Elysium Retreat.';
  const whatsappUrl = `https://wa.me/306978076850?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#333333] text-[#fffef2] flex items-center justify-center shadow-lg hover:bg-[#000000] transition-smooth"
      style={{ borderRadius: '0px' }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};
