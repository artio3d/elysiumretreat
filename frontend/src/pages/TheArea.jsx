import React from 'react';
import { MapPin, Utensils, ShoppingBag, Landmark } from 'lucide-react';

export const TheArea = () => {
  const sightseeing = [
    { name: 'White Tower', distance: '1.2 km', time: '15 min walk' },
    { name: 'Aristotelous Square', distance: '0.8 km', time: '10 min walk' },
    { name: 'Rotunda of Galerius', distance: '1.5 km', time: '18 min walk' },
    { name: 'Archaeological Museum', distance: '2.0 km', time: '25 min walk' },
    { name: 'Byzantine Walls', distance: '2.5 km', time: '30 min walk' }
  ];

  const dining = [
    { name: 'Traditional Taverna Ouzeri', distance: '0.3 km', time: '4 min walk' },
    { name: 'Modern Greek Cuisine', distance: '0.5 km', time: '6 min walk' },
    { name: 'Waterfront Cafes', distance: '1.0 km', time: '12 min walk' },
    { name: 'Local Markets', distance: '0.7 km', time: '8 min walk' },
    { name: 'Rooftop Bars', distance: '0.6 km', time: '7 min walk' }
  ];

  const shopping = [
    { name: 'Tsimiski Street Shopping', distance: '0.9 km', time: '11 min walk' },
    { name: 'Local Artisan Shops', distance: '0.4 km', time: '5 min walk' },
    { name: 'Modiano Market', distance: '1.1 km', time: '14 min walk' },
    { name: 'Contemporary Boutiques', distance: '0.8 km', time: '10 min walk' }
  ];

  return (
    <div>
      {/* Header */}
      <section className="section-padding-small">
        <div className="container">
          <h1 className="hero-large mb-6 text-center">
            Discover Thessaloniki
          </h1>
          <p className="body-large text-[#666666] text-center max-w-3xl mx-auto">
            Elysium Retreat places you at the heart of one of Greece's most vibrant cities. From ancient landmarks to modern dining, everything is within easy reach.
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding-small bg-[#f6f5e8]">
        <div className="container">
          <h2 className="heading-1 mb-8 text-center">Our Location</h2>
          <div className="w-full" style={{ height: '500px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.8!2d22.9444!3d40.6401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDM4JzI0LjQiTiAyMsKwNTYnMzkuOCJF!5e0!3m2!1sen!2sgr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elysium Retreat Location"
            />
          </div>
          <div className="text-center mt-8">
            <a
              href="https://maps.app.goo.gl/9kMGhxrQjmSf4Q4h7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
            >
              <MapPin size={12} />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Points of Interest */}
      <section className="section-padding">
        <div className="container">
          <h2 className="heading-1 mb-16 text-center">Nearby Attractions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Sightseeing */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Landmark size={24} className="text-[#333333]" />
                <h3 className="heading-3">Sightseeing</h3>
              </div>
              <div className="space-y-4">
                {sightseeing.map((place, index) => (
                  <div key={index} className="border-b border-[#ebeade] pb-4">
                    <p className="body-regular font-medium mb-1">{place.name}</p>
                    <p className="body-small text-[#666666]">{place.distance} • {place.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dining */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Utensils size={24} className="text-[#333333]" />
                <h3 className="heading-3">Food & Drink</h3>
              </div>
              <div className="space-y-4">
                {dining.map((place, index) => (
                  <div key={index} className="border-b border-[#ebeade] pb-4">
                    <p className="body-regular font-medium mb-1">{place.name}</p>
                    <p className="body-small text-[#666666]">{place.distance} • {place.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Shopping */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <ShoppingBag size={24} className="text-[#333333]" />
                <h3 className="heading-3">Shopping</h3>
              </div>
              <div className="space-y-4">
                {shopping.map((place, index) => (
                  <div key={index} className="border-b border-[#ebeade] pb-4">
                    <p className="body-regular font-medium mb-1">{place.name}</p>
                    <p className="body-small text-[#666666]">{place.distance} • {place.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-small bg-[#f6f5e8]">
        <div className="container text-center">
          <h2 className="hero-medium mb-8">
            Your Thessaloniki Adventure Awaits
          </h2>
          <p className="body-large text-[#666666] mb-12 max-w-2xl mx-auto">
            Book your stay and discover why Thessaloniki is one of Greece's most captivating cities.
          </p>
          <a href="/contact" className="btn-primary">
            Book Your Stay
          </a>
        </div>
      </section>
    </div>
  );
};