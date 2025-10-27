import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const whatsappNumber = '+302310000000'; // Replace with actual number
  const message = 'Hello! I would like to inquire about booking Elysium Retreat.';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;

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
