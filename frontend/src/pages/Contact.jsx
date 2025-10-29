import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, User, MessageSquare, ExternalLink } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - in production this would send to backend
    console.log('Booking inquiry submitted:', formData);
    toast({
      title: "Inquiry Sent!",
      description: "Thank you for your interest. We'll contact you shortly to confirm your booking.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      guests: '2',
      message: ''
    });
  };

  return (
    <div>
      {/* Header */}
      <section className="section-padding-small">
        <div className="container">
          <h1 className="hero-large mb-6 text-center">
            Contact & Booking
          </h1>
          <p className="body-large text-[#666666] text-center max-w-3xl mx-auto">
            Ready to reserve your sanctuary? Get in touch with us directly or book through our trusted partners.
          </p>
        </div>
      </section>

      {/* Booking Options */}
      <section className="section-padding-small bg-[#f6f5e8]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-1 mb-12 text-center">Book Your Stay</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {/* Direct Booking */}
              <div className="border-2 border-[#333333] p-8">
                <h3 className="heading-2 mb-4">Direct Booking</h3>
                <p className="body-regular text-[#666666] mb-6">
                  Book directly with us for the best rates and personalized service. Fill out the form below and we'll get back to you within 24 hours.
                </p>
                <div className="inline-block px-4 py-2 bg-[#333333] text-[#fffef2]">
                  <span className="body-small font-bold">RECOMMENDED</span>
                </div>
              </div>

              {/* Booking.com */}
              <div className="border border-[#bcbbb4] p-8">
                <h3 className="heading-2 mb-4">Book via Booking.com</h3>
                <p className="body-regular text-[#666666] mb-6">
                  Prefer to book through a trusted platform? Reserve your stay on Booking.com with instant confirmation.
                </p>
                <a
                  href="https://www.booking.com/Share-yssY88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Book on Booking.com
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Direct Booking Form */}
            <div className="max-w-3xl mx-auto">
              <h3 className="heading-2 mb-8 text-center">Direct Booking Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="body-regular block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#bcbbb4] focus:outline-none focus:border-[#333333] bg-[#fffef2]"
                      style={{ borderRadius: '0px' }}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="body-regular block mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#bcbbb4] focus:outline-none focus:border-[#333333] bg-[#fffef2]"
                      style={{ borderRadius: '0px' }}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="body-regular block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#bcbbb4] focus:outline-none focus:border-[#333333] bg-[#fffef2]"
                    style={{ borderRadius: '0px' }}
                    placeholder="+30 123 456 7890"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="checkIn" className="body-regular block mb-2">
                      Check-In *
                    </label>
                    <input
                      type="date"
                      id="checkIn"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#bcbbb4] focus:outline-none focus:border-[#333333] bg-[#fffef2]"
                      style={{ borderRadius: '0px' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="checkOut" className="body-regular block mb-2">
                      Check-Out *
                    </label>
                    <input
                      type="date"
                      id="checkOut"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#bcbbb4] focus:outline-none focus:border-[#333333] bg-[#fffef2]"
                      style={{ borderRadius: '0px' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" className="body-regular block mb-2">
                      Guests *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#bcbbb4] focus:outline-none focus:border-[#333333] bg-[#fffef2]"
                      style={{ borderRadius: '0px' }}
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="body-regular block mb-2">
                    Special Requests or Questions
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-[#bcbbb4] focus:outline-none focus:border-[#333333] bg-[#fffef2]"
                    style={{ borderRadius: '0px' }}
                    placeholder="Let us know if you have any special requests or questions about your stay..."
                  />
                </div>

                <div className="text-center">
                  <button type="submit" className="btn-primary">
                    Submit Booking Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container">
          <h2 className="heading-1 mb-12 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 border border-[#bcbbb4] mb-6">
                <Mail size={24} className="text-[#333333]" />
              </div>
              <h3 className="heading-3 mb-4">Email</h3>
              <a href="mailto:info@elysiumretreat.com" className="body-regular text-[#666666] hover:text-[#333333] transition-smooth">
                info@elysiumretreat.com
              </a>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 border border-[#bcbbb4] mb-6">
                <Phone size={24} className="text-[#333333]" />
              </div>
              <h3 className="heading-3 mb-4">Phone / WhatsApp</h3>
              <a href="tel:+306978076850" className="body-regular text-[#666666] hover:text-[#333333] transition-smooth">
                +30 697 807 6850
              </a>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 border border-[#bcbbb4] mb-6">
                <MapPin size={24} className="text-[#333333]" />
              </div>
              <h3 className="heading-3 mb-4">Location</h3>
              <p className="body-regular text-[#666666]">
                Thessaloniki, Greece
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="max-w-4xl mx-auto">
            <div className="w-full" style={{ height: '400px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.8!2d22.9444!3d40.6401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDM4JzI0LjQiTiAyMsKwNTYnMzkuOCJF!5e0!3m2!1sen!2sgr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elysium Retreat Location Map"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};